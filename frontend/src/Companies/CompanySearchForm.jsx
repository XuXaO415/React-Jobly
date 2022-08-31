import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




//Make your companies list have a search box, which filters companies to those matching the search 
// (remember: there’s a backend endpoint for this!). Do this filtering 
//in the backend — not by loading all companies and filtering in the front end!

function CompanySearchForm({search, searchCompanies }) {
    const [searchTerm, setSearchTerm] = useState("");

    function handleChange(e) {
        setSearchTerm(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        // if search term is empty or has at one search term that is not undefined 
        if (searchTerm === "" || searchTerm === undefined) {
            searchCompanies();
        } else {
            searchCompanies({name: searchTerm.trim()});
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            {/* <Container maxwidth="sm"> */}
            <Form className="d-flex mb-4" > 
                <Form.Control
                    type="search"
                    placeholder="Enter search term..."
                    onChange={handleChange}
                    value={searchTerm}
                />
                <Button variant="primary" type="submit">
                    Search
                </Button>
            {/* </Container> */}
        </Form>
        </Form>

    );
}









export default CompanySearchForm;