import { v4  } from 'uuid';
import * as types from '../types/track';


export const createTrack = (
    name,
    owner, 
    date_modified = null,
    version = 1, 
    files =' ', 
    private = true
    
    ) => ({
    type: types.TRACK_CREATED,
    payload: {
        id: v4(),
        name,
        letra: '',
        chart,
        key: '',
        owner,
        date_modified = Date.now(),
        version,
        private,
        files

    }
});

export const deleteTrack = id => ({
    type: types.TRACK_DELETED,
    payload: {id}
})

export const changeTrack = (id, attributes = {}) => ({
    type: types.TRACK_CHANGED,
    payload: {id, ...attributes},
    
});