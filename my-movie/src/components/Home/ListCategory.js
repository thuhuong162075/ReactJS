import React from 'react';
import startImage from "../../assets/image/star.svg"
import '../../assets/css/Home/ListCategory.css'
function ListCategory() {
  return (
    <div className="ListCategory">
       <div className="title">
           <img src={startImage} width={40} height={40}/>
           <p>PHIM LẺ XEM NHIỀU</p>
       </div>
       <div className="content">
            <ul className="group-list">
                <li className="list-item">
                    <img src='https://cdn.moveek.com/media/cache/tall/5d804b0d16338076728922.jpg' />
                    <div className="text">
                        <p className="filmName">Đại chiến Kén Rể</p>
                        <p className="author">Oh My Baby</p>
                        <p className="episode">Tập 2</p>
                    </div>
                </li>
                <li className="list-item">
                    <img src='https://cdn.moveek.com/media/cache/tall/5d804b0d16338076728922.jpg' />
                    <div className="text">
                        <p className="filmName">Đại chiến Kén Rể</p>
                        <p className="author">Oh My Baby</p>
                        <p className="episode">Tập 2</p>
                    </div>
                </li>
                <li className="list-item">
                    <img src='https://cdn.moveek.com/media/cache/tall/5d804b0d16338076728922.jpg' />
                    <div className="text">
                        <p className="filmName">Đại chiến Kén Rể</p>
                        <p className="author">Oh My Baby</p>
                        <p className="episode">Tập 2</p>
                    </div>
                </li>
            </ul>
       </div>
    </div>
  );
}

export default ListCategory;
