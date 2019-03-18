import React, { Component } from "react";
import "../css/App.css";

import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import Mood1 from "../images/playlist1.jpg"
import Mood2 from "../images/playlist2.jpg"
import Mood3 from "../images/playlist3.jpg"
import Mood4 from "../images/playlist4.png"
import Mood5 from "../images/semangat.jpeg"
import Mood6 from "../images/party.jpg"
import Mood7 from "../images/nostalgia.jpg"
import Mood8 from "../images/love.jpg"


import MoodPlaylist from "./MoodPlaylist";



class Mood extends Component {
    componentDidMount = () => {
        const datao = this.props.GetCuaca().then(
            () => {
                console.log("Cuacas", this.props.Cuaca);
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
                            <div className="col-12 mt-3 mb-5 text-white">
                                <div className="mb-3"><h2>Mood</h2></div>
                            </div>
                            <div className="col mb-5">
                                <MoodPlaylist mood="Senang" Image={Mood1} />
                            </div>
                            <div className="col mb-5">
                                <MoodPlaylist mood="Sedih" Image={Mood2} />
                            </div>
                            <div className="col mb-5">
                                <MoodPlaylist mood="Galau" Image={Mood3} />
                            </div>
                            <div className="col mb-5">
                                <MoodPlaylist mood="Fokus" Image={Mood4} />
                            </div>
                            <div className="col mb-5">
                                <MoodPlaylist mood="Semangat" Image={Mood5} />
                            </div>
                            <div className="col mb-5">
                                <MoodPlaylist mood="Party" Image={Mood6} />
                            </div>
                            <div className="col mb-5">
                                <MoodPlaylist mood="Nostalgia" Image={Mood7} />
                            </div>
                            <div className="col mb-5">
                                <MoodPlaylist mood="Love" Image={Mood8} />
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
)(withRouter(Mood));