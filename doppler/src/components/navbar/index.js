import React, { Fragment } from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../actions/auth';
import Track from '../track';

import './styles.css';

const NavBar = ({
    onClick
}) => (
    <div className="NavBar">
        <Fragment>
            <div className="nav-div">
                <Link to="/">
                    Home
                </Link>
            </div>
            <div className="nav-div">
                <Link to="/track">
                    Tracks
                </Link>
            </div>
            <div className="nav-div">
                <Link to="/phrasebox">
                    Phrasebox
                </Link>
            </div>
            <div className="nav-div">
            <Link to="/" id="log" onClick={onClick}>
                    Logout
                </Link>
            </div>
        </Fragment>
    </div>
);

export default connect(
    null,
    dispatch => ({
        onClick() {
            dispatch(actions.logout())
        }
    })
)(NavBar);