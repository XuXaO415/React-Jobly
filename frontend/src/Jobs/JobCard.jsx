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
    

    
 

}

export default JobCard;