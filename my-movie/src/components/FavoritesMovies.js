import React, {useEffect} from 'react';
import '../assets/css/FavoritesMovies.css'
import ListFilm from './ListFilm';
import { connect } from 'react-redux';
import { actFetchFavoritesMovies } from '../actions/index';
import callApi from '../utils/apiCaller'

function FavoritesMovies(props) {
  useEffect(() => {
    callApi('https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
    'GET', null).then(res=> {
      props.fetchAllFavoritesMovies(res.data.results)
    })
  }, [])
  const {favoritesMovies} = props
  
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
const mapStateToProps = state => {
  return {
    favoritesMovies: state.movies
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllFavoritesMovies: (movies) => {
      dispatch(actFetchFavoritesMovies(movies));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesMovies);
