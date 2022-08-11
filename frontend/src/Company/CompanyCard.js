import React, {useEffect, useState} from "react";
import JoblyApi from "../JoblyApi";
import { Link } from "react-router-dom";

function CompanyCard() {
    const [companies, setCompanies] = useState(null);
    console.debug("CompanyCard", "companies=", companies);

    useEffect(() => {
        async function getCompany() {
            const companies = await JoblyApi.getCompany();
            setCompanies(companies);
        }
        getCompany();
    }
    , []);

    return (
        <div className="CompanyCard">
        <Link to={`/companies/${companies.handle}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={companies.logo_url} alt={companies.name} />
                    </div>
                    <div className="col-md-8">
                        <h2>{companies.name}</h2>
                        <p>{companies.description}</p>
                    </div>
                </div>
            </div>
        </Link>
        </div>  
    );
}



    export default CompanyCard;