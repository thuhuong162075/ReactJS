import React from 'react';
import '../../assets/css/Home/FilmHot.css'
import * as Urls from '../../constants/Config'
import {
  NavLink
} from "react-router-dom";
import urlSlug from 'url-slug'

function FilmHot(props) {
  const {filmHot, location} = props
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
            <div className="img-tooltip">
              <NavLink 
                  activeStyle={{background: '#131313' }} 
                  to={{
                      pathname: `${'detail/name='}${urlSlug(
                        filmHot.title,
                          '-',
                          urlSlug.transformers.lowercase)}${'?id='}${filmHot.id}`,
                      state: {
                          from: location
                      }
                  }} 
              >
                  <img src={`${Urls.API_URL_IMAGE}${filmHot.poster_path}`} alt="film hot"/>
              </NavLink>
              <div className="hover-img">{filmHot.title}</div>
            </div>
          <NavLink 
              activeStyle={{background: '#131313' }} 
              to={{
                  pathname: `${'detail/name='}${urlSlug(
                    filmHot.title,
                      '-',
                      urlSlug.transformers.lowercase)}${'?id='}${filmHot.id}`,
                  state: {
                      from: location
                  }
              }} 
              style={{textDecoration: 'none'}}
          >
              <p>{filmHot.title}</p>
          </NavLink>
            
          </div>
      </div>
    );
  }
  
}

export default FilmHot;
