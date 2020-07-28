import React, {useEffect} from 'react';
import ListFilm from './ListFilm';
import '../assets/css/PopularMovies.css'
import callApi from '../utils/apiCaller'
import { connect } from 'react-redux'
import { actFetchPopularMovies } from '../actions/index'

function PopularMovies(props) {
  const { popularMovies, match, location } = props
  useEffect(() => {
    callApi('https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
    'GET', null).then(res=> {
      props.fetchAllPopularMovies(res.data.results)
    })
  }, [])
  return (
    <div className="PopularMovies">
      {popularMovies.length > 0 && (
        <ListFilm title='Phim phổ biến' 
                  movies = {popularMovies} 
                  matchUrl={match.url}
                  location={location}
        />
      )}
      {popularMovies.length === 0 && (
        <div className="exc">Warting ...</div>
      )}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    popularMovies: state.movies
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllPopularMovies: (movies) => {
      dispatch(actFetchPopularMovies(movies));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularMovies);
