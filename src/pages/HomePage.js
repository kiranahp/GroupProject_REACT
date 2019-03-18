// Import package
import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';


import CityPlaylist from "./CityPlaylist";
import MoodPlaylist from "./MoodPlaylist";
import Judul from "../Component/Judul";

import "../css/App.css";

import Malang from "../images/Malang.jpg";
import Bandung from "../images/Bandung.jpg";
import Bogor from "../images/Bogor.jpg";
import Jogja from "../images/tugu-jogja-1.jpg"
import Mood1 from "../images/playlist1.jpg"
import Mood2 from "../images/playlist2.jpg"
import Mood3 from "../images/playlist3.jpg"
import Mood4 from "../images/playlist4.png"

import { Link } from 'react-router-dom';


class Home extends Component {
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
                        <div className="row" style={{ marginTop: "100px", marginBottom: "100px" }}>
                            <Judul />
                        </div>
                        <div className="row">
                            <div className="col-12 mt-5 mb-5 text-white pagination-centered">
                                <div className="pt-3 pb-3 mb-5 mt-5" style={{ borderTop: "3px solid #F999A5", borderBottom: "3px solid #F999A5"}}><h2>City</h2></div>
                            </div>
                            <div className="col">
                                <CityPlaylist city="Malang" Image={Malang} />
                            </div>
                            <div className="col">
                                <CityPlaylist city="Bandung" Image={Bandung} />
                            </div>
                            <div className="col">
                                <CityPlaylist city="Bogor" Image={Bogor} />
                            </div>
                            <div className="col">
                                <CityPlaylist city="Yogyakarta" Image={Jogja} />
                            </div>
                            <div className="col-12 mt-3 mb-3 text-white">
                                <div className="pt-3 pb-3 mb-5 mt-5" style={{ borderTop: "3px solid #F999A5", borderBottom: "3px solid #F999A5"}}><h2>Mood</h2></div>
                            </div>
                            <div className="col">
                                <MoodPlaylist mood="Senang" Image={Mood1} />
                            </div>
                            <div className="col">
                                <MoodPlaylist mood="Sedih" Image={Mood2} />
                            </div>
                            <div className="col">
                                <MoodPlaylist mood="Galau" Image={Mood3} />
                            </div>
                            <div className="col">
                                <MoodPlaylist mood="Fokus" Image={Mood4} />
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        );
    }
}
// export default withRouter(Home);

export default connect(
    'listSong', actions
)(withRouter(Home));