import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { readFileSync } from "fs";
import path from "path";

import { JobType } from "./interfaces";
import { getJobs, getSingleJob } from "./controller";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const dataFilePath = path.join(__dirname, "data.json");
const rawData = readFileSync(dataFilePath);
export const jobsData: JobType[] = JSON.parse(rawData.toString());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to devJobs api");
});
app.get("/devjobs", getJobs);
app.get("/devjobs/:id", getSingleJob);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
