import { Request, Response, json } from "express";

import { filterJobs } from "./helper";
import { JobType } from "./types";
import { jobsData } from "./app";

export function getJobs(req: Request, res: Response) {
  const search = req.query.search as string | undefined;
  const location = req.query.location as string | undefined;
  const fullTimeOnly = req.query.fullTimeOnly === "true";
  const count = req.query.count as string;

  if (!search && !count && !location && !fullTimeOnly)
    return res.json(jobsData);

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
  const jobId = Number(req.params.id);

  const singleJob = jobsData.find((job: JobType) => job.id === jobId);

  res.json(singleJob);
}
