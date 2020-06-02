import React from "react";
import Home from '../HomePg/Home';
import ProductsPg from '../ProductPg /ProductsPg'
import Contact from '../ContactPg/Contact'

import {
  BrowserRouter as Router, Route} from "react-router-dom";

class Routes extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/Products' component={ProductsPg} />
        <Route exact path='/Contact' component={Contact} />
      </div>
      </Router>
    );
  }
}

export default Routes;
