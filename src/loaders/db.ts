import { MongoClient } from "mongodb";

let dbClient: MongoClient;

export async function initDbClient(): Promise<MongoClient> {
  try {
      // replace with process.env.DB_URI
    dbClient = await MongoClient.connect("mongodb://127.0.0.1:27017/autism");
    console.log("Connected to Database");
    return dbClient;
  } catch (error) {
    console.log("Cannot connect to Database", error);
  }
}

export async function getDbClient(): Promise<MongoClient> {
  if (!dbClient) {
    await initDbClient();
  }
  return dbClient;
}
