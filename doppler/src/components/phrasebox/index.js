import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/phrasebox';
import * as selectors from '../../reducers';

import './styles.css';

const phrases = ['un poco de sol', 'no cae mal'];
const words = ['fallar', 'atrever'];

// tal vez un filtro tipo completed para words / phrases / all
// igual que para my songs y my shared

const Phrasebox = ({
    phrases,
    words,
    onClickWord,
    onClickPhrase,
}) => {
    const [phrase, changePhrase] = useState('');

    return (
        <Fragment>
            <div className="container">
                <div className="phrase-container">

                </div>
                <div className="button-container">

                </div>
            </div>
        </Fragment>
)};

export default connect(
    state => ({
        phrases: selectors.getPhrases(state),
        words: selectors.getWords(state),
    }),
    dispatch => ({
        onClickPhrase(phrase) {
            dispatch(actions.addPhrase(phrase))
        },
        onClickWord(phrase) {
            dispatch(actions.addWord(phrase))
        },
    })
)(Phrasebox);