import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';

class CityPlaylist extends Component {
    test(e){
        this.props.ChangeValue(this.props.city,1);
        console.log("Masuk City"+this.props.city)

    }
    render() {
        return (
            <div onClick={(e) => this.test(e)}>
                <Link style={{textDecoration: "none"}} to="/myplaylist">
                <div className="card text-white" style={{ width: "18rem" , backgroundColor:"#000F2C", border: "none"}}>
                    <center> <img style={{ border:"10px solid #F999A5", borderRadius: "50%", width: "90%", height: "250px" }} className="card-img-top shadow-lg" src={this.props.Image} alt="Card image cap" /></center>
                    <div className="card-body">
                        <h5 className="card-title" style={{ color:"#F999A5", textDecoration: "none"}}>{this.props.city}</h5>
                    </div>
                </div>
                </Link>
            </div>
        );
    }
}

export default connect(
    'username,', actions
)(withRouter(CityPlaylist));