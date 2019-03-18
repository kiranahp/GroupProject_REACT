import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "../css/App.css";
import "../css/login.css";

import Logo from "../images/piring.jpg";

import { connect } from 'unistore/react';
import { actions } from '../store';

class SignIn extends Component {
    postLogins = function () {
        this.props.postLogin().then(
            () => {
                this.props.history.push("/profile");
            }
        )
    };
    render() {
        return (
            <div className="App" style={{ backgroundColor: "#000F2C" }}>
                <div class="container-fluid" >
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-9 d-none d-md-block d-lg-block" style={{ marginLeft: "-15px" }}>
                            <img className="h-100 w-100" src={Logo} alt="Flowers in Chania" />
                        </div>
                        <div class="col-12 col-md-6 col-lg-3 ">
                            <div className="container mt-5 text-white">
                                <form className="box" onSubmit={e => e.preventDefault()}>
                                    <center>
                                        <div className="form-group">
                                            {/* <label for="exampleInputEmail1">Email address</label> */}
                                            <input name="username" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={e => this.props.setField(e)}/>
                                        </div>
                                        <div className="form-group">
                                            {/* <label for="exampleInputPassword1">Password</label> */}
                                            <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => this.props.setField(e)}/>
                                        </div>
                                        <small id="emailHelp" className="form-text text-muted mb-2">Dont Share Your Password With Every Body.</small>
                                        <div className="form-check">
                                        </div>
                                        <button type="submit" onClick={() => this.postLogins()} className="btn btn-primary mb-5">Submit</button>
                                    </center>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
// export default withRouter(SignIn);

// export default SignIn;
export default connect(
    'username,password,avatar', actions
)(withRouter(SignIn));