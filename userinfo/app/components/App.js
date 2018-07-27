var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
//var Switch = ReactRouter.Switch;
//var Redirect = ReactRouter.Redirect;
//var BrowserHistory = ReactRouter.BrowserHistory;

var MainLayout = require('../layouts/MainLayout').default;
var EmptyLayout = require('../layouts/EmptyLayout').default;
var layoutAssignments = {
  '/': EmptyLayout,
  '/companyProfile': MainLayout,
  '/userProfile': MainLayout,
  '/map': MainLayout,
  '/login': EmptyLayout,
  '/calculator':MainLayout
}

var layoutPicker = function(props){
  console.log(props);
  var Layout = layoutAssignments[props.location.pathname];
  return Layout ? <Layout/> : <pre>bad route</pre>;
};

class App extends React.Component {
  render() {
    return (
      <Router>
      <Route path="*" render={layoutPicker}/>
      </Router>
      // <Router>
      //   <div className='container'>
      //     <Switch>
      //       <Route exact path='/' component={LoginContainer} />  
      //       <Route exact path='/login' component={LoginContainer} />   
      //       <Route exact path='/companyProfile' component={CompanyProfile} />
      //       <Route path='/userProfile' component={UserProfile} />
      //       <Route path='/map' component={MapContainer} />
      //       <Route render={function () {
      //         return <p>Not Found</p>
      //       }} />
      //     </Switch>
      //   </div>
      // </Router>
    )
  }
}

module.exports = App;
