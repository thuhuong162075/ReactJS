import React from 'react';
import '../../assets/css/Home/FilmHot.css'
import * as Urls from '../../constants/Config'
function FilmHot(props) {
  const {filmHot} = props
  if(!filmHot) {
    return (
      <div></div>
    )
  }else {
    return (
      <div className="FilmHot">
          <div className="title">
            <span>{props.title}</span>
          </div>
          <div className="content">
            <img src={`${Urls.API_URL_IMAGE}${filmHot.poster_path}`} alt="film hot"/>
            <p>{filmHot.title}</p>
          </div>
      </div>
    );
  }
  
}

export default FilmHot;
