import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import JobList from '../components/jobs/JobList';

import Request from '../helpers/request.js';

class JobContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      jobs: null
    }
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/jobs')
    .then(data => this.setState({jobs: data}))

  }

  render(){
    return(
      <Router>
        <Fragment>
          <Switch>
            <Route render={(props) => {
              return <JobList jobs={this.state.jobs}/>
            }}/>
          </Switch>
        </Fragment>
      </Router>
    )
  }


}

export default JobContainer;
