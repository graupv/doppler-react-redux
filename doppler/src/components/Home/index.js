import React, { Fragment,useState } from 'react';
import { connect } from 'react-redux';

import TrackManager from '../trackmanager';

import './styles.css';

const Home = () => {
    const [quote, changeQuote] = useState('');
    return (
        <div className="home-container">
            {/* <NavBar /> */}
                <TrackManager />
            {/* <div className="mysongs">
                <div className="mysongs-title">
                    My Songs
                </div>
            </div>*/}
            <div className="quotes">
                {
                    
                }
                <p>A quote for inspiration:</p>
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
                    }}>Click Me </button>
                
                <p id='qtxt'>testing some text</p> 
            </div>
        </div>
)};

export default Home;