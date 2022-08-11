import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../JoblyApi";
import JobCardList from "../Jobs/JobCardList";
import { Card, CardSubtitle, CardTitle, CardText, Container, Row } from "reactstrap";

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

// function CompanyDetail() {
//     const [company, setCompany] = useState(null);

//     const { handle } = useParams;

//     useEffect(() => {
//         async function getCompany() {
//             const getCompany = await JoblyApi.getCompany(handle);
//             setCompany(company);
//         }
//         getCompany();
//     }, [handle]);

//     if (!company) {
//         return <h1>Loading...</h1>;
//     }

//     return (
//         <Container>
//             <Row>
//                 <Card body inverse color="info">
//                     <CardTitle>{company.name}</CardTitle>
//                     <CardSubtitle>{company.handle}</CardSubtitle>
//                     <CardText>{company.description}</CardText>
//                 </Card>
//             </Row>
//             <Row>
//                 <JobCardList jobs={company.jobs} />
//             </Row>
//         </Container>
//     );
// }

export default CompanyDetail;