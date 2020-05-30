import React, { Fragment } from 'react';

import './styles.css';

const Track = ({
    trackName,
    clave,
    version,
    lastModifyDate
}) => (
    // <Fragment>
        <div className="track-container">
            <div className='title-container'>
                <p className="title">
                    {trackName}
                </p>
            </div>
            <div className="track-details">
                <p className="track-detail">Key: {clave}</p>
                <p className="track-detail">Version: {version}</p>
                <p className="track-detail">Last Change: {lastModifyDate}</p>
            </div>
        </div>
    // </Fragment>

);

export default Track;