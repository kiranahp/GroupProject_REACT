import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import { withRouter } from "react-router-dom";
import '../css/profile.css';


const Profile = props => {
    if (!props.is_login) {
        return <Redirect to={{ pathname: "/login" }} />;
    }
    return (
        <div className="App">
            <div className="container mb-5 mt-5">
                <div class="content gantiCard mt-5" style={{ marginBottom: "200px"}}>
                    <div class="card">
                        <div class="firstinfo"><img src={"https://s3.amazonaws.com/uifaces/faces/twitter/mrvanz/128.jpg"} />
                            <div class="profileinfo">
                                <h1>{props.username}</h1>
                                <h3>{props.email}</h3>
                                <h5>Alternative Music Genre</h5>
                                <p class="bio">Good taste in music is extremely attractive</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(
    "is_login,email,username,avatar",
    actions
)(withRouter(Profile));