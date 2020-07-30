import * as Types from '../constants/ActionTypes'
var initialState = []

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.FAVORITES_MOVIES: {
            state = [
                    action.favoriteMovies,
                    ...state
                ]
            return state;
        }     
        default: return state
    }
}
export default myReducer