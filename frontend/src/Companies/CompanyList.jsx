import React, { useState, useEffect } from 'react'
import JoblyApi from '../JoblyApi'
import CompanyCard from './CompanyCard'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit'
import { Button } from "reactstrap";



function CompanyList() {
    const [companies, setCompanies] = useState([]);

// console.debug("companyList=", companies);
    console.debug("CompanyList");

//   useEffect(() => {
//     ;(async function () {
//       const companies = await JoblyApi.getCompanies()
//       setCompanies(companies)
//     })()
//   }, [])

//useEffect hook when user clicks on a company, it will fetch the company details and the jobs for that company

  useEffect(function getCompaniesOnMount() {
    console.debug("CompanyList useEffect getCompaniesOnMount");
    search();
  }, []);

    async function search(name) {
        const companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    }




  return (
    <div className="CompanyList col-md-8 offset-md-2">
      <h1 className="font-weight-bold text-center">Companies</h1>
      <MDBCard>
        {companies &&
          companies.map((company) => (
            <MDBCardBody key={company.handle}>
              <MDBCardTitle>{company.name}</MDBCardTitle>
              <MDBCardImage className="img-fluid" src={company.logoUrl} />
              <MDBCardText>{company.description}</MDBCardText>
              <MDBCardText>{company.numEmployees}</MDBCardText>
              {/* <MDBBtn href={`/companies/${company.handle}`}>View Job</MDBBtn> */}
              <Button color="primary" href={`/companies/${company.handle}`}>View Job</Button>
            </MDBCardBody>
          ))}
      </MDBCard>
    </div>
  )
}

export default CompanyList;
