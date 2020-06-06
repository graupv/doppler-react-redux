import React, { Fragment,useState } from 'react';
import { connect } from 'react-redux';

import TrackManager from '../trackmanager';

import './styles.css';

const Home = () => {

    return (
        <div className="home-container">
            {/* <NavBar /> */}
                <TrackManager />
            {/* <div className="mysongs">
                <div className="mysongs-title">
                    My Songs
                </div>
            </div>
            <div className="quotes">

            </div> */}
        </div>
)};

export default Home;