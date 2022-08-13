import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../JoblyApi";
import JobCardList from "../Jobs/JobCardList";
import { Card, CardSubtitle, CardTitle, CardText, Container, Row } from "reactstrap";
import { MDBSpinner } from 'mdb-react-ui-kit';

function CompanyDetail() {
    const [company, setCompany] = useState(null);
    const [jobs, setJobs] = useState(null);

    useEffect(() => {
        async function getCompany() {
            const company = await JoblyApi.getCompany();
            setCompany(company);
        }
        getCompany();
    }, []);
    if (!company) {
        return <div className="text-center">
        <MDBSpinner role="status" color="primary" size="5x" >
        <span className="sr-only">Loading...</span>
        </MDBSpinner>
        </div>;
    }

    // return (
    //     <Container fluid>
    //         <Row>
    //             <Card body inverse color="info">
    //                 <CardTitle>{company.name}</CardTitle>
    //                 <CardSubtitle>{company.handle}</CardSubtitle>
    //                 <CardText>{company.description}</CardText>
    //             </Card>
    //         </Row>
    //         <Row>
    //             <JobCardList jobs={jobs} />
    //         </Row>
    //     </Container>
    // );

}


export default CompanyDetail;