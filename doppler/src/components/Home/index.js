import React, { Fragment,useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import TrackManager from '../trackmanager';
import CreateTrack from '../addsong';
import * as selectors from '../../reducers';
import * as actions from '../../actions/auth';

import './styles.css';

const Home = ({
    isAuthenticated
}) => {
    const [quote, changeQuote] = useState('');

    if (isAuthenticated) {

        return (
            <div className="home-container">
                {/* <NavBar /> */}
                    {/* <TrackManager /> */}
                    <CreateTrack />
                {/* <div className="mysongs">
                    <div className="mysongs-title">
                        My Songs
                    </div>
                </div>*/}
                <div className="quotes">
                    {
                        
                    }
                    {/* <p>:</p> */}
                    <button onClick=
                        {() => { 
                            try {
                                fetch(
                                    'https://binaryjazz.us/wp-json/genrenator/v1/story/1',
                                    {
                                        method: 'GET',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        }
                                    }
                                ).then(data => data.json())
                                .then(jsn => document.getElementById('qtxt').innerHTML= jsn)
                                .catch(err => console.log("Fetch genre catch error", err));
    
                            } catch (error) {
                                console.log('Get quote try error\n', error)
                            }
                        }}>Get a random genre</button>
                    
                    <p id='qtxt'></p> 
                </div>
            </div>
    );} else { return (
        <Redirect to={{pathname:"/login"}} />
        
        );
    }
    
};

export default connect(
    state => ({
        isAuthenticated: selectors.isAuthenticated(state),
    }),
    // dispatch => ({
    //     onClick() {
    //         dispatch()
    //     }
    // }),
)(Home);