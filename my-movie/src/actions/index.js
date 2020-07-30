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
export const actFetchFavoritesMovies = (favoriteMovies) => {
    return {
        type: Types.FAVORITES_MOVIES,
        favoriteMovies
    }
}
export const actPagination = (pagination) => {
    return {
        type: Types.PAGINATION,
        pagination
    }
}
export const actPaginationHome = (pagination) => {
    return {
        type: Types.PAGINATION_HOME,
        pagination
    }
}
export const actPaginationUpcoming = (pagination) => {
    return {
        type: Types.PAGINATION_UPCOMING,
        pagination
    }
}
export const actPaginationSearch= (pagination) => {
    return {
        type: Types.PAGINATION_SEARCH,
        pagination
    }
}
export const actPaginationFavorite= (pagination) => {
    return {
        type: Types.PAGINATION_FAVORITE,
        pagination
    }
}


