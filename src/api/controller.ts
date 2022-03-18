import { NextFunction, Request, Response, Router } from "express";
import { validateRequest } from "../loaders/validator";
import { signupSchema } from "./schema";
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

export default function controller() {
  const router = Router();
  router.post("/signup", validateRequest("body", signupSchema), handleSignUp);
  router.post("/login", validateRequest("body", signupSchema), handleLogin);
  return router;
}
