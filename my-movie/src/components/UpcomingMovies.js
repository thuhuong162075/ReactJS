import React, {useEffect} from 'react';
import '../assets/css/UpcomingMovies.css';
import ListFilm from './ListFilm';
import { connect } from 'react-redux';
import callApi from '../utils/apiCaller';
import { actFetchUpcomingMovies } from '../actions/index'

function UpcomingMovies(props) {
  useEffect(() => {
    callApi('https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=2020-07-20&release_date.lte=2020-10-18&with_release_type=3%7C2',
    'GET',null).then(res=> {
      props.fetchApiUpcomingMovies(res.data.results)
    })
  }, [])
  const {upcomingMovies, match, location} = props
  return (
    <div className="UpcomingMovies">
        {upcomingMovies.length > 0 && (
          <ListFilm 
            title="phim sắp tới"
            movies={upcomingMovies} 
            matchUrl={match.url}
            location={location}
          />
        )}
        {upcomingMovies.length === 0 && (
         <div className="exc">Warting...</div>
        )}
    </div>
  );
}
const mapStatetoProps = state => {
  return {
    upcomingMovies: state.movies
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchApiUpcomingMovies: (movies) => {
      dispatch(actFetchUpcomingMovies(movies))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(UpcomingMovies);
