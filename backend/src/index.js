import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dashboardRouter from "./routes/dashboard.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/dashboard", dashboardRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`🚀 API listening on http://localhost:${PORT}`)
);