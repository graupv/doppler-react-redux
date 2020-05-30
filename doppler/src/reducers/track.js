import omit from 'lodash/omit'
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
export const getLetra = state => state.letra;
export const getTrackId = state => state.Trackid;
export const getTrackName = state => state.trackname;
export const getTrackKey = state => state.Key;
export const getTrackpPrivate = state => state.private;
export const getTrackDateModified = state => state.date_modified;