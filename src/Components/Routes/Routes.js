import React from "react";
import Home from '../HomePg/Home';
import Backpack from '../ProductPg /ProductsPg'
import Contact from '../ContactPg/Contact'

import {
  BrowserRouter as Router, Route} from "react-router-dom";

class ProductsPg extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/Backpack' component={Backpack} />
        <Route exact path='/Contact' component={Contact} />
      </div>
      </Router>
    );
  }
}

export default ProductsPg;
