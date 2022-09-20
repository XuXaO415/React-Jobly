import React, { useState, useEffect, Component } from 'react'
import JoblyApi from '../JoblyApi'
import CompanyCard from './CompanyCard'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from 'mdb-react-ui-kit'
import { Button } from "reactstrap";

import CompanySearchForm from './CompanySearchForm';



// function CompanyList() {
//     const [companies, setCompanies] = useState([]);
//     const [error, setError] = useState(null);

// // console.debug("companyList=", companies);
//     console.debug("CompanyList");

// //useEffect hook when user clicks on a company, it will fetch the company details and the jobs for that company

//   useEffect(function getCompaniesOnMount() {
//     console.debug("CompanyList useEffect getCompaniesOnMount");
//     searchCompanies();
//   }, []);


//     async function searchCompanies(searchTerm = {}) {
//         const companies = await JoblyApi.filterCompanies(searchTerm);
//         setCompanies(companies);
//     }
//     if (error) {
//         return <p> Error: {error.message} </p>;
//     }



//   return (
//     <div className="CompanyList col-md-8 offset-md-2">
//     <CompanySearchForm searchCompanies={searchCompanies} />
//       <h1 className="font-weight-bold text-center">Companies</h1>
//       <MDBCard>
//         {companies &&
//           companies.map((company) => (
//             <MDBCardBody key={company.handle}>
//               <MDBCardTitle>{company.name}</MDBCardTitle>
//               <MDBCardImage className="img-fluid" src={company.logoUrl} />
//               <MDBCardText>{company.description}</MDBCardText>
//               <MDBCardText>{company.numEmployees}</MDBCardText>
//               {/* <MDBBtn href={`/companies/${company.handle}`}>View Job</MDBBtn> */}
//               <Button color="primary" href={`/companies/${company.handle}`}>View Job</Button>
//             </MDBCardBody>
//           ))}
//       </MDBCard>
//     </div>
//   )
// }

function CompanyList(){
  const [companies, setCompanies] = useState([]);

  useEffect(function getCompaniesOnMount() {
    console.debug("CompanyList useEffect getCompaniesOnMount");
    searchCompanies();
  }, []);

  async function searchCompanies(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  } 


  if (companies.length === 0) return <p>Loading...</p>;

  return (
    <div className="CompanyList col-md-8 offset-md-2">
    <CompanySearchForm searchCompanies={searchCompanies} />
   


  {/* <div className="form-outline">
      <input type="search" className="form-control" 
      placeholder="Search" 
      onChange={e => searchCompanies(e.target.value)} />
    </div> */}

      <h1 className="font-weight-bold text-center">Companies</h1>
      <MDBCard> 
        {companies.slice(0, 25).map((company) => (
          <MDBCardBody key={company.handle}>
            <MDBCardTitle>{company.name}</MDBCardTitle>
            <MDBCardImage className="img-fluid" src={company.logoUrl} />
            <MDBCardText>{company.description}</MDBCardText>
            <MDBCardText>{company.numEmployees}</MDBCardText>
            <Button color="primary" href={`/companies/${company.handle}`}>View Job</Button>
          </MDBCardBody>
        ))}
      </MDBCard>
    </div>
  );
}





export default CompanyList;
