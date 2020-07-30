import * as Types from '../constants/ActionTypes'
// var initialState = {
//     m: [],
//     loading: false,
//     error: null
// };
var initialState = []

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.POPULAR_MOVIES: {
            state = action.movies
            return [...state];
            // return {
            //     ...state,
            //     ...{
            //         m: action.movies,
            //         loading: false,
            //         error: null
            //     }
            // }
        }
        case Types.UPCOMING_MOVIES: {
            state = action.movies
            return [...state];
        }
       
        case Types.FETCH_SEARCH_MOVIES: {
            state = action.movies
            return [...state];
        }
        default: return [...state]
    }
}
export default myReducer