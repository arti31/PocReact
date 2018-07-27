import React, { Component } from 'react';
var Nav = require('../components/Nav');
var CompanyProfile = require('../containers/CompanyProfile').default;
var UserProfile = require('../containers/UserProfile').default;
var MapContainer = require('../containers/UserMap').default;
var CalculatorContainer = require('../containers/Calculator').default;
var ReactRouter = require('react-router-dom');
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
class MainLayout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Nav />
        </div>
        <Switch>
             <Route exact path='/companyProfile' component={CompanyProfile} />
             <Route path='/userProfile' component={UserProfile} />
             <Route path='/map' component={MapContainer} />
             <Route path='/calculator' component={CalculatorContainer} />
       </Switch>
      </div>
    );
  }
}
export default MainLayout;