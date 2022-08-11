import React, {useState, useEffect} from "react";
import JoblyApi from "../JoblyApi";
import CompanyCard from "../Company/CompanyCard";
import JobCard from "../Jobs/JobCard";
import { Card, CardSubtitle, CardTitle, CardText, Container, Row } from "reactstrap";


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

    // useEffect(() => {
    //     async function getCompany() {
    //         try {
    //             let companies = await JoblyApi.getCompany();
    //             setCompanies(companies);
    //         }
    //         catch (err) {
    //             console.error(err);
    //         }
    //     }
    //     getCompany();
    // }, []);

    async function getCompany() {
        try {
            let companies = await JoblyApi.getCompany();
            setCompanies(companies);
        }
        catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getCompany();
    }, []);

    if (!companies) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="CompanyList">
            <h1>Companies</h1>
            <div className="container">
                <div className="row">
                    {companies.map(company => (
                        <CompanyCard
                        key={company.handle}
                        name={company.name}
                        description={company.description}
                        handle={company.handle}
                        logoUrl={company.logoUrl}
                        />
                    ))}
                </div>
            </div>
        </div>
    );

}






//     function renderCompanyCards() {
//         if (companies.length === 0) {
//             return <h1>Loading...</h1>;
//         }
//         return companies.map(company => (
//             <CompanyCard
//             key={company.handle} 
//             name={company.name}
//             description={company.description}
//             handle={company.handle}
//             logoUrl={company.logoUrl}
//             />
//         ));
//     }

//     return (
//         <div className="CompanyList">
//             <h1>Companies</h1>
//             <div className="container">
//                 <div className="row">
//                     {renderCompanyCards()}
//                 </div>
//             </div>
//         </div>
//     );
// }




export default CompanyList;