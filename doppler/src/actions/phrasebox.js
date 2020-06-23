import * as types from '../types/phrasebox';

export const addPhrase = (phrase) => ({
   type: types.PHRASE_ADDED,
   payload: {type: 'phrases', phrase} 
});

export const removePhrase = (phrase) => ({
    type: types.PHRASE_REMOVED,
    payload: {type: 'phrases', phrase} 
 });

// export const addWord = (word) => ({
//     type: types.WORD_ADDED,
//     payload: {type: 'words', word} 
//  });

// export const removeWord = (word) => ({
//     type: types.WORD_REMOVED,
//     payload: {type: 'words', word} 
//  });