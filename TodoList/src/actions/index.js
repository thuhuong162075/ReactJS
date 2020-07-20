import * as types from './../constants/ActionTypes'
export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}
export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task
    }
}
export const itemClick = (task) => {
    return {
        type: types.ITEM_CLICK,
        task
    }
}
export const itemDelete = (task) => {
    return {
        type: types.ITEM_DELETE,
        task
    }
}
export const itemEdit = (text, indexEdit) => {
    return {
        type: types.ITEM_EDIT,
        text,
        indexEdit
    }
}
export const clickAll = (status) => {
    return {
        type: types.CLICK_ALL,
        status
    }
}
export const clearComplete = (arr) => {
    return {
        type: types.CLEAR_COMPLETE,
        arr
    }
}