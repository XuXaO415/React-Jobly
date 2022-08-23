import React, {useContext, useEffect, useState } from "react";
import UserContext from "../Users/UserContext";
import JoblyApi from "../JoblyApi";
import { Card, CardColumns, CardSubtitle, CardBody, CardTitle, CardText, Container, Row } from "reactstrap";
import Button from 'react-bootstrap/Button';





// function JobCard({ id, title, salary, equity, companyName }) {
//     const { currentUser } = useContext(UserContext);
//     const [isApplied, setIsApplied] = useState(false);
    
//     useEffect(() => {
//         if (currentUser) {
//         setIsApplied(currentUser.appliedJobs.includes(id));
//         }
//     }, [currentUser, id]);
    

//     return (

//       <div> 
//     <CardTitle>{title} </CardTitle>
//     <div className="card-body">
  
//       <Card.Body>
//         <Card.Text>
//         {companyName}
//         </Card.Text>
//         <MDBBtn color="primary">View Job</MDBBtn>
//       </Card.Body>
//     </div>  
// </div>

//   );
// }

function JobCard({ id, title, salary, equity, companyName, hasApplied=false, applyForJob }) {
    const { currentUser } = useContext(UserContext);
    const [isApplied, setIsApplied] = useState(hasApplied);


    const handleApply = async () => {
        if (currentUser) {
            await applyForJob(id); // passed down from parent component ???
            setIsApplied(true); // update state to reflect that the user has applied for the job
        }
    };

    return (
        <div>
            <Card body>
                {/* <CardTitle>{title}</CardTitle> */}
                <h6 className="Card-title">{title}</h6>
                <p>{companyName}</p>
              
                <CardText>Salary: ${salary}</CardText>
                <CardText>Equity: {equity}</CardText>
                {isApplied ? (
                    <CardText>You have already applied for this job</CardText>
                ) : (
                    <Button color="primary" onClick={handleApply}>Apply</Button>
                )}
            </Card>
        </div>
    );
}




        

export default JobCard;