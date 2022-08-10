import React, { useState, useEffect } from "react";
import JoblyApi from "../JoblyApi";
import JobCardList from "../Jobs/JobCardList";
import { Card, CardSubtitle, CardTitle, CardText, Container, Row } from "reactstrap";

function CompanyDetail() {
    const [company, setCompany] = useState(null);
    const [jobs, setJobs] = useState(null);

    useEffect(() => {
        async function getCompany() {
            const { handle } = await JoblyApi.getCurrentUser();
            const company = await JoblyApi.getCompany(handle);
            setCompany(company);
        }
        getCompany();
    }, []);
    if (!company) {
        return <h1>Loading...</h1>;
    }

    return (
        <Container>
            <Row>
                <Card body inverse color="info">
                    <CardTitle>{company.name}</CardTitle>
                    <CardSubtitle>{company.handle}</CardSubtitle>
                    <CardText>{company.description}</CardText>
                </Card>
            </Row>
            <Row>
                <JobCardList jobs={jobs} />
            </Row>
        </Container>
    );

}

export default CompanyDetail;