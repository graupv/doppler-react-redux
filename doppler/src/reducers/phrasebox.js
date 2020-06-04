import without from 'lodash/without'
import * as types from '../types/phrasebox';

const phrasebox = (state = { phrases:[], words:[] }, action) => {

    switch(action.type) {
        // case 'PHRASE_ADDED': {
        //     return [...state, action.payload];
        // }s
        case types.PHRASE_ADDED: {
            return {
                ...state,
                [action.payload.type]: [
                    ...state[action.payload.type],
                    action.payload.phrase
                ]
            };
        }

        case types.PHRASE_REMOVED: {
            return { 
                ...state,
                [action.payload.type]: [
                    without(action.payload.type, action.payload.phrase)
                ]
                
            };
        }
        
        case types.WORD_ADDED: {
            return {
                ...state,
                [action.payload.type]: [
                    ...state[action.payload.type],
                    action.payload.word
                ]
            };
        }

        case types.WORD_REMOVED: {
            return {
                ...state,
                [action.payload.type]: [
                    without(action.payload.type, action.payload.word)
                ]
            };
        }

        default: {
            return state;
        }
    }
};

export default phrasebox;

// export const getPhrasesAsString = state => {};
export const getPhrases = state => state.phrases;
export const getWords = state => state.words;
export const getPhrasebox = state => state;