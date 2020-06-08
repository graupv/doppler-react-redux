import { v4  } from 'uuid';
import * as types from '../types/track';


export const createTrack = ({
    name,
    key,
    username, 
    // date_modified,
    version = 1, 
    files ='', 
    privacy = true
}) => ({
    type: types.TRACK_CREATED,
    payload: {
        track_id: v4(),
        name,
        key,
        lyrics: '',
        // chart: '',
        username,
        // date_modified: Date.now(),
        version,
        // private: privacy,
        // files
    }
});

export const addTrack = (tracks, result) => ({
    type: types.TRACK_ADDED,
    no: console.log('From addTrack action creator:\n\n'),
    nada: console.log(tracks),
    zilch: console.log(result),
    payload: { 
        ...result
        // attributes[id]: ...attributes,
    }
})

export const deleteTrack = id => ({
    type: types.TRACK_DELETED,
    payload: {id}
})

export const changeTrack = (id, attributes = {}) => ({
    type: types.TRACK_CHANGED,
    payload: {id, ...attributes},
    
});