import React, {useEffect} from 'react';
import '../assets/css/SearchMovies.css'
import iconSearch from '../assets/image/search.svg'
import ListFilm from './ListFilm';
import callApi from '../utils/apiCaller'
import {connect } from 'react-redux'
import { filterTask,  actSearchMovies, onShowSearch} from '../actions/index';
import * as Urls from '../constants/Config'

function SearchMovies(props) {
  const {searchMovies, match, location, filter, showSearch} = props

  function onChange(event) {
    props.onFilterTable(event.target.value)
    if(event.target.value === '') {
      props.onShowSearch(false)
    }
  }
  
  const onClickSearch = () => {
    props.onShowSearch(true)
    if(filter !== '') {
      callApi('https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
      'GET',null).then(res=> {
        props.onSearchItems(res.data.results)
      })
    }else {
      props.onSearchItems([])
    }
  }
  return (
    <div className="SearchMovies">
        <div className="search">
          <input 
            className="input"
            placeholder="Tìm kiếm..." 
            type="text"
            // value={searchItem}
            onChange={onChange}
          />
          <img src={iconSearch} alt="icon search" style={{width: 25, height: 25}} onClick={onClickSearch}/>
        </div>
        {showSearch && (
          <div className="result-search">
            {searchMovies.length > 0 && (
              <ListFilm 
                title="Danh sách các bộ phim phù hợp với yêu cầu tìm kiếm "
                movies={searchMovies} 
                matchUrl={match.url}
                location={location}
              />
            )}
            {searchMovies.length === 0 && filter !== '' && (
            <div className="exc">Không tìm thấy kết quả phù hợp</div>
            )}
          </div>
        )}
    </div>
  );
}
const mapStatetoProps = state => {

  return {
    filter: state.filterTable,
    searchMovies: state.movies,
    showSearch: state.showSearch
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilterTable: (filter) => {
      dispatch(filterTask(filter))
    },
    onSearchItems: (movies) => {
      dispatch(actSearchMovies(movies))
    },
    onShowSearch: (showSearch) => {
      dispatch(onShowSearch(showSearch))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(SearchMovies);
