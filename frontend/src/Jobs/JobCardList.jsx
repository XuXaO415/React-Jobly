import React, { useState, useEffect, Component } from "react";
import JoblyApi from "../JoblyApi";
import JobCard from "../Jobs/JobCard";
import {
  Card,
  CardColumns,
  CardList,
  CardSubtitle,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
} from "reactstrap";


// function JobCardList({ jobs }) {
//   return (
//     <CardColumns>
//       {jobs.map(job => (
//         <JobCard 
//         key={job.id}
//         id={job.id}
//         title={job.title}
//         salary={job.salary}
//         equity={job.equity}
//         companyName={job.companyName}
//          />
//       ))}
//     </CardColumns>
//   );
// }


class JobCardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
    this.apply = this.apply.bind(this);

  }

  async componentDidMount() {
    let jobs = await JoblyApi.getJobs();
    this.setState({ jobs });
  }

  async apply(id) {
    await JoblyApi.applyForJob(id);
    this.setState({ apply: true });
  }



  render() {
    return (
      <Card>
        {this.state.jobs.map(job => (
          <JobCard
            key={job.id}
            id={job.id}
            title={job.title}
            salary={job.salary}
            equity={job.equity}
            companyName={job.companyName}
            apply={this.apply}

          />
        ))}
      </Card>
    );
  }



}
export default JobCardList;
