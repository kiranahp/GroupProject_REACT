// Import package
import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';


import CityPlaylist from "./CityPlaylist";

import "../css/App.css";

import Malang from "../images/Malang.jpg";
import Bandung from "../images/Bandung.jpg";
import Bogor from "../images/Bogor.jpg";
import Jogja from "../images/tugu-jogja-1.jpg";
import Jakarta from "../images/jakarta.jpg"
import Semarang from "../images/semarang.jpg"
import Lombok from "../images/lombok.jpg"
import Surabaya from "../images/surabaya.jpg"



import { Link } from 'react-router-dom';


class CityPage extends Component {
    componentDidMount = () => {
        const datao = this.props.GetCuaca().then(
            () => {
                // console.log("Cuacas", this.props.Cuaca);
            }
        );
    };
    render() {
        const { listMovie } = this.props;
        return (
            <div className="App">
                <div className="container-float m-3">
                    <center>
                        <div className="row">
                            <div className="col-12 mt-3 mb-5 text-white pagination-centered">
                                <div className="mb-3"><h2>City</h2></div>
                            </div>
                            <div className="col mb-5">
                                <CityPlaylist city="Malang" Image={Malang} />
                            </div>
                            <div className="col mb-5">
                                <CityPlaylist city="Bandung" Image={Bandung} />
                            </div>
                            <div className="col mb-5">
                                <CityPlaylist city="Bogor" Image={Bogor} />
                            </div>
                            <div className="col mb-5">
                                <CityPlaylist city="Yogyakarta" Image={Jogja} />
                            </div>
                            <div className="col mb-5">
                                <CityPlaylist city="Lombok" Image={Lombok} />
                            </div>
                            <div className="col mb-5">
                                <CityPlaylist city="Jakarta" Image={Jakarta} />
                            </div>
                            <div className="col mb-5">
                                <CityPlaylist city="Surabaya" Image={Surabaya} />
                            </div>
                            <div className="col mb-5">
                                <CityPlaylist city="Semarang" Image={Semarang} />
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        );
    }
}

export default connect(
    'listSong', actions
)(withRouter(CityPage));