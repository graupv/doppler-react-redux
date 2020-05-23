import { v4 as uuidv4 } from 'uuid';
import * as types from '../types/track';

/*
 songId: id,
        lyrics: 'String',
        name: 'Name',
        chart: '',
        key: 'A',
        additional_files: [{}] ?, // paths i suppose
        version: #,
        private: bool,
*/

const track = (state = {}, action) => {
    switch (action.type) {
        case types.TRACK_CREATED: {
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        }

        case types.TRACK_CHANGED: {
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    ...action.payload
                }
            }
        }           
        
    
        default:
            return state;
    }
};

export default track;

export const getTrack = (state, id) => state[id];
export const getLetra = state => state.letra;
export const getSongId = state => state.songid;
export const getSongName = state => state.name;
export const getSongKey = state => state.Key;
export const getSongPrivacy = state => state.Privacy;
export const getSongPrivacy = state => state.Privacy;