import * as Types from '../constants/ActionTypes'
var initialState = '';

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.FILTER_TABLE: {
            return action.filter
        }
        default: return state
    }
}
export default myReducer