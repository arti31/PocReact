var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function Nav() {
  return (
    <ul className='nav'>
    <li>
        <NavLink exact activeClassName='active' to='/login'>Login</NavLink>
      </li>
      <li>
        <NavLink exact activeClassName='active' to='/companyProfile'>Company Profile</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/userProfile'>User Profile</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/map'>Map</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/calculator'>Calculator</NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;