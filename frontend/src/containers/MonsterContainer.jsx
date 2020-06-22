import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MonsterList from '../components/monsters/MonsterList';
import Request from '../helpers/request';

class MonsterContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      monsters: []
    }
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/monsters')
    .then(data => this.setState({monsters: data}))

  }

  render(){
    return(
      <Router>
        <Fragment>
          <Switch>
            <Route render={(props) => {
              return <MonsterList monsters={this.state.monsters}/>
            }}/>
          </Switch>
        </Fragment>
      </Router>
    )
  }


}

export default MonsterContainer;
