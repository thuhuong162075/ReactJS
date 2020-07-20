import React from 'react';
import logo from '../assets/image/logopage.png'
import '../assets/css/Header.css'
import iconSearch from '../assets/image/search.svg'
function Header() {
  return (
    <div className="Header">
        <div className="header-title">
            <div className="title">
                <div className="text">
                    <h2>MovieCards</h2>
                    <p>Xem phim</p>
                </div>
                <img src= {logo} width={60} height={60} />
            </div>
            <div className="search-box">
                <input placeholder="nhập tên phim" type='text'/>
                <img src={iconSearch} width={25} height={25} />
            </div>
            <div className="acount">
                <p><a className="signIn" href="#">Đăng ký/</a><a className="login" href="#">Đăng nhập</a></p>
            </div>
        </div>
        <div className="header-navbar">
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item home active">
                        <a href="#" className="nav-link">Trang chủ</a>
                    </li>
                    <li className="nav-item popular-movies">
                        <a href="#" className="nav-link">Phim phổ biến</a>
                    </li>
                    <li className="nav-item upcoming-movies">
                        <a href="#" className="nav-link">Phim sắp tới</a>
                    </li>
                    <li className="nav-item favorites-movies">
                        <a href="#" className="nav-link">Phim được yêu thích</a>
                    </li>
                </ul>
            </nav>   
        </div>
    </div>
  );
}

export default Header;
