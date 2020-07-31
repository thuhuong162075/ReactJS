import React, {useEffect, useState} from 'react';
import '../assets/css/DetailMovies.css'
import startImage from '../assets/image/star.svg'
import clockImage from "../assets/image/time.svg"
import watch from '../assets/image/next.svg'
import callApi from '../utils/apiCaller';
import * as Urls from '../constants/Config';
import { actFetchDetailMovies } from '../actions/index';
import imgReturn from '../assets/image/return.svg';
import imgHeart from '../assets/image/heart.svg';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useLocation } from "react-router-dom";
import {activeTask} from '../actions/index'
import { actFetchFavoritesMovies } from '../actions/index';
import ModalVideo from 'react-modal-video'
import YoutubeModal from 'react-youtube-modal'


function DetailMovies(props) {
    let history = useHistory();
    let location = useLocation();
    const dispatch = useDispatch()
    const {match} = props
    const movie = useSelector((state) => {
        return state.movie
    })
    const movieFavorite = useSelector((state) => {
        return state.favoriteMovies
    })
   
    useEffect(() => {
        callApi(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&&language=en-US&append_to_response=videos,images&include_image_language=en,null`,
        'GET', null).then(res=> {
            dispatch(actFetchDetailMovies(res.data));
        })
       
        dispatch(activeTask(location.state.from.pathname));
    },[])
    function containsObject(obj, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i].id === obj.id) {
                return true;
            }
        }
        return false;
    }
    const onAddFavoriteFilm = () => {
        if (containsObject(movie, movieFavorite)) {
            alert("Phim đã nằm trong danh sách yêu thích")
        }else {
            dispatch(actFetchFavoritesMovies(movie));
            alert("Phim đã được thêm vào danh sách yêu thích")
        }
    }
    
    if (Object.keys(movie).length > 0) {
        console.log(movie)

        
        const paImg = movie.images.backdrops.filter((item, index)=>index<=4 && index>0)
        return (
            <div className="DetailMovies">
                <div className="info">
                    <div className="info-top">
                        <div className="introduce">
                            <img alt="imgtitle" src= {`${Urls.API_URL_IMAGE}${movie.poster_path}`} width={300} height={400}/>
                        </div>
                        <div className="content">
                            <div className="general_introduction">
                                <h2 className="title">{movie.title}</h2>
                                <p className="gi genres">
                                {movie.genres.map((item, index) => 
                                    (<span key={index}>
                                        {item['name']}{index === movie.genres.length-1 ? "":", "} 
                                    </span>))}
                                </p>
                                <p className="gi time-rate">
                                    <span className="time">
                                        <img src={startImage} alt="start" width={15} height={15} />
                                        {movie.vote_average}
                                    </span>
                                    <span className="rate">
                                        <img src={clockImage} alt="clock" width={15} height={15} />
                                        {Math.floor(movie.runtime/60)}h {movie.runtime-60*Math.floor(movie.runtime/60)}m
                                    </span>
                                </p>
                            </div>
                            <div className="overview">
                                <h3>Overview</h3>
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                    </div>
                    <div className="info-bottom">
                        <div className="tagLine">
                            {movie.tagline}
                        </div>
                        <div className="infomore">
                            <div className="more revenue">
                                <h3 className="ttrevenue">Revenue</h3>
                                <p>{movie.revenue > 0 ? movie.revenue : "Not Available"} </p>
                            </div>
                            <div className="more budget">
                                <h3 className="ttbudget">Budget</h3>
                                <p>{movie.budget > 0 ? movie.budget : "Not Available"}</p>
                            </div>
                            <div className="more release-date">
                                <h3 className="ttdate">Release Date</h3>
                                <p>{movie.release_date}</p>
                            </div>
                        </div>
                    </div>
                    <div className="button">
                        {/* <a className="nav-link" href={`${Urls.API_URL_WATCH}${movie.videos.results[0]['key']}`} >
                            <button className="btn watch-trailer">
                                <img src={watch} alt="watch" width={20} height={20} />
                                <p>Watch Trailer</p>
                            </button>
                        </a> */}
                        <YoutubeModal width={1000} height={400} paddingTop={10} videoId={movie.videos.results[0].key}>
                            <button type="button" className="btn watch-trailer">
                                    <img src={watch} alt="watch" width={20} height={20} />
                                    <p>Watch Trailer</p>
                            </button>
                        </YoutubeModal>
                        <button className="btn add-to-list" onClick={onAddFavoriteFilm}>
                            <img src={imgHeart} alt="heart" width={20} height={20} />
                            <p>Add to List</p>
                        </button>        
                    </div>
                </div>
                <div className="imgFilm">
                    {paImg.map((item, index)=> (
                        <img key={index} alt={index+1} src={`${Urls.API_URL_IMAGE}${item.file_path}`}/>
                    ))}
                </div>
                 <button className="return" onClick={() => history.goBack()}>
                    <img src={imgReturn} alt="imgReturn" width={20} height={20} />
                    <p>Quay lại</p>
                </button>
            </div>
        );
    } else {
        return (
            <div>Warting ....</div>
        );
    }
    
}


export default DetailMovies;
