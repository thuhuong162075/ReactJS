import * as types from './../constants/ActionTypes'
var initialState = [
    {title: "Vệ sinh cá nhân", isComplete: true},
    {title: "Nghe nhạc"},
    {title: "Đi chợ, nấu ăn"}
];

var myReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LIST_ALL: 
            return state;
        case types.ADD_TASK : {
            state = [
                action.task,
                ...state
            ]
            return state
        }
        case types.ITEM_CLICK : {
            const item = action.task
            const isComplete = item.isComplete;
            const index = state.indexOf(item)
            state =  [
                ...state.slice(0, index),
                {
                  ...item,
                  isComplete: !isComplete
                },
                ...state.slice(index+1)
              ]
            return state
        }
        case types.ITEM_DELETE: {
            const index = state.indexOf(action.task)
            state =  [
                ...state.slice(0, index),
                ...state.slice(index+1)
                ]
            return state
        }
        case types.ITEM_EDIT: {
            const {text, indexEdit} = action
            state = [
                ...state.slice(0, indexEdit),
                {
                  title: text,
                  isComplete: state[indexEdit].isComplete
                },
                ...state.slice(indexEdit+1)
            ]
            return state
        }
        case types.CLICK_ALL: { 
            const {status} = action;
            const a = []
            state.map(item => a.push({title: item.title, isComplete: status}))
            state = a
            return state
        }
        case types.CLEAR_COMPLETE: {
            state = action.arr
            return state
        }
            
        default: return state
    }
};
export default myReducer