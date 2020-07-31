import React from 'react';
import '../../assets/css/Home/RightBox.css'
import * as Urls from '../../constants/Config'
import {
    NavLink
  } from "react-router-dom";
  import urlSlug from 'url-slug'

function RightBox(props) {
    const { rightbox, location} = props
  return (
    <div className="RightBox">
        <div className="title">
            <span>PHIM BỘ ĐÃ HOÀN THÀNH</span>
        </div>
        <div className="content">
            {rightbox.length > 0 && (
                <ul className="group-list">
                    <li className="list-item box-main">
                        <div className="img-tooltip">
                            <NavLink 
                                activeStyle={{background: '#131313' }} 
                                to={{
                                    pathname: `${'detail/name='}${urlSlug(
                                        rightbox[rightbox.length-1].title,
                                        '-',
                                        urlSlug.transformers.lowercase)}${'?id='}${rightbox[rightbox.length-1].id}`,
                                    state: {
                                        from: location
                                    }
                                }} 
                            >
                                <img alt="rightbox film" src={`${Urls.API_URL_IMAGE}${rightbox[rightbox.length-1].poster_path}`} />
                            </NavLink>
                            <div className="hover-img">{rightbox[rightbox.length-1].title}</div>
                        </div>
                        <div className="text">
                            <NavLink 
                                activeStyle={{background: '#131313' }} 
                                to={{
                                    pathname: `${'detail/name='}${urlSlug(
                                        rightbox[rightbox.length-1].title,
                                        '-',
                                        urlSlug.transformers.lowercase)}${'?id='}${rightbox[rightbox.length-1].id}`,
                                    state: {
                                        from: location
                                    }
                                }} 
                                style={{textDecoration: 'none'}}
                            >
                                <p className="episode">{rightbox[rightbox.length-1].title}</p>
                            </NavLink>
                            
                            <p className="author">{rightbox[rightbox.length-1].release_date}</p>
                            
                        </div>
                    </li>
                    {rightbox.map((item, index) => (
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
                                    <img alt="rightbox film" src={`${Urls.API_URL_IMAGE}${item.poster_path}`} />
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
                )}
        </div>
    </div>
  );
}

export default RightBox;
