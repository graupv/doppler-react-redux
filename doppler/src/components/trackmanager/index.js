import React, { Fragment } from 'react';
import Track from '../track';
import { connect } from 'react-redux';
import * as selectors from '../../reducers';

import './styles.css';

const test_tracks = [
    {
        trackName: 'lol',
        clave: 'A',
        version: 1,
        lastModifyDate: '2020-05-01',
        

    },
    {
        trackName: 'maison',
        clave: 'B',
        version: 2,
        lastModifyDate: '2020-05-01',

    },
    {
        trackName: 'maicords',
        clave: 'C',
        version: 1,
        lastModifyDate: '2020-05-01',

    },
    {
        trackName: 'this one sucks',
        clave: 'A',
        version: 1,
        lastModifyDate: '2020-05-01',

    },
];

const Trackmanager = ({
    songs = [],
    onClick
}) => (
    <Fragment>
        <div className="track-container">
            {
                songs.map(
                    track => (
                        <Track
                            trackName={track.trackName}
                            clave={track.clave}
                            version={track.version}
                            lastModifyDate={track.lastModifyDate}
                            onClick={onClick}
                        />
                    ) 
                )
            }
        </div>
    </Fragment>

);

export default connect(
    state => ({
        tracks: selectors.getTracks(state),
    }),
)(Trackmanager);