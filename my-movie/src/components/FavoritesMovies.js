import React, {useEffect} from 'react';
import '../assets/css/FavoritesMovies.css'
import ListFilm from './ListFilm';
import {  actPaginationFavorite } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux'


function FavoritesMovies(props) {
  const dispatch = useDispatch()
  const favoritesMovies = useSelector((state) => {
    return state.favoriteMovies
  })
  const pagination = useSelector((state) => {
    return state.pagiFavorite
  })
  const { _page } = pagination
  useEffect(() => {
    dispatch(actPaginationFavorite({
      page: 1,
      total_pages: favoritesMovies.length
    }))
    },[_page])
  
  const onPageChange = (newPage) => {
    dispatch(actPaginationFavorite({
      page: newPage
    }))
  }

  const { match, location } = props
  
  return (
    <div className="FavoritesMovies">
      {favoritesMovies.length > 0 && (
        <ListFilm 
          title="phim được yêu thích nhất"
          movies={favoritesMovies}
          matchUrl={match.url}
          location={location}
          pagination={pagination}
          onPageChange= {onPageChange}
        />
      )}
      {favoritesMovies.length === 0 && (
        <div className="exc">Bạn chưa có phim yêu thích</div>
      )}
    </div>
  );
}

export default FavoritesMovies;
