import React, { Fragment } from 'react';
import Track from '../track';

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

const Trackmanager = () => (
    <Fragment>
        <div className="track-container">
            {
                test_tracks.map(track => (
                    <Track
                        trackName={track.trackName}
                        clave={track.clave}
                        version={track.version}
                        lastModifyDate={track.lastModifyDate}
                    />
                ) )
            }
        </div>
    </Fragment>

);

export default Trackmanager;