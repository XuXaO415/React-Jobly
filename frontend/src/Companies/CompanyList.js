import React, {useState, useEffect} from "react";
import JoblyApi from "../JoblyApi";
import CompanyCard from "./CompanyCard";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';


// function CompanyList() {
//     const [companies, setCompanies] = useState(null);
//     console.debug("CompanyList", "companies=", companies);

//     useEffect(() => {
//         async function getCompany() {
//             const companies = await JoblyApi.getCompany();
//             setCompanies(companies);
//         }
//         getCompany();
//     }, []);

//     return (
//         <div className="CompanyList">
//             <h1>Companies</h1>
//             <div className="container">
//                 <div className="row">
//                     {companies.map(company => (
//                         <CompanyCard
//                         key={company.handle} 
//                         name={company.name}
//                         description={company.description}
//                         handle={company.handle}
//                         logoUrl={company.logoUrl}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }


function CompanyList() {
    const [companies, setCompanies] = useState(null);

    //list all companies
    useEffect(() => {
        (async function () {
            const companies = await JoblyApi.getCompanies();
            setCompanies(companies);
        })();
    }, []);

    // return (
    //     <div className="CompanyList">
    //         <h1>Companies</h1>
    //         <div className="container">
    //             <div className="row">
    //                 {companies && companies.map(company => (
    //                     <CompanyCard
    //                     key={company.handle}
    //                     name={company.name}
    //                     description={company.description}
    //                     handle={company.handle}
    //                     logoUrl={company.logoUrl}
    //                     />
    //                 ))}
    //             </div>
    //         </div>
    //     </div>
    // );

  return (
    <div className="CompanyList col-md-8 offset-md-2">
        <h1 className="font-weight-bold text-center">Companies</h1>
    <MDBCard>
    {companies && companies.map(company => 
        <MDBCardBody key={company.handle}>
            <MDBCardTitle>{company.name}</MDBCardTitle>
            <MDBCardImage className="img-fluid" src={company.logoUrl} />
            <MDBCardText>{company.description}</MDBCardText>
            <MDBCardText>{company.numEmployees}</MDBCardText>
            <MDBBtn href={`/companies/${company.handle}`}>View Job</MDBBtn>
        </MDBCardBody>
    )}
    </MDBCard>
    </div>
);
}


 
    // return (
    //     <div>
    //         <h1>Companies</h1>
    //         <div className="container">
    //             <div className="row">
    //                 {companies.map(company => (
    //                     <CompanyCard
    //                     key={company.handle}
    //                     name={company.name}
    //                     description={company.description}
    //                     handle={company.handle}
    //                     logoUrl={company.logoUrl}
    //                     />
    //                 ))}
    //             </div>
    //         </div>
    //     </div>
    // );


export default CompanyList;