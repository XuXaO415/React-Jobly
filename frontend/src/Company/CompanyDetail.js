import React, { useState, useEffect } from "react";
import JoblyApi from "../JoblyApi";
import JobCardList from "../Jobs/JobCardList";
import { Card, CardColumns, CardSubtitle, CardBody, CardTitle, CardText, Container, Row } from "reactstrap";

const CompanyDetail = (props) => {
    const [company, setCompany] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getCompany() {
            try {
                const company = await JoblyApi.getCompany(props.match.params.handle);
                setCompany(company);
            } catch (err) {
                setError(err);
            }
        }
        getCompany();
    }
    , [props.match.params.handle]);

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            <Container>
                <Row>
                    <Card body>
                        <CardTitle>{company.name}</CardTitle>
                        <CardSubtitle>{company.handle}</CardSubtitle>
                        <CardText>{company.description}</CardText>
                    </Card>
                </Row>
            </Container>
            <Container>
                <Row>
                    <JobCardList jobs={company.jobs} />
                </Row>
            </Container>
        </div>
    );
}


export default CompanyDetail;