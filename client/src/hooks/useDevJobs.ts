import { useQuery } from "@tanstack/react-query";

import { FormType, JobType } from "@/types";
import { axiosInstance } from "@/axiosInstance";

async function getDevJobs(props: FormType): Promise<JobType[]> {
  const { search, location, fullTimeOnly } = props;

  const { data } = await axiosInstance.get(
    `/devjobs?search=${search ? search : ""}&location=${location ? location : ""}&fullTimeOnly=${fullTimeOnly}`
  );

  return data;
}

export function useGetDevJobs(props: FormType) {
  const { search, location, fullTimeOnly } = props;

  return useQuery({
    queryKey: ["devJobs", search, location, fullTimeOnly],
    queryFn: () => getDevJobs({ search, location, fullTimeOnly }),
  });
}
