import * as Types from '../../constants/ActionTypes'
var initialState = {
    _page: 1,
    _totalPage: 1,
};

const myReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.PAGINATION_SEARCH: {
           
            if (action.pagination.hasOwnProperty('total_pages')) {
                state = {
                    _page: action.pagination.page,
                    _totalPage: action.pagination.total_pages
                }
            }else {
                state = {
                    _page: action.pagination.page,
                    _totalPage: state._totalPage
                }
            }
            return {...state};
        }
        default: return {...state}
    }
}
export default myReducer