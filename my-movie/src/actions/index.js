import * as Types from '../constants/ActionTypes';

export const actFetchPopularMovies = (movies) => {
    return {
        type: Types.POPULAR_MOVIES,
        movies
    }
}
export const actFetchUpcomingMovies = (movies) => {
    return {
        type: Types.UPCOMING_MOVIES,
        movies
    }
}
export const actFetchFavoritesMovies = (movies) => {
    return {
        type: Types.FAVORITES_MOVIES,
        movies
    }
}
export const actFetchDetailMovies = (movie) => {
    return {
        type: Types.DETAIL_MOVIES,
        movie
    }
}
export const actSearchMovies = (movies) => {
    return {
        type: Types.FETCH_SEARCH_MOVIES,
        movies
    }
}
export const onShowSearch = (showSearch) => {
    return {
        type: Types.SHOW_RESULT_SEARCH,
        showSearch
    }
}
export const filterTask = (filter) => {
    return {
        type: Types.FILTER_TABLE,
        filter
    }
}
export const activeTask = (active) => {
    return {
        type: Types.ACTIVE_MENU,
        active
    }
}
