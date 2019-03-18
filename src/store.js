import createStore from "unistore";
import axios from "axios";
import { playlistBerawan, playlistCerah, playlistHujan, Bearer } from "./Data.js"
import _ from 'lodash';


const initialState = {
    cities: "Malang",
    api_key: "",
    email: "",
    password: "",
    full_name: "",
    username: "",
    avatar: "",
    is_login: "",
    listSong: [],
    Cuaca: "",
    Song: "",
    SongTitle: "",
    Images: "",
    Time: "",
    Artist:"",
    Thrower: "",
    moods: "",
    MoodCityStat: 1,
    NamaCuaca: 1,
    dataSearch: [],
}


export const store = createStore(initialState)

export const actions = store => ({
    setField: (state, event) => {
        return { [event.target.name]: event.target.value };
    },
    postLogout: state => {
        return { is_login: false };
    },
    ChangeValue: (state, data, stats) => {
        if (stats == 1) {
            return { cities: data, MoodCityStat: stats };
        }
        if (stats == 2) {
            return { moods: data, MoodCityStat: stats };
        }
    },
    postLogin: async state => {
        const data = {
            username: state.username,
            password: state.password,
        };
        await axios
            .post("https://api-todofancy.herokuapp.com/api/auth", data)
            .then(function (response) {
                if (response.data.status === "oke") {
                    store.setState({
                        is_login: true,
                        avatar: response.data.user_data.avatar,
                        email: response.data.user_data.email,
                        username: response.data.user_data.username,
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    GetCuaca: async (state) => {
        if (store.getState().MoodCityStat == 1) {
            await axios
                .get("http://api.openweathermap.org/data/2.5/weather?q=" + store.getState().cities + "&appid=02436e399d179c2eb2871ed7d4169798")
                .then(function (response) {
                    store.setState({ Cuaca: response.data.weather['0'].id });

                    //dipakai juga untuk Focus, Chill, Accoustic, Classic
                    if (store.getState().Cuaca > 800) {
                        const playlist = playlistBerawan[Math.floor(Math.random() * playlistBerawan.length)];
                        store.setState({ Thrower: playlist });
                        store.setState({ NamaCuaca: "Berawan" });

                    } else if (store.getState().Cuaca >= 700 && store.getState().Cuaca <= 800) {
                        const playlist = playlistCerah[Math.floor(Math.random() * playlistCerah.length)];
                        store.setState({ Thrower: playlist });
                        store.setState({ NamaCuaca: "Cerah" });

                    } else {
                        const playlist = playlistHujan[Math.floor(Math.random() * playlistHujan.length)];
                        store.setState({ Thrower: playlist });
                        store.setState({ NamaCuaca: "Hujan" });

                    }
                    axios
                        .get("https://api.spotify.com/v1/playlists/" + store.getState().Thrower,
                            {
                                headers: {
                                    "Authorization": "Bearer " + Bearer,
                                }
                            })
                        .then(function (response) {
                            store.setState({ listSong: response.data.tracks.items });

                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else if (store.getState().MoodCityStat == 2) {
            if (store.getState().moods == "Galau" || store.getState().moods == "Nostalgia") {
                const playlist = playlistHujan[Math.floor(Math.random() * playlistHujan.length)];
                store.setState({ Thrower: playlist });
            }
            else if (store.getState().moods == "Sedih") {
                const playlist = playlistHujan[Math.floor(Math.random() * playlistHujan.length)];
                store.setState({ Thrower: playlist });
            }
            else if (store.getState().moods == "Senang" || store.getState().moods == "Semangat" || store.getState().moods == "Party") {
                const playlist = playlistCerah[Math.floor(Math.random() * playlistCerah.length)];
                store.setState({ Thrower: playlist });
            }
            else if (store.getState().moods == "Fokus" || store.getState().moods == "Love") {
                const playlist = playlistBerawan[Math.floor(Math.random() * playlistBerawan.length)];
                store.setState({ Thrower: playlist });
            }

            await axios
                .get("https://api.spotify.com/v1/playlists/" + store.getState().Thrower,
                    {
                        headers: {
                            "Authorization": "Bearer " + Bearer,
                        }
                    })
                .then(function (response) {
                    store.setState({ listSong: response.data.tracks.items });

                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    searchNews: async (state, keyword) => {
        if (keyword.length > 2) {
            try {
                {
                    store.getState().listSong.map((item, key) => {
                        var counter = 0;
                        if (_.includes(item.track.name.toLowerCase(), keyword.toLowerCase())) {
                            store.getState().dataSearch.push(item)
                        }
                    })
                }

                store.setState({ listSong: store.getState().dataSearch });
            }
            catch (error) {
                console.log(error);
            }
        }
        if (keyword.length <= 2) {
            try {
                const response = await axios.get(
                    "https://api.spotify.com/v1/playlists/" + store.getState().Thrower,
                    {
                        headers: {
                            "Authorization": "Bearer " + Bearer,
                        }
                    })
                // console.log(store.getState().listSong);
                store.setState({ listSong: response.data.tracks.items });
                store.getState().dataSearch = []
            }
            catch (error) {
                console.log(error);
            }
        }
    },
})