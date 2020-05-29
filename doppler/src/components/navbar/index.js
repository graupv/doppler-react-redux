import React, { Fragment } from 'react';
import {Link, Switch, Route} from 'react-router-dom';

import './styles.css';

const NavBar = ({

}) => (
    <div className="NavBar">
        <Fragment>
            <div className="nav-div">
                <Link to="/">
                    Home
                </Link>
            </div>
            <div className="nav-div">
                <Link to="/tracks">
                    Tracks
                </Link>
            </div>
            <div className="nav-div">
                <Link to="/phrasebox">
                    Phrasebox
                </Link>
            </div>
            <div className="nav-div">
                <Link to="/chordbox">
                    Chordbox
                </Link>
            </div>
            <div className="nav-div">
                <Link to="/sharing">
                    Sharing
                </Link>
            </div>
            <div className="nav-div">
            <Link to="/out" id="log">
                    Logout
                </Link>
            </div>
        </Fragment>

        <Switch>
            <Route path="/tracks">
                
            </Route>
        </Switch>

    </div>
);

export default NavBar;