import without from 'lodash/without'

const phrasebox = (state = [], action) => {

    switch(action.type) {
        case 'ADD_PHRASE': {
            return [...state, action.payload]
        }

        case 'REMOVE_PHRASE': {
            return without(state, action.payload);
        }

        default: {
            return state;
        }
    }
};

export default phrasebox;

// export const getPhrasesAsString = state => 