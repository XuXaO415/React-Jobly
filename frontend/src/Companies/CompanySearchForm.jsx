import React, { useState, Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ButtonGroup } from "reactstrap";
import CompanyList from "./CompanyList";

// function CompanySearchForm({search, searchCompanies }) {
//     const [searchTerm, setSearchTerm] = useState("");

//     function handleChange(e) {
//         setSearchTerm(e.target.value);
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         // if search term is empty or has at one search term that is not undefined
//         if (searchTerm === "" || searchTerm === undefined) {
//             searchCompanies();
//         } else {
//             searchCompanies({name: searchTerm.trim()});
//         }
//     }

//     return (
//         <Form onSubmit={handleSubmit}>
//             <Form className="d-flex mb-4" >
//                 <Form.Control
//                     type="search"
//                     placeholder="Search"
//                     onChange={handleChange}
//                     value={searchTerm}
//                 />
//                 <Button variant="primary" type="submit">
//                     Search
//                 </Button>
//             {/* </Container> */}
//         </Form>
//         </Form>

//     );
// }


class CompanySearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // if search term is empty or has at one search term that is not undefined
    if (this.state.searchTerm === "" || this.state.searchTerm === undefined) {
      this.props.searchCompanies();
    } else {
      this.props.searchCompanies({ name: this.state.searchTerm.trim() });
    }
  }

  render() {
    return (
      <div className="form-outline">
        <input
          type="search"
          className="form-control"
          placeholder="Search"
          // onChange{ e => setCompanies(e.target.value)} means that when the user types in the search bar, the value of the search bar will be set to the state of companies
          onChange={(e) => this.props.searchCompanies(e.target.value)}
        />
        <ButtonGroup>
          <Button color="primary" type="submit">
            Search
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default CompanySearchForm;
