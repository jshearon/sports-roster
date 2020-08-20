import React from 'react';
import Auth from '../Auth/Auth';

class Navbar extends React.Component {
  render() {
    const { authed } = this.props;
    return (
      <nav class="navbar navbar-light bg-light">
        <h4 className="navbar-brand">Sports Roster</h4>
        <Auth authed={authed} />
      </nav>
    );
  }
}

export default Navbar;
