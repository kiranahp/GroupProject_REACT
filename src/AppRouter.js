
import React, { Component } from 'react';
import MainRoute from './MainRoute.js';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from './store';
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";

// import Footer from "./Footer/Footer";

class Apps extends Component{
    postSignout = () =>{
        this.props.postLogout();
        this.props.history.push("/");
    }
    render(){
        return (
            <div className= "app">
                <Header postSignout = {this.postSignout} />
                <MainRoute/>
                <Footer />
            </div>
        )
    }
}

export default connect(
    'is_login', actions
)(withRouter(Apps));