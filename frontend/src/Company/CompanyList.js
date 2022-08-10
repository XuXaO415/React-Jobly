import React, {useState, useEffect} from "react";
import JoblyApi from "../JoblyApi";
import CompanyCard from "../Company/CompanyCard";


function CompanyList() {
    const [companies, setCompanies] = useState(null);
    console.debug("CompanyList", "companies=", companies);

    useEffect(() => {
        async function getCompany() {
            const companies = await JoblyApi.getCompany();
            setCompanies(companies);
        }
        getCompany();
    }, []);

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

export default CompanyList;