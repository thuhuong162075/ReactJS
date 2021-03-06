import React, {useEffect} from 'react';
import '../../assets/css/Home/Home.css'
import RightBox from './RightBox';
import FilmHot from './FilmHot';
import ListCategory from './ListCategory';
import callApi from '../../utils/apiCaller'
import { actFetchPopularMovies, actPaginationHome } from '../../actions/index'
import ListFilm from '../ListFilm';
import { useSelector, useDispatch } from 'react-redux'


function Home(props) {
  const popularMovies = useSelector((state) => {
    return state.movies
  })
  const pagination = useSelector((state) => {
    return state.pagiHome
  })
  const { _page } = pagination
  const dispatch = useDispatch()

  useEffect(() => {
    callApi(`${'https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='}${_page}`,
    'GET', null).then(res=> {
      dispatch(actPaginationHome({
        page: res.data.page,
        total_pages: res.data.total_pages
      }))
      dispatch(actFetchPopularMovies(res.data.results));
    })
  }, [_page])
  const onPageChange = (newPage) => {
    dispatch(actPaginationHome({
      page: newPage
    }))
  }
 
  const { match, location } = props
  const filmHot = popularMovies[0]
  const rightbox = popularMovies.filter((item, index) => index > 10)
  const listCat = popularMovies.filter((item, index) => index > 2 && index <=10)
  
  return (
    <div className="Home">
      <div className="content-home" style={{marginTop: "30px"}}>
        <div className="content-left">
          <div className="box">
            <FilmHot title="Phim bộ mới nhất" filmHot={filmHot}  location={location}/>
            <RightBox rightbox= {rightbox} location={location}/>
          </div>
          <div className="list-film">
            <ListFilm 
                    title='Phim xem nhiều' 
                    movies = {popularMovies} 
                    matchUrl={match.url}
                    location={location}
                    pagination={pagination}
                    onPageChange= {onPageChange}
            />
          </div>
        </div>
        <div className="content-right">
          <div className="list-category">
            <ListCategory listCat = {listCat} location={location}/>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;

