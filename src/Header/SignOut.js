import React, { Component } from 'react';
import logo from '../images/favicon.ico';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <li className="nav-item">
        <Link to="/" onClick={() => this.props.postSignout()} className="nav-link">Sign Out</Link>
      </li>
    );
  }
}

export default Header;