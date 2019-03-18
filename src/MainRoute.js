import React from 'react';
import { Switch,Route } from 'react-router-dom';

import MyPlayList from "./App";
import City from "./pages/CityPage";
import Mood from "./pages/MoodPage";
import Home from "./pages/HomePage";

import Login from "./login/login.js";
import Profile from "./profile/Profile.js";
import PatNolPat from "./404/404.js";

const MainRoute = () => {
    return(
        <Switch>
            <Route exact path = "/myplaylist" component = {MyPlayList}/>
            <Route exact path = "/login" component = {Login}/>
            <Route exact path = "/profile" component = {Profile}/>
            <Route exact path = "/city-page" component = {City}/>
            <Route exact path = "/mood-page" component = {Mood}/>
            <Route exact path = "/" component = {Home}/>
            <Route component = {PatNolPat}/>
        </Switch>
    )
}

export default MainRoute;
