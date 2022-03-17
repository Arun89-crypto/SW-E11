import express from "./express";
import Logger from "./logger";
import Express from "express";
import { initDbClient } from "./db";

export default async ({
  expressApp,
}: {
  expressApp: Express.Application;
}): Promise<void> => {
  await initDbClient();
  express({ app: expressApp });
  Logger.info("✌️ Express loaded");

  Logger.info("✅ All modules loaded!");
};
