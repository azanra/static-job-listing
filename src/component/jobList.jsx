import { useContext } from "react";
import { data } from "../data.js";
import Job from "./job.jsx";
import { SelectedFilterContext } from "../selectedFilter";

export default function JobList() {
  const selectedFilter = useContext(SelectedFilterContext);

  const filterJobs = (data) => {
    const filteredJobs = data.filter((item) => {
      if (
        checkJob(item, "role") &&
        checkJob(item, "level") &&
        checkToolsAndLanguage(item, "tools") &&
        checkToolsAndLanguage(item, "languages")
      ) {
        return item;
      }
    });
    return filteredJobs;
  };

  const checkJob = (job, filter) => {
    if (selectedFilter[filter]) {
      if (job[filter] === selectedFilter[filter]) {
        return true;
      }
    } else if (selectedFilter[filter] === null) {
      return true;
    }
  };

  const checkToolsAndLanguage = (job, filter) => {
    if (
      selectedFilter[filter].length > 0 &&
      job[filter].includes(selectedFilter[filter])
    ) {
      return true;
    } else if (selectedFilter[filter].length === 0) {
      return true;
    }
  };

  const filteredJob = filterJobs(data);
  console.log(filteredJob);
  return (
    <>
      <div>
        {filteredJob &&
          filteredJob.map((item) => {
            return <Job key={item.id} info={item} />;
          })}
      </div>
    </>
  );
}
