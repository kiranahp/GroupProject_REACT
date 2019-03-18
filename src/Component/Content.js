import React, { Component } from "react";
import { Link } from 'react-router-dom';


class Berita extends Component {
    render() {
        const Minutes = Math.floor(((this.props.Time / 1000) / 60))
        const Second = Math.floor(((this.props.Time / 1000) % 60))
        var Detik = Second
        if (Second < 10) {
            Detik = "0" + Second
        }

        return (
            <div>
                <div class="card bg-dark text-white" style={{ width: "18rem" }}>
                    <div class="p-4 card-img-top">
                        <img style={{ borderRadius: "50%", border: "5px solid #F999A5" }} class="card-img-top" src={this.props.Images} alt="Card image cap" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.SongTitle}</h5>
                        <small class="card-text">Durations: {Minutes}:{Detik}</small><br/>
                        <small class="card-text">Artist: {this.props.Artist}</small>

                    </div>
                    <center><audio style={{ width: "90%" }} controls src={this.props.song}></audio></center>
                </div>
            </div>
        );
    }
}

export default Berita;
