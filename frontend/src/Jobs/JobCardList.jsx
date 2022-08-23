import React, { useState, useEffect } from "react";
import JobCard from "../Jobs/JobCard";
import {
  Card,
  CardColumns,
  CardSubtitle,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
} from "reactstrap";


function JobCardList({ jobs }) {
  return (
    <CardColumns>
      {jobs.map(job => (
        <JobCard 
        key={job.id}
        id={job.id}
        title={job.title}
        salary={job.salary}
        equity={job.equity}
        companyName={job.companyName}
         />
      ))}
    </CardColumns>
  );
}

export default JobCardList;
