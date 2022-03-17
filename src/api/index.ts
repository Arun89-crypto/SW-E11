import { Router } from "express";
import controller from "./controller";

export default (): Router => {
  const app = Router();
  app.use("/test", (req, res) => {
    res.send("At Test");
  });
  app.use("/user", controller());
  return app;
};
