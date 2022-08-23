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

// function CompanyList() {
//   const [companies, setCompanies] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function getCompanies() {
//       try {
//         const companies = await JoblyApi.getCompanies();
//         setCompanies(companies);
//       } catch (err) {
//         setError(err);
//       }
//     }
//     getCompanies();
//   }, []);

//   if (error) {
//     return <p> Error: {error.message} </p>;
//   }

//   return (
//     <div className="row">
//       {companies.map((company) => (
//         <CompanyCard key={company.handle} company={company} />
//       ))}
//     </div>
//   );
// }

// export default CompanyList;


// function JobCardList({ jobs }) {
//   return (
//     <CardColumns>
//       {jobs.map((job) => (
//         <JobCard key={job.id} job={job} />
//       ))}
//     </CardColumns>
    

//   );

// }


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
