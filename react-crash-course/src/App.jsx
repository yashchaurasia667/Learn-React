import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero
        title="Become a React Dev"
        subtitle="Find the React job that fits your skill set"
      ></Hero>
      <HomeCards></HomeCards>
      <JobListings></JobListings>
      <ViewAllJobs></ViewAllJobs>
    </>
  );
};

export default App;
