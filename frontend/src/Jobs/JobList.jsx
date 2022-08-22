import React, { useState, useEffect } from "react";
import JoblyApi from "../JoblyApi";
import JobCard from "./JobCard";



const JobList = (props) => {
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getJobs() {
            try {
                const jobs = await JoblyApi.getJobs();
                setJobs(jobs);
            } catch (err) {
                setError(err);
            }
        }
        getJobs();
    }
    , []);

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="row">
            {jobs.map(job => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
}


export default JobList;