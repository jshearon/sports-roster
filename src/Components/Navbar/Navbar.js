import React from 'react';
import Auth from '../Auth/Auth';

import './Navbar.scss';

class Navbar extends React.Component {
  render() {
    const { authed } = this.props;
    return (
      <nav className="navbar navbar-light">
        <h1>Sports Roster</h1>
        <Auth authed={authed} />
      </nav>
    );
  }
}

export default Navbar;
