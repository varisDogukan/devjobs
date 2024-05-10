import { Request, Response } from "express";

import { jobsData } from ".";
import { filterJobs } from "./helper";
import { JobType } from "./interfaces";

export function getJobs(req: Request, res: Response) {
  const search = req.query.search as string | undefined;
  const location = req.query.location as string | undefined;
  const fullTimeOnly = req.query.fullTimeOnly === "true";

  const filteredJobs = filterJobs(jobsData, search, location, fullTimeOnly);

  res.json(filteredJobs);
}

export function getSingleJob(req: Request, res: Response) {
  const jobId = req.params.id as string;

  const singleJob = jobsData.filter((job: JobType) => job.id === Number(jobId));

  res.json(singleJob);
}
