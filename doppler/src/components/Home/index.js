import React, { Fragment,useState } from 'react';
import { connect } from 'react-redux';

import NavBar from '../navbar';
import TrackManager from '../trackmanager';

import './styles.css';

const Home = () => {

    return (
        <div className="home-container">
            <NavBar />
            <div className="mysongs">
                <div className="mysongs-title">
                    My Songs
                </div>
                <TrackManager />
            </div>
            <div className="quotes">

            </div>
        </div>
)};

export default Home;