import React, { useEffect, useState } from "react";
import JoblyApi from "../JoblyApi";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "reactstrap";
import Card from "react-bootstrap/Card";
import {CardHeader, CardTitle} from "reactstrap";


function CompanyCard({ handle, name, description, logoUrl, numEmployees }) {
  const history = useHistory();

  return (
    // <div className="col-md-4">
    //     <div className="card mb-4 shadow-sm">
    //         <div className="card-body">
    //             <img src={logoUrl} alt={name} className="img-thumbnail" />
    //             <h5 className="card-title">{name}</h5>
    //             <p className="card-text">{description}</p>
    //             <div className="d-flex justify-content-between align-items-center">
    //                 <div className="btn-group">
    //                     <Link to={`/companies/${handle}`} className="btn btn-sm btn-outline-secondary">View</Link>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    <Card style={{ width: "30rem" }}>
    <CardHeader>
    <Card.Title className="">{name}</Card.Title>
    <div>
      <Card.Img variant="top" img src={logoUrl} />
      </div>
      <Card.Body>
        <Card.Text>
        {description}
        </Card.Text>
        <Link to={`/companies/${handle}`}>
        <Button variant="primary">View Job</Button>
        </Link>
      </Card.Body>
    </CardHeader>
    </Card>
  );
}

export default CompanyCard;
