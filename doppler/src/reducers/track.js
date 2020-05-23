import { v4 as uuidv4 } from 'uuid';

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
        case 'TRACK_CREATED': {
            return action.payload;

        }

        case 'TRACK_NAME_CHANGED': {
            return {
                ...state,
                [action.payload.]
            }
        }

        case 'SAVE_LETRA': {
            return {
                ...state,
                'letra': action.payload.letra
            };
        }
            
        
    
        default:
            return state;
    }
};

export default track;

export const getTrack = state => state;
export const getLetra = state => state.letra;
export const getSongId = state => state.songid;
export const getSongName = state => state.name;