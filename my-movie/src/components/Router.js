import React from 'react';
const PopularMovies = React.lazy(() => import('./PopularMovies'));
const UpcomingMovies = React.lazy(() => import('./UpcomingMovies'));
const SearchMovies = React.lazy(() => import('./SearchMovies'));
const FavoritesMovies = React.lazy(() => import('./FavoritesMovies'));
const DetailMovies = React.lazy(() => import('./DetailMovies'));
const Home = React.lazy(() => import('./Home/Home'));


const routes = [
    {
        path: "/",
        exact: true,
        main: ({match, location}) => <Home match={match} location={location} />
    },
    {
        path: "/home",
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
        main: ({match, location}) => <FavoritesMovies match={match} location={location}/>
    },
    {
        path: "/detail/name=:name?id=:id",
        exact: true,
        main: ({match, location}) => <DetailMovies match={match} location={location}/>
    },
   
];
export default routes;