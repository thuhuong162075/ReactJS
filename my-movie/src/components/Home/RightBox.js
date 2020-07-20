import React from 'react';
import '../../assets/css/Home/RightBox.css'

function RightBox() {
  return (
    <div className="RightBox">
        <div className="title">
            <span>PHIM BỘ ĐÃ HOÀN THÀNH</span>
        </div>
        <div className="content">
            <ul className="group-list">
                <li className="list-item box-main">
                    <img src='https://cdn.idntimes.com/content-images/community/2020/05/img-20200514-154627-8a7f05e3ea08fc7a60a247a38246e110_600x400.jpg' />
                    <div className="text">
                        <p className="filmName">Đại chiến Kén Rể</p>
                        <p className="author">Oh My Baby</p>
                        <p className="episode">Tập 2</p>
                    </div>
                </li>
                <li className="list-item">
                    <img src='https://cdn.idntimes.com/content-images/community/2020/05/img-20200514-154627-8a7f05e3ea08fc7a60a247a38246e110_600x400.jpg' />
                    <div className="text">
                        <p className="filmName">Đại chiến Kén Rể</p>
                        <p className="author">Oh My Baby</p>
                        <p className="episode">Tập 2</p>
                    </div>
                </li>
                <li className="list-item">
                    <img src='https://cdn.idntimes.com/content-images/community/2020/05/img-20200514-154627-8a7f05e3ea08fc7a60a247a38246e110_600x400.jpg' />
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

export default RightBox;
