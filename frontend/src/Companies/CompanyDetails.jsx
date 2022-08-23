import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../JoblyApi";
import JobCardList from "../Jobs/JobCardList";
import { Card, CardSubtitle, CardTitle, CardText, Container, Row } from "reactstrap";
import { MDBSpinner } from 'mdb-react-ui-kit';

// function CompanyDetail() {
//     const [company, setCompany] = useState(null);
//     const [jobs, setJobs] = useState(null);

//     useEffect(() => {
//         async function getCompany() {
//             const company = await JoblyApi.getCompany();
//             setCompany(company);
//         }
//         getCompany();
//     }, []);
//     if (!company) {
//         return <div className="text-center">
//         <MDBSpinner role="status" color="primary" size="5x" >
//         <span className="sr-only">Loading...</span>
//         </MDBSpinner>
//         </div>;
//     }
// }

function CompanyDetail() {
    const [company, setCompany] = useState(null);
    const { handle } = useParams();


    useEffect(() => {
        async function getCompany() {
            const company = await JoblyApi.getCompany(handle);
            setCompany(company);
        }
        getCompany();
    } , [handle]);

    if (!company) {
        return <div className="text-center">
        <MDBSpinner role="status" color="primary" size="5x" >
        <span className="sr-only">Loading...</span>
        </MDBSpinner>
        </div>;
    }
    return (
        <div className="CompanyDetail">
            <Container>
                <Row>
                    <Card body>
                        <CardTitle>{company.name}</CardTitle>
                        <CardSubtitle>{company.description}</CardSubtitle>
                    </Card>
                    <Card CardSubtitle>
                        <CardTitle>Current Open Jobs</CardTitle>
                        <JobCardList jobs={company.jobs} />
                    </Card>
                </Row>
            </Container>
        </div>
    );
}


export default CompanyDetail;