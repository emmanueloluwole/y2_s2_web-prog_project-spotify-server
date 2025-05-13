
import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error("MongoDB connection failed:", e);
}

const db = conn.db("wp1"); 

export default db;
