import React, {useEffect} from 'react';
import '../assets/css/UpcomingMovies.css';
import ListFilm from './ListFilm';
import callApi from '../utils/apiCaller';
import { actFetchUpcomingMovies, actPaginationUpcoming } from '../actions/index'
import { useSelector, useDispatch } from 'react-redux'

function UpcomingMovies(props) {
  const dispatch = useDispatch()
  const upcomingMovies = useSelector((state) => {
    return state.movies
  })
  const pagination = useSelector((state) => {
    return state.pagiUpcoming
  })
  const { _page } = pagination

  useEffect(()=> {
    callApi(`${'https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page='}${_page}${'&release_date.gte=2020-07-20&release_date.lte=2020-10-18&with_release_type=3%7C2'}`,
    'GET',null).then(res=> {
      dispatch(actPaginationUpcoming({
        page: res.data.page,
        total_pages: res.data.total_pages
      }))
      dispatch(actFetchUpcomingMovies(res.data.results))
    })
  },[_page])
  const onPageChange = (newPage) => {
    dispatch(actPaginationUpcoming({
      page: newPage
    }))
  }
  const {match, location} = props
  return (
    <div className="UpcomingMovies">
        {upcomingMovies.length > 0 && (
          <ListFilm 
            title="phim sắp tới"
            movies={upcomingMovies} 
            matchUrl={match.url}
            location={location}
            pagination={pagination}
            onPageChange= {onPageChange}
          />
        )}
        {upcomingMovies.length === 0 && (
         <div className="exc">Warting...</div>
        )}
    </div>
  );
}

export default UpcomingMovies;
