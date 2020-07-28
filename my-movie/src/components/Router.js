import React from 'react';
import PopularMovies from './PopularMovies';
import UpcomingMovies from './UpcomingMovies';
import SearchMovies from './SearchMovies';
import FavoritesMovies from './FavoritesMovies';
import DetailMovies from './DetailMovies';
import Home from './Home/Home';

const routes = [
    {
        path: "/",
        exact: true,
        main: ({match, location}) => <Home match={match} location={location} />
    },
    {
        path: "/popularMovies",
        exact: true,
        main: ({match, location}) => <PopularMovies match={match} location={location}/>
    },
    {
        path: "/upcomingMovies",
        exact: true,
        main: ({match, location}) => <UpcomingMovies match={match} location={location}/>
    },
    {
        path: "/search",
        exact: false,
        main: ({match, location}) => <SearchMovies match={match} location={location}/>
    },
    {
        path: "/favorites",
        exact: false,
        main: () => <FavoritesMovies />
    },
    {
        path: "/popularMovies/:id",
        exact: true,
        main: ({match, location}) => <DetailMovies match={match} location={location}/>
    },
    {
        path: "/upcomingMovies/:id",
        exact: true,
        main: ({match, location}) => <DetailMovies match={match} location={location}/>
    }
];
export default routes;