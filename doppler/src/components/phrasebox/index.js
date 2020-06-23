import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/phrasebox';
import * as selectors from '../../reducers';

import Phrase from '../phrase';

import './styles.css';

const test_phrases = [];
const test_words = [];

// tal vez un filtro tipo completed para words / phrases / all
// igual que para my songs y my shared

const Phrasebox = ({
    phrases = [],
    words = [],
    onClickWord,
    onClickPhrase,
}) => {
    const [phrase, changePhrase] = useState('');

    return (
        <Fragment>
            <div className="phrasebox-container">
                <div className="box">
                    <div className="phrase-container">
                        {
                            phrases.map(
                                (phr, index) => (
                                    <Phrase
                                    key={index}
                                    text={phr}
                                    cls='phrase'
                                    />
                                )
                            )
                        }
                        {/* {
                            words.map(
                                (wrd, index) => (
                                    <Phrase
                                    key={index} 
                                    text={wrd}
                                    cls='word'
                                    />
                                )
                            )
                        } */}
                    </div>
                </div>
                <div className="bottom-container">

                    <input
                        type="text"
                        placeholder="A word or two"
                        value={phrase}
                        onChange={e => changePhrase(e.target.value)}
                    />
                    <div className="button-container">
                        <button onClick={
                            () => {onClickPhrase(phrase);
                            changePhrase('');}
                            }>
                                Add Phrase
                        </button>
                        {/* <button onClick={
                            () => { 
                                onClickWord(phrase);
                                changePhrase('');
                            }
                            }>
                                Add Word
                        </button> */}
                    </div>
                </div>
            </div>
        </Fragment>
)};

export default connect(
    state => ({
            phrases: selectors.getPhrases(state),
            // words: selectors.getWords(state),
    }),
    dispatch => ({
        onClickPhrase(phrase) {
            dispatch(actions.addPhrase(phrase))
            test_phrases.push(phrase)
        },
        // onClickWord(phrase) {
        //     dispatch(actions.addWord(phrase))
        //     test_words.push(phrase)
        // },
    }),

)(Phrasebox);