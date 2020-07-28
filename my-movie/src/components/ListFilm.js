import React from 'react';
import '../assets/css/ListFilm.css'
import * as Urls from '../constants/Config'
import startImage from '../assets/image/star.svg'
import clockImage from "../assets/image/time.svg"
import {
    NavLink
  } from "react-router-dom";
  
function ListFilm(props) {
    const {movies, matchUrl, location} = props
    if(movies.length > 0 ) {
        return (
            <div className="ListFilm">
                <div className="title">
                        <p className="cat-title">{props.title}</p>
                </div>
                <div className="content">
                        <ul className="group-list">
                            {movies.map((item, index) => 
                                <li className="list-item" key={index}>
                                    <img className="poster" src= {`${Urls.API_URL_IMAGE}${item.poster_path}`} alt="list-item"/>
                                    {item.vote_average > 0 && (
                                        <div className="rate">
                                            <img src={startImage} alt="icon start" width={15} height={15} />
                                            <p>{item.vote_average}</p>
                                        </div>
                                    )}
                                    
                                    <div className="time">
                                        <img src={clockImage} alt="icon clock" width={15} height={15} />
                                        <p>1h20</p>
                                    </div>
                                    <div className="text">
                                        <p className="filmName">{item.title}</p>
                                        <NavLink 
                                            activeStyle={{background: '#131313' }} 
                                            to={{
                                                pathname: `${matchUrl}/${item.id}`,
                                                state: {
                                                    from: location
                                                }
                                            }} 
                                            className="more"
                                        >
                                            Xem thêm
                                        </NavLink>
                                    </div>
                                </li>
                            )}
                        </ul>
                </div>
            </div>
        );
    } else {
        return (
            <div>Warting ....</div>
        )
    }
}

export default ListFilm;
