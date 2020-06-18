import React, { Fragment,useState } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as actions from '../../actions/track';
// import { v4 as uuidv4} from 'uuid';

const trackKeyList = [' ', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 
    'E', 'F', 'F#', 'G', 'G#',
];

const CreateTrack = ({
    onsubmit,    

}) => {
    const [trackName, changetrackName] = useState('');
    const [trackKey, changetrackKey] = useState('');

    return (

        
            <div className="createtrack-container">
                <p>{'Track Name'}
                    <input
                        type="text"
                        placeholder="A Very Cool Track Name"
                        value={trackName}
                        onChange={e => changetrackName(e.target.value)}
                    />
                </p>
                <div>
                    <span>

                        <p>{'Track Key'}

                            <select name="keys" value={trackKey} onChange={e => changetrackKey(e.target.value)}>
                                {
                                    trackKeyList.map(
                                        (k, i) => (
                                        <option value={k} key={i}>{k}</option >
                                        )
                                    )
                                }
                                
                                
                            </select>
                        </p>
                    </span>
                </div>
                <button className="createButt" type='submit' onClick={
                    () => {
                        onsubmit(trackName, trackKey)
                        changetrackName('')
                        changetrackKey('')
                    }
                }>
                    Create
                </button>
            </div>  
            {/* end of div container */}
        
    )
};

export default connect(
    undefined,
    dispatch => ({
        onsubmit(trackName, trackKey) {
            dispatch(actions.createTrack({
                    name: trackName,
                    key: trackKey,
                })
                )
        }
    }),
)(CreateTrack);

