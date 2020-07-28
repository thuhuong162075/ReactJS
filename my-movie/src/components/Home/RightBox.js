import React from 'react';
import '../../assets/css/Home/RightBox.css'
import * as Urls from '../../constants/Config'


function RightBox(props) {
    const { rightbox} = props
  return (
    <div className="RightBox">
        <div className="title">
            <span>PHIM BỘ ĐÃ HOÀN THÀNH</span>
        </div>
        <div className="content">
            {rightbox.length > 0 && (
                <ul className="group-list">
                    <li className="list-item box-main">
                        <img alt="rightbox film" src={`${Urls.API_URL_IMAGE}${rightbox[rightbox.length-1].poster_path}`} />
                        <div className="text">
                            <p className="episode">{rightbox[rightbox.length-1].title}</p>
                            <p className="author">{rightbox[rightbox.length-1].release_date}</p>
                            
                        </div>
                    </li>
                    {rightbox.map((item, index) => (
                        <li className="list-item" key={index}>
                            <img alt="rightbox film" src={`${Urls.API_URL_IMAGE}${item.poster_path}`} />
                            <div className="text">
                                <p className="episode">{item.title}</p>
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
