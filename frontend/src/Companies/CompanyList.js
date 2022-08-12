import React, {useState, useEffect} from "react";
import JoblyApi from "../JoblyApi";
import CompanyCard from "./CompanyCard";



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
        })()
    }, []);

    return (
        <div className="CompanyList">
            <h1>Companies</h1>
            <div className="container">
                <div className="row">
                    {companies && companies.map(company => (
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