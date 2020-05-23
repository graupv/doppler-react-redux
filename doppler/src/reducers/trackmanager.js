import omit from 'lodash/omit';

/*

trackmanager {
    songId: {
        songId: id,
        lyrics: 'String',
        name: 'Name',
        chart: '',
        key: 'A',
        owner: userid,
        last_modify: date,
        additional_files: [{}] ?, // paths i suppose
        version: #,
        private: bool,


    }
}
 
 */

const trackmanager = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_OWN_SONG': {
            return { 
                ...state,
                [action.payload.id]: action.payload
            };
        }

        case 'REMOVE_OWN_SONG': {
            return omit(state, action.payload.id);
        }

        case 'ADD_SHARED_SONG': {
            return { 
                ...state,
                [action.payload.id]: action.payload
            };
        }

        case 'REMOVE_SHARED_SONG': {
            return omit(state, action.payload.id);
        }
    }
};

export default trackmanager;