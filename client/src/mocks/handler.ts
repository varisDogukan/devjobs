import { http, HttpResponse } from "msw";

import { mockDevJobs } from "./mockData";

export const handlers = [
  http.get("http://localhost:3000/devjobs", () => {
    return HttpResponse.json(mockDevJobs);
  }),
];
