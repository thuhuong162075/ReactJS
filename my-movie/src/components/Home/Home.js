import React, {useEffect} from 'react';
import Gallery from './Gallery';
import '../../assets/css/Home/Home.css'
import RightBox from './RightBox';
import FilmHot from './FilmHot';
import ListCategory from './ListCategory';
import callApi from '../../utils/apiCaller'
import { connect } from 'react-redux'
import { actFetchPopularMovies } from '../../actions/index'
import ListFilm from '../ListFilm';


function Home(props) {
  useEffect(() => {
    callApi('https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
    'GET', null).then(res=> {
      props.fetchAllPopularMovies(res.data.results)
    })
  }, [])
  const { popularMovies, match, location } = props
  const filmHot = popularMovies[0]
  const rightbox = popularMovies.filter((item, index) => index > 10)
  const listCat = popularMovies.filter((item, index) => index > 2 && index <=10)
  
  return (
    <div className="Home">
      <div className="content-home" style={{marginTop: "30px"}}>
        <div className="content-left">
          <div className="box">
            <FilmHot title="Phim bộ mới nhất" filmHot={filmHot}/>
            <RightBox rightbox= {rightbox}/>
          </div>
          <div className="list-film">
          <ListFilm 
                  title='Phim xem nhiều' 
                  movies = {popularMovies} 
                  matchUrl={match.url}
                  location={location}
        />
          </div>
        </div>
        <div className="content-right">
          <div className="list-category">
            <ListCategory listCat = {listCat}/>
          </div>
        </div>
      </div>
      
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

