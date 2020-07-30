import React, {useEffect} from 'react';
import '../assets/css/FavoritesMovies.css'
import ListFilm from './ListFilm';
import { actFetchFavoritesMovies } from '../actions/index';
import callApi from '../utils/apiCaller'
import { useSelector, useDispatch } from 'react-redux'


function FavoritesMovies(props) {
  const favoritesMovies = useSelector((state) => {
    return state.movies
  })
  const dispatch = useDispatch()
  useEffect(() => {
  callApi('https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
    'GET', null).then(res=> {
      dispatch(actFetchFavoritesMovies(res.data.results));
    })
  },[]);
  
  return (
    <div className="FavoritesMovies">
      {favoritesMovies.length > 0 && (
        <ListFilm title="phim được yêu thích nhất" movies={favoritesMovies}/>
      )}
      {favoritesMovies.length === 0 && (
        <div className="exc">Bạn chưa có phim yêu thích</div>
      )}
    </div>
  );
}

export default FavoritesMovies;
