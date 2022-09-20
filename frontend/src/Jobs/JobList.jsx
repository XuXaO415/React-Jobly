import React, { useState, useEffect } from "react";
import JoblyApi from "../JoblyApi";
import JobCardList from "./JobCardList";
import CompanySearchForm from "../Companies/CompanySearchForm";
import Spinner from 'react-bootstrap/Spinner';

function JobList() {
  const [jobs, setJobs] = useState(null);
  const [title , setTitle] = useState(null);

  useEffect(function getAllJobs() {
    async function getJobs() {
      const jobs = await JoblyApi.getJobs();
      setJobs(jobs);
    }
    getJobs();
  } , []);
  
  function handleSearch(title) {
    setTitle(title);
  }

  if (!jobs) {
    return <div className="text-center">
    <Spinner animation="grow" variant="primary" role="status">
    <p></p>
    <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>;
  }

  return (
    <div className="JobList m-5">
      <CompanySearchForm onSearch={handleSearch} />
      <JobCardList jobs={jobs} title={title} />
    </div>
  )
}








export default JobList;