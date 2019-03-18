import React, { Component } from 'react';
import logo from '../images/Logos.ico';
import { Link } from 'react-router-dom';
import SignOut from './SignOut';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import { Redirect } from 'react-router-dom';
import '../css/header.css'

class Header extends Component {
   render() {
      if (!this.props.is_login) {
         return (
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#000F2C", color: "#fff" }}>
               <div className="container">
                  <Link className="navbar-brand" to="/">
                     <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                     <span> Reaction</span>
                  </Link>
                  <button className="navbar-toggler" style={{ backgroundColor: "#F999A5" }}
                     type="button" data-toggle="collapse"
                     data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse auto" id="navbarSupportedContent">
                     <ul className="navbar-nav mr-auto menu">
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                           <Link to="/" className="nav-link">Home</Link>
                        </li>

                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                           <Link to="/profile" className="nav-link">Profile</Link>
                        </li>

                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                           <Link to="/login" className="nav-link">Login</Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
         );
      }
      else {
         return (
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#000F2C", color: "#fff" }}>
               <div className="container">
                  <Link className="navbar-brand" to="/">
                     <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                     <span> Reaction</span>
                  </Link>
                  <button style={{ backgroundColor: "#F999A5" }} className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span style={{color: "white"}} className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse auto" id="navbarSupportedContent">
                     <ul className="navbar-nav mr-auto menu">
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                           <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                           <Link to="/mood-page" className="nav-link">Mood</Link>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                           <Link to="/city-page" className="nav-link">City</Link>
                        </li>
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                           <Link to="/profile" className="nav-link">Profile</Link>
                        </li>
                        <SignOut />
                        <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                           <span className="nav-link" style={{ color: "#F999A5" }}>Hello, {this.props.username}</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
         );
      }

   }
}

export default connect(
   'listSong,song,SongTitle,Images,Time,Cuaca,is_login, username', actions
)(withRouter(Header));