import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SkillList from '../components/skills/SkillList';
import Request from '../helpers/request';

class SkillContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      skills: []
    }
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/skills')
    .then(data => this.setState({skills: data}))

  }

  render(){
    return(
      <Router>
        <Fragment>
          <Switch>
            <Route render={(props) => {
              return <SkillList skills={this.state.skills}/>
            }}/>
          </Switch>
        </Fragment>
      </Router>
    )
  }


}

export default SkillContainer;
