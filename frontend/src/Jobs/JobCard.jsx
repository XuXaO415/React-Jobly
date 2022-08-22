import React, {useContext, useEffect, useState } from "react";
import UserContext from "../Users/UserContext";
import JoblyApi from "../JoblyApi";
import { MDBBtn } from 'mdb-react-ui-kit';
// import { Button, CardBody } from "reactstrap";
import Card from "react-bootstrap/Card";
import {CardHeader, CardTitle, CardBody} from "reactstrap";



function JobCard({ id, title, salary, equity, companyName }) {
    const { currentUser } = useContext(UserContext);
    const [isApplied, setIsApplied] = useState(false);
    
    useEffect(() => {
        if (currentUser) {
        setIsApplied(currentUser.appliedJobs.includes(id));
        }
    }, [currentUser, id]);
    

    return (

      <div> 
    <CardTitle>{title} </CardTitle>
    <div className="card-body">
  
      <Card.Body>
        <Card.Text>
        {companyName}
        </Card.Text>
        <MDBBtn color="primary">View Job</MDBBtn>
      </Card.Body>
    </div>  
</div>

  );


}

export default JobCard;