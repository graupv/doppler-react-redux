import * as types from '../types/phrasebox';

export const addPhrase = (phrase) => ({
   type: types.PHRASE_ADDED,
   payload: {phrase} 
});

export const removePhrase = (phrase) => ({
    type: types.PHRASE_REMOVED,
    payload: {phrase} 
 });