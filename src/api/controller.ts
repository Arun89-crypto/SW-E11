import { NextFunction, Request, Response, Router } from "express";
import { validateRequest } from "../loaders/validator";
import { emailSchema, signupSchema } from "./schema";
import bcrypt from "bcrypt";
import { getDbClient } from "../loaders/db";
import * as jwt from "jsonwebtoken";

const handleSignUp = async (req: Request, res: Response) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const dbClient = await getDbClient();
    const userData = await dbClient
      .db()
      .collection("users")
      .findOne({ email: req.body.email });
    if (userData) {
      throw { code: 409, message: "User already exists!" };
    }
    await dbClient
      .db()
      .collection("users")
      .insertOne({
        email: req.body.email,
        password: hashedPassword,
        createdAt: +new Date(),
      });
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res
      .status(err.code || 500)
      .json({ success: false, message: err.message || "ISR" });
  }
};

const handleLogin = async (req: Request, res: Response) => {
  try {
    const dbClient = await getDbClient();
    const userData = await dbClient
    .db()
    .collection("users")
    .findOne({ email: req.body.email });
    if (!userData) {
      throw { code: 404, message: "User does not exist!" };
    }
    if (!(await bcrypt.compare(req.body.password, userData.password)))
      throw { code: 403, message: "User wrong password!" };
    const token = jwt.sign(
      {
        email: req.body.email,
      },
      process.env.SECRET
    );
    res.status(200).json({ success: true, token: token });
  } catch (err) {
    console.log(err);
    res
      .status(err.code || 500)
      .json({ success: false, message: err.message || "ISR" });
  }
};

const handleConnections = async (req: Request, res: Response) => {
  try {
    const dbClient = await getDbClient();
    const userData = await dbClient
      .db()
      .collection("users")
      .findOne({ email: req.body.email });
    if (!userData) throw { code: 404, message: "User does not exist!" };
    let arr = await dbClient.db().collection("users").find({}).toArray();
    if (userData.hobbies.length) {
      arr = await dbClient
        .db()
        .collection("users")
        .find({ skills: { $elemMatch: { $eq: userData.skills[0] } } })
        .toArray();
    }
    if (userData.skills.length) {
      const skillsa = await dbClient
        .db()
        .collection("users")
        .find({ skills: { $elemMatch: { $eq: userData.skills[0] } } })
        .toArray();
      arr = arr.concat(skillsa);
    }
    if (arr.length < 2) {
      const newa = await (
        await dbClient.db().collection("users").find({})
      ).toArray();
      arr = arr.concat(newa);
    }
    res.json({ connections: arr.slice(0, 3) });
  } catch (err) {
    console.log(err);
    res
      .status(err.code || 500)
      .json({ success: false, message: err.message || "ISR" });
  }
};

export default function controller() {
  const router = Router();
  router.post("/signup", validateRequest("body", signupSchema), handleSignUp);
  router.post("/login", validateRequest("body", signupSchema), handleLogin);
  router.post(
    "/connections",
    validateRequest("body", emailSchema),
    handleConnections
  );
  return router;
}
