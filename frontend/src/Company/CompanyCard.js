import React from "react";
import {
    Link
} from "react-router-dom";


function CompanyCard({name, description, handle, logoUrl}) {
    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={logoUrl} alt="Company logo"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{name}</p>
                        <p className="subtitle is-6">{handle}</p>
                    </div>
                </div>
                <div className="content">
                    {description}
                </div>
            </div>
            <footer className="card-footer">
                <Link to={`/company/${handle}`} className="card-footer-item">
                    View
                </Link>
                <Link to={`/company/${handle}/edit`} className="card-footer-item">
                    Edit
                </Link>
            </footer>
        </div>
    );
}

    export default CompanyCard;