import React, {useState, useEffect} from "react";
import JoblyApi from "../JoblyApi";
import CompanyCard from "../Company/CompanyCard";





function CompanyList(props) {
    const [companies, setCompanies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getCompanies() {
            try {
                const companies = await JoblyApi.getCompanies();
                setCompanies(companies);
            } catch (err) {
                setError(err);
            }
        }
        getCompanies();
    }, []);

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="row">
            {companies.map(company => (
                <CompanyCard key={company.handle} company={company} />
            ))}
        </div>
    );
}

export default CompanyList;