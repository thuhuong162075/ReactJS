import { combineReducers } from 'redux';
import movies from './movies'
import movie from './movie'
import filterTable from './filterTable'
import showSearch from './showSearch'
import activeMenu from './activeMenu'

const myReducer = combineReducers({
    movies,
    movie,
    filterTable,
    showSearch,
    activeMenu
})
export default myReducer