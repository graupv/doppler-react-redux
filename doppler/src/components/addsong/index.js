import React, { Fragment,useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/track';
import './styles.css';
import { v4 as uuidv4} from 'uuid';

const trackKeyList = [' ', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 
    'E', 'F', 'F#', 'G', 'G#',
];

const CreateTrack = ({
    onsubmit,
    
       

}) => {
    const [trackName, changetrackName] = useState('');
    const [trackKey, changetrackKey] = useState('');

    return (

        <Fragment>
            <div className="createtrack-container">
                <p>
                    <input
                        type="text"
                        placeholder="A Very Cool Track Name"
                        value={trackName}
                        onChange={e => changetrackName(e.target.value)}
                    />
                </p>
                <span>Track Key

                    <p>

                        <select name="keys" value={trackKey} onChange={e => changetrackKey(e.target.value)}>
                            {
                                trackKeyList.map(
                                    k => (
                                    <option value={k}>{k}</option >
                                    )
                                )
                            }
                            
                            
                        </select>
                    </p>
                </span>
                <button className="createButt" type='submit' onClick={
                    () => onsubmit(trackName, trackKey)
                }>
                    Create
                </button>
            </div>  
            {/* end of div container */}
        </Fragment>
    )
};

export default connect(
    undefined,
    dispatch => ({
        onsubmit(trackName, trackKey) {
            dispatch(actions.createTrack({
                    // id: uuidv4(),
                    trackName,
                    trackKey,
                })
                )
            // v++;
        }
    }),

)(CreateTrack);

