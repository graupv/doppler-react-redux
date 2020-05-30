import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/track';
import './styles.css';

const v = 1;

const Addsong = ({onClick}) => (
    <Fragment>
        <button className="addsong" onClick={onClick}>
            +
        </button>
    </Fragment>
);

export default connect(
    undefined,
    dispatch => ({
        onClick() {
            dispatch(actions.createTrack(
                'song #' + v,
                'johnny',
                '2020',
                v,
                
            ))
            // v++;
        }
    })

)(Addsong);

