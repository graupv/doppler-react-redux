import omit from 'lodash/omit'
import * as types from '../types/track';

/*
 songId: id,
        lyrics: 'String',
        trackName: 'Name',
        trackKey: 'A',
        chart: '',
        additional_files: [{}] ?, // paths i suppose
        version: #,
        private: bool,
*/

const track = (state = [], action) => {
    switch (action.type) {
        case types.TRACK_CREATED: {
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        }

        case types.TRACK_ADDED: {
            return {
                ...state,
                [action.payload.id]: action.payload
            };
        }

        case types.TRACK_CHANGED: {
            // todo action.type para cambios espcificos
            // para catalogar cambios entre versiones
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    ...action.payload
                }
            };
        }

        case types.TRACK_DELETED: {
            return omit(state, [action.payload.id]);
        }
        
    
        default:
            return state;
    }
};

export default track;

export const getTracks = state => state;
export const getTrack = (state, id) => state[id];
export const getLetra = (state, id) => state[id].letra;
export const getTrackIds = state => Object.keys(state);
export const getTrackName = (state, id) => state[id].trackName;
export const getTrackKey = (state, id) => state[id].trackKey;
export const getTrackPrivate = (state, id) => state[id].private;
export const getTrackDateModified = (state, id) => state[id].date_modified;