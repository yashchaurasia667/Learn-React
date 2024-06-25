import React from "react";
import Jobs from "../jobs.json";
import Listing from "./Listing";

const JobListings = () => {
  const recentJobs = Jobs.slice(0, 3);
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentJobs.map((job) => (
              <Listing job={job} key={job.id}></Listing>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default JobListings;
