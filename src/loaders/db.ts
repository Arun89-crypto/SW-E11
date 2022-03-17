import { MongoClient } from "mongodb";

let dbClient: MongoClient;

export async function initDbClient(): Promise<MongoClient> {
  try {
    dbClient = await MongoClient.connect(process.env.DB_URI);
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
