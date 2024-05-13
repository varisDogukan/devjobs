export function filterJobs(
  jobs: any[],
  search: string | undefined,
  location: string | undefined,
  fullTimeOnly: boolean,
  count: string
) {
  return jobs
    .filter((job) => {
      const matchesSearch = search
        ? job.position.toLowerCase().includes(search.toLowerCase()) ||
          job.company.toLowerCase().includes(search.toLowerCase())
        : true;

      const matchesLocation = location
        ? job.location.toLowerCase().includes(location.toLowerCase())
        : true;

      const matchesFullTime = fullTimeOnly
        ? job.contract === "Full Time"
        : true;

      return matchesSearch && matchesLocation && matchesFullTime;
    })
    .slice(0, Number(count));
}
