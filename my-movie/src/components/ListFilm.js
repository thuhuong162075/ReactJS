import React, {useState} from 'react';
import '../assets/css/ListFilm.css'
import * as Urls from '../constants/Config'
import startImage from '../assets/image/star.svg'
import clockImage from "../assets/image/time.svg"
import {
    NavLink
  } from "react-router-dom";
  import urlSlug from 'url-slug'

  function check(total,distance, page){
    var start, end;
    var first=false, last=false;
    var saw = Math.ceil(distance/2)
    if(page-saw>0){
        first=true;
    }
    if(page+saw<total){
        last=true;
    }
    if(page+saw<distance){
        last=false;
    }
    var d=page-saw;
    var e=page+saw;
    if(d<=1){
        start=1;
        end= total > distance ? distance : total;
        if(d==1) first=false
    } else if(e>=total){
        end=total;
        start=total-distance+1;
        if(d==total) first=false
    }else{
        start=page-2;
        end=page+2;
    }
    return {first:first,last:last,start:start,end:end}
    }

function ListFilm(props) {
    const {movies, location, pagination, onPageChange} = props
    const { _page, _totalPage} = pagination
    function handlePageChange(newPage) {
        if(onPageChange) {
            onPageChange(newPage)
        }
    }
    function handlePositionPage(value) {
        if(onPageChange) {
          onPageChange(value)
        }
      }
    const checkPage = check(_totalPage,5, _page)
    const arr = []
    for(let i=checkPage.start; i <= checkPage.end;i++){
        arr.push(i)
    }
    if(checkPage.first) {
        arr.unshift('prev')
        arr.unshift(1)
    }
    if(checkPage.last) {
        arr.push('next')
        arr.push(_totalPage)
    }
    console.log(arr)
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
                                            <img data-tooltip="This is an image" className="poster" src= {`${Urls.API_URL_IMAGE}${item.poster_path}`} alt="list-item"/>
                                        </NavLink>
                                        <div className="hover-img">{item.title}</div>
                                    </div>
                                    
                                        
                                    
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
                                            <p className="filmName">{item.title.length> 50 ? item.title.slice(0,50).concat('...') : item.title}</p>
                                        </NavLink>
                                       
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
                                            className="more"
                                        >
                                            Xem thêm
                                        </NavLink>
                                    </div>
                                </li>
                            )}
                        </ul>
                        <div className="pagination">
                        <button 
                            className="pg btn-prev"
                            disabled={_page <= 1}
                            onClick={() => handlePageChange(_page-1)}
                        >
                            Prev
                        </button> 
                        {arr.map((item, index) => 
                            item === 'prev' ?  
                            <div
                                disabled={_page <=1} 
                                className="btn-change prev" 
                                onClick={() => {
                                handlePageChange(_page-1)
                                }}
                                key={index}
                            >
                                {/* <img  src={PrevImg} width={12} height={13}/>  */}
                                <p className="text">...</p>
                            </div> : item === 'next' ?  
                            <div 
                                disabled={_page >= _totalPage}
                                className="btn-change next" 
                                onClick={() => handlePageChange(_page+1)}
                                key={index}
                            >
                                {/* <img  src={NextImg} width={12} height={13}/>  */}
                                <p className="text">...</p>
                            </div> : 
                            <button className= {_page === item ? 'pg active' : 'pg'}
                                    key={index}
                                    onClick={()=> handlePositionPage(item)}>
                                {item}
                            </button>
                            )}
                        <button 
                            className="pg btn-next"
                            disabled={_page >= _totalPage}
                            onClick={() => handlePageChange(_page+1)}
                        >
                            Next
                        </button>
                        <button className="total">{_totalPage} /page</button>
                        </div>
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
