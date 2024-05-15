import { useQuery } from "@tanstack/react-query";

import { FormType, FormTypeWithoutCount, JobType } from "@/types";
import { axiosInstance } from "@/axiosInstance";

/**
 * Custom hook to fetch a list of developer jobs based on search criteria using React Query.
 *
 * This hook utilizes the `useQuery` function from React Query to perform
 * an asynchronous request to fetch a list of developer jobs from the server.
 * It returns the query object which contains the data, status, and other properties
 * that can be used to handle the state of the request in a React component.
 *
 * @param formInfo - An object containing the search criteria for fetching the jobs, excluding the count.
 * @param count - The number of jobs to fetch.
 * @returns A query object containing the following properties:
 * - `data`: The fetched job data as an array, or `undefined` if the data is not yet available.
 * - `status`: The status of the query (e.g., 'loading', 'error', 'success').
 * - `error`: Any error encountered during the fetch operation.
 * - `isLoading`: A boolean indicating if the query is currently in a loading state.
 * - `isError`: A boolean indicating if the query encountered an error.
 * - `isSuccess`: A boolean indicating if the query was successful.
 */
async function getDevJobs(props: FormType): Promise<JobType[]> {
  const { search, location, fullTimeOnly, count } = props;

  const { data } = await axiosInstance.get(
    `/devjobs?search=${search}&location=${location}&fullTimeOnly=${fullTimeOnly}&count=${count}`
  );

  return data as JobType[];
}

export function useGetDevJobs(formInfo: FormTypeWithoutCount, count: number) {
  const { search, location, fullTimeOnly } = formInfo;

  return useQuery({
    queryKey: ["devJobs", search, location, fullTimeOnly, count],
    queryFn: () => getDevJobs({ search, location, fullTimeOnly, count }),
  });
}

async function getSingleDevJob(id: string): Promise<JobType> {
  const { data } = await axiosInstance.get(`/devjobs/${id}`);

  return data as JobType;
}

/**
 * Custom hook to fetch a single developer job by its ID using React Query.
 *
 * This hook utilizes the `useQuery` function from React Query to perform
 * an asynchronous request to fetch job data from the server. It returns
 * the query object which contains the data, status, and other properties
 * that can be used to handle the state of the request in a React component.
 *
 * @param id - The unique identifier of the developer job to be fetched.
 * @returns A query object containing the following properties:
 * - `data`: The fetched job data, or `undefined` if the data is not yet available.
 * - `status`: The status of the query (e.g., 'loading', 'error', 'success').
 * - `error`: Any error encountered during the fetch operation.
 * - `isLoading`: A boolean indicating if the query is currently in a loading state.
 * - `isError`: A boolean indicating if the query encountered an error.
 * - `isSuccess`: A boolean indicating if the query was successful.
 */
export function useGetSingleDevJob(id: string) {
  return useQuery({
    queryKey: ["devJobs", id],
    queryFn: () => getSingleDevJob(id),
  });
}
