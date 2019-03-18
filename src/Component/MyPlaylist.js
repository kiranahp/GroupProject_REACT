import React, { Component } from "react";
import "../css/App.css";
import Content from "./Content";
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import { Redirect } from 'react-router-dom';
import Search from "./Search"
import InfoResponse from "./InfoResponse";

class MyPlaylist extends Component {
    handleInputChange = e => {
        let value = e.target.value;
        this.props.searchNews(value);
    };

    render() {
        if (!this.props.is_login) {
            return <Redirect to={{ pathname: "/login" }} />;
        }
        if (this.props.MoodCityStat == 1) {
            var content = {
                kota: this.props.cities,
                pesan: " Lagi ",
                cuaca: this.props.NamaCuaca,
                pesan2: " Ini playlist yang cocok buat kamu yang lagi di ",
                mood: "",
            }
        }
        else if (this.props.MoodCityStat == 2) {
            var content = {
                pesan: " Mood Kamu Lagi ",
                pesan2: 'Ini Playlist Yang Cocok Buat Kamu yang lagi',
                kota: '',
                cuaca:'',
                mood: this.props.moods,

            }
        }
        const { listSongs } = this.props.listSong;
        return (
            <div className="App">
                <div className="container-float m-3 text-white">
                    
                    <InfoResponse 
                        konteks = {content}
                        kota={content.kota} 
                        mood={content.mood}
                        cuaca={content.cuaca}
                        doSearch={this.handleInputChange}
                        keyword={this.props.search}/>

                    <div className="row">
                        {this.props.listSong.map((item, key) => {
                            if (item.track.preview_url !== null) {
                                // const arc_img = item.urlToImage === null ? "Kosong" : item.urlToImage;
                                // const content = item.content !== null ? item.content : "";
                                return (
                                    <div className="col mt-3">
                                        <center>
                                            <Content
                                                key={key}
                                                SongTitle={item.track.name}
                                                song={item.track.preview_url}
                                                Time={item.track.duration_ms}
                                                Images={item.track.album.images['1'].url}
                                                Artist={item.track.artists['0'].name}
                                            />
                                        </center>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    'listSong,song,SongTitle,Images,Time,is_login,MoodCityStat,cities,moods,NamaCuaca,Artist', actions
)(withRouter(MyPlaylist));