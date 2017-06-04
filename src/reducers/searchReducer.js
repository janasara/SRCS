import ActionTypes from '../constants/actionTypes';

export default function searchReducer(state=[], action) {
    switch (action.type) {
        case ActionTypes.LOAD_SEARCH_SUCCESS:
            return action.searches;


        default:
            return state;
    }

}