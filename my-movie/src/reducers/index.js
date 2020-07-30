import { combineReducers } from 'redux';
import movies from './movies'
import movie from './movie'
import filterTable from './filterTable'
import showSearch from './showSearch'
import activeMenu from './activeMenu'
import favoriteMovies from './favoriteMovies'
import pagination from './pagination'
import pagiHome from './paginator/pagiHome'
import pagiUpcoming from './paginator/pagiUpcoming'
import pagiSearch from './paginator/pagiSearch'
import pagiFavorite from './paginator/pagiFavorite'

const myReducer = combineReducers({
    movies,
    movie,
    filterTable,
    showSearch,
    activeMenu,
    favoriteMovies,
    pagination,
    pagiHome,
    pagiUpcoming,
    pagiSearch,
    pagiFavorite
})
export default myReducer