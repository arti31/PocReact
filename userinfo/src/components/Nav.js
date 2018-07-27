var React = require('../../../../../../../Users/arti/Library/Caches/typescript/2.9/node_modules/@types/react');
var NavLink = require('../../../../../../../Users/arti/Library/Caches/typescript/2.9/node_modules/@types/react-router-dom').NavLink;

function Nav () {
  return (
    <ul className='nav'>
      <li>
        <NavLink exact activeClassName='active' to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/battle'>Battle</NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/popular'>Popular</NavLink>
      </li>
    </ul>
  )
}

module.exports = Nav;