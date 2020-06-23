import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../reducers';

import './styles.css';

const Track = ({
    id,
    // key,
    trackName,
    clave,
    version,
    lastModifyDate,
    onClick
}) => (
    // <Fragment>
        <div className="track-container" onClick={onClick}>
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