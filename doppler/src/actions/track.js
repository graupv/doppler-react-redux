import { v4 as uuidv4 } from 'uuid';
import * as types from '../types/track';


export const createTrack = (name, owner, version = 1, files =' ', privacy = true) => ({
    type: types.TRACK_CREATED,
    payload: {
        id: v4(),
        name,
        letra: '',
        key: '',
        owner,
        version,
        privacy,
        files

    }
});