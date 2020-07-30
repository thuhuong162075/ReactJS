import { combineReducers } from 'redux';
import movies from './movies'
import movie from './movie'
import filterTable from './filterTable'
import showSearch from './showSearch'

const myReducer = combineReducers({
    movies,
    movie,
    filterTable,
    showSearch
})
export default myReducer