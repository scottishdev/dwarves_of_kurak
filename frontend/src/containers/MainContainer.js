import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import StartContainer from './StartContainer.js';

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      gameMode: null
    }

    this.onClickGameModeHandler = this.onClickGameModeHandler.bind(this);
  }

render() {
    return (
      <Router>
      <Fragment>
      <Switch>
        <Route path="/home" component={StartContainer} onClickGameModeHandler={this.onClickGameModeHandler}/>
        <Redirect to="/home"/>
      </Switch>
      </Fragment>
      </Router>
    )
  }

  onClickGameModeHandler(event) {
    this.setState({gameMode:event.target.value})
    console.log(event);
  }

}

export default MainContainer;
