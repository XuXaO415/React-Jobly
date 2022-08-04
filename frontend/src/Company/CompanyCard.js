import React from "react";
import { Link } from "react-router-dom";



const CompanyCard = ({ name, description, handle, logoUrl }) => {

    return (
        <div className="CompanyCard">
            <Link to={`/companies/${handle}`}>
                <img src={logoUrl} alt={name} />
            </Link>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}

export default CompanyCard;