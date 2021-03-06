import React from 'react';
import '../assets/css/SearchMovies.css'
import iconSearch from '../assets/image/search.svg'
import ListFilm from './ListFilm';
import callApi from '../utils/apiCaller'
import { filterTask,  actSearchMovies, onShowSearch, actPaginationSearch} from '../actions/index';
import { useSelector, useDispatch } from 'react-redux'


function SearchMovies(props) {
  const filter = useSelector((state) => {
    return state.filterTable
  })
  const searchMovies = useSelector((state) => {
    return state.movies
  })
  const showSearch = useSelector((state) => {
    return state.showSearch
  })
  const pagination = useSelector((state) => {
    return state.pagiSearch
  })
  const { _page } = pagination
  const dispatch = useDispatch()
  const { match, location} = props

  function onChange(event) {
    dispatch(filterTask(event.target.value))
    if(event.target.value === '') {
      dispatch(onShowSearch(false))
    }
  }
  const onClickSearch = () => {
    dispatch(onShowSearch(true))
    if(filter !== '') {
        callApi(`${'https://api.themoviedb.org/3/search/movie?query='}${filter}${'&api_key=cfe422613b250f702980a3bbf9e90716&page='}${_page}`,
        'GET',null).then(res=> {
          dispatch(actPaginationSearch({
            page: res.data.page,
            total_pages: res.data.total_pages
          }))
          dispatch(actSearchMovies(res.data.results))
        })
    }else {
      dispatch(actSearchMovies([]))
    }
  }
  const onPageChange = (newPage) => {
    dispatch(actPaginationSearch({
      page: newPage
    }))
  }
  return (
    <div className="SearchMovies">
        <div className="search">
          <input 
            className="input"
            placeholder="Tìm kiếm..." 
            type="text"
            value={filter}
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
                pagination={pagination}
                onPageChange= {onPageChange}
              />
            )}
            {searchMovies.length === 0 && filter !== '' && (
            <div className="exc" style={{height: '400px'}}>Không tìm thấy kết quả phù hợp</div>
            )}
          </div>
        )}
        {!showSearch && (
          <div style={{height: '400px'}}>
           
          </div>
        )}
    </div>
  );
}

export default SearchMovies;
