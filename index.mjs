
import "express-async-errors"; 
import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs"; 
import spotifyRoutes from "./routes/spotify.mjs";

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());


app.use("/spotify", spotifyRoutes);

app.use((err, _req, res, _next) => {
  console.error("Server error:", err);
  res.status(500).send("Uh oh! An unexpected error occurred.");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
