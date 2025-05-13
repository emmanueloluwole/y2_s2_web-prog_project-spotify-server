// routes/spotify.mjs
import express from "express";
import { ObjectId } from "mongodb";
import db from "../db/conn.mjs"; // Database connection

const router = express.Router();

// GET all documents
router.get("/", async (req, res) => {
  const collection = db.collection("spotify");
  const results = await collection.find({}).limit(50).toArray();
  res.status(200).send(results);
});

// GET single document by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const collection = db.collection("spotify");
  const result = await collection.findOne({ _id: new ObjectId(id) });

  if (!result) {
    res.status(404).send("Not found");
  } else {
    res.status(200).send(result);
  }
});

// POST a new document
router.post("/", async (req, res) => {
  const collection = db.collection("spotify");
  const newDocument = {
    ...req.body,
    date: new Date(),
  };
  const result = await collection.insertOne(newDocument);
  res.status(201).send(result);
});

export default router;
