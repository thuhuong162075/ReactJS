import React from 'react';
import startImage from "../../assets/image/star.svg"
import '../../assets/css/Home/ListCategory.css'
import * as Urls from '../../constants/Config'
import {
    NavLink
  } from "react-router-dom";
import urlSlug from 'url-slug'

function ListCategory(props) {
    const {listCat, location} = props
    if(!listCat) {
        return (
          <div></div>
        )
    }else {

    return (
        <div className="ListCategory">
        <div className="title">
            <img src={startImage} alt="title-listCategory" width={40} height={40}/>
            <p>PHIM LẺ XEM NHIỀU</p>
        </div>
        <div className="content">
                <ul className="group-list">
                    {listCat.map((item, index) => (
                        <li className="list-item" key={index}>
                            <div className="img-tooltip">
                                <NavLink 
                                    activeStyle={{background: '#131313' }} 
                                    to={{
                                        pathname: `${'detail/name='}${urlSlug(
                                            item.title,
                                            '-',
                                            urlSlug.transformers.lowercase)}${'?id='}${item.id}`,
                                        state: {
                                            from: location
                                        }
                                    }} 
                                >
                                    <img src={`${Urls.API_URL_IMAGE}${item.poster_path}`} alt='film'/>
                                </NavLink>
                                <div className="hover-img">{item.title}</div>
                            </div>
                            
                            <div className="text">
                                <NavLink 
                                    activeStyle={{background: '#131313' }} 
                                    to={{
                                        pathname: `${'detail/name='}${urlSlug(
                                            item.title,
                                            '-',
                                            urlSlug.transformers.lowercase)}${'?id='}${item.id}`,
                                        state: {
                                            from: location
                                        }
                                    }} 
                                    style={{textDecoration:'none'}}
                                >
                                    <p className="episode">{item.title}</p>
                                </NavLink>
                                <p className="author">{item.release_date}</p>
                            </div>
                        </li>
                    ))}
                    
                </ul>
        </div>
        </div>
    );
      }
}

export default ListCategory;
