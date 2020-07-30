import React, {useEffect} from 'react';
import ListFilm from './ListFilm';
import '../assets/css/PopularMovies.css'
import callApi from '../utils/apiCaller'
import { actFetchPopularMovies, actPagination } from '../actions/index'
import { useSelector, useDispatch } from 'react-redux'


function PopularMovies(props) {
  const popularMovies = useSelector((state) => {
    return state.movies
  })
  const pagination = useSelector((state) => {
    return state.pagination
  })
  const { _page } = pagination
  const dispatch = useDispatch()
  useEffect(() => {
  callApi(`${'https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='}${_page}`,
    'GET', null).then(res=> {
      dispatch(actPagination({
        page: res.data.page,
        total_pages: res.data.total_pages
      }))
      dispatch(actFetchPopularMovies(res.data.results));
    })
  },[_page])
  const onPageChange = (newPage) => {
    dispatch(actPagination({
      page: newPage
    }))
  }
  
  const { match, location } = props
  
  return (
    <div className="PopularMovies">
      {popularMovies.length > 0 && (
        <ListFilm title='Phim phổ biến' 
                  movies = {popularMovies} 
                  matchUrl={match.url}
                  location={location}
                  pagination={pagination}
                  onPageChange= {onPageChange}
        />
      )}
      {popularMovies.length === 0 && (
        <div className="exc">Warting ...</div>
      )}
    </div>
  );
}

export default PopularMovies;
