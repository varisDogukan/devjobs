import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { readFileSync } from "fs";
import path from "path";
import cors from "cors";

import { JobType } from "./interfaces";
import { getJobs, getSingleJob } from "./controller";

dotenv.config();

const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

const dataFilePath = path.join(__dirname, "data.json");
const rawData = readFileSync(dataFilePath);
export const jobsData: JobType[] = JSON.parse(rawData.toString());

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Welcome to devjobs api</h1>");
});
app.get("/devjobs", getJobs);
app.get("/devjobs/:id", getSingleJob);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
