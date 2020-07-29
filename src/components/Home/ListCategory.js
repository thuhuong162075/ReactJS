import React from 'react';
import startImage from "../../assets/image/star.svg"
import '../../assets/css/Home/ListCategory.css'
import * as Urls from '../../constants/Config'

function ListCategory(props) {
    const {listCat} = props
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
                            <img src={`${Urls.API_URL_IMAGE}${item.poster_path}`} alt='film'/>
                            <div className="text">
                                <p className="episode">{item.title}</p>
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
