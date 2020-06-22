import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ItemList from '../components/items/ItemList';

import Request from '../helpers/request.js';

class ItemContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: null
    }
  }

  componentDidMount(){
    const request = new Request();

    request.get('/items')
    .then(data => this.setState({items: data}))

  }

  render(){
    return(
      <Router>
        <Fragment>
          <Switch>
            <Route render={(props) => {
              return <ItemList items={this.state.items}/>
            }}/>
          </Switch>
        </Fragment>
      </Router>
    )
  }


}

export default ItemContainer;
