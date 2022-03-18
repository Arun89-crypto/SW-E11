import { Router } from "express";
import controller from "./controller";
import dashboardRouter from "./dashboard/router";

export default (): Router => {
  const app = Router();
  app.use("/user", controller());
  app.use("/dashboard", dashboardRouter);
  return app;
};
