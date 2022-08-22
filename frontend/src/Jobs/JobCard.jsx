import React, {useContext, useEffect, useState } from "react";
import UserContext from "../Users/UserContext";
import JoblyApi from "../JoblyApi";


function JobCard({ id, title, salary, equity, companyName }) {
    const { currentUser } = useContext(UserContext);
    const [isApplied, setIsApplied] = useState(false);
    
    useEffect(() => {
        if (currentUser) {
        setIsApplied(currentUser.appliedJobs.includes(id));
        }
    }, [currentUser, id]);
    
    const apply = async () => {
        try {
        await JoblyApi.apply(id);
        setIsApplied(true);
        } catch (err) {
        console.error("An error occurred while applying:", err);
        }
    }
    
    return (
        <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
                <strong>Company:</strong> {companyName}
            </p>
            <p className="card-text">
                <strong>Salary:</strong> {salary}
            </p>
            <p className="card-text">
                <strong>Equity:</strong> {equity}
            </p>
            {currentUser && (
                <button
                className="btn btn-primary"
                onClick={apply}
                disabled={isApplied}
                >
                Apply
                </button>
            )}
            </div>
        </div>
        </div>
    );

}

export default JobCard;