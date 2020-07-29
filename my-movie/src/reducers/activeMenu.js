import * as Types from '../constants/ActionTypes'
var initialState = '';

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.ACTIVE_MENU: {
            return action.active
        }
        default: return state
    }
}
export default myReducer