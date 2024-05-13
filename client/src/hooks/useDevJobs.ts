import { useQuery } from "@tanstack/react-query";

import { FormType, FormTypeWithoutCount, JobType } from "@/types";
import { axiosInstance } from "@/axiosInstance";

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
