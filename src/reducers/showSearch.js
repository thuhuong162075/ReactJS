import * as Types from '../constants/ActionTypes'
var initialState = false;

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.SHOW_RESULT_SEARCH: {
            //console.log(action)
            state = action.showSearch
            return state;
        }
        default: return state
    }
}
export default myReducer