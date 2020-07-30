import { combineReducers } from 'redux';
import movies from './movies'
import movie from './movie'
import filterTable from './filterTable'
import showSearch from './showSearch'
import activeMenu from './activeMenu'
import favoriteMovies from './favoriteMovies'

const myReducer = combineReducers({
    movies,
    movie,
    filterTable,
    showSearch,
    activeMenu,
    favoriteMovies
})
export default myReducer