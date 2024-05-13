import { Request, Response } from "express";

import { filterJobs } from "./helper";
import { JobType } from "./types";
import { jobsData } from "./app";

export function getJobs(req: Request, res: Response) {
  const search = req.query.search as string | undefined;
  const location = req.query.location as string | undefined;
  const fullTimeOnly = req.query.fullTimeOnly === "true";
  const count = req.query.count as string;

  console.log(req.query);

  const filteredJobs = filterJobs(
    jobsData,
    search,
    location,
    fullTimeOnly,
    count
  );

  res.json(filteredJobs);
}

export function getSingleJob(req: Request, res: Response) {
  const jobId = req.params.id as string;

  const singleJob = jobsData.filter((job: JobType) => job.id === Number(jobId));

  res.json(singleJob);
}
