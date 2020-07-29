import * as Types from '../constants/ActionTypes'
var initialState = {};

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.DETAIL_MOVIES: {
            state = action.movie
            return {...state};
        }
        default: return {...state}
    }
}
export default myReducer