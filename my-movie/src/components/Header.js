import React from 'react';
import logo from '../assets/image/logopage.png'
import '../assets/css/Header.css'
import icPopcorn from '../assets/image/popcorn.svg'
import icCamera from '../assets/image/camera.svg'
import icFilm from '../assets/image/film.svg'
import icTicket from '../assets/image/ticket.svg'
import { useSelector} from 'react-redux'
import {
    NavLink,
    useLocation
  } from "react-router-dom";

function Header() {
    let location = useLocation();
    const active = useSelector((state) => {
        return state.activeMenu
    })
    
    const ac = location.pathname.includes("/detail/id=") ? active : location.pathname

    const menu = [
        {
            name: "Home",
            to: "/",
            exact: true
        },
        {
            name: "Phim phổ biến",
            to: "/popularMovies",
            exact: false
        },
        {
            name: "Phim sắp tới",
            to: "/upcomingMovies",
            exact: false
        },
        {
            name: "Tìm kiếm",
            to: "/search",
            exact: false
        },
        {
            name: "Phim được yêu thích",
            to: "/favorites",
            exact: false
        }
    ]
  return (
    <div className="Header">
        <div className="header-title">
            <div className="title">
            <NavLink 
                activeStyle={{ background: '#131313'}} 
                to="/"
                exact={true}
                className="nav-link" 
            >
                <div className="text">
                    <h2>MovieCards</h2>
                    <p>Xem phim</p>
                </div>
            </NavLink>
                <img src= {logo} alt="logo" style={{width: 60, height: 60}} />
            </div>
            {/* <div className="search-box">
                <input placeholder="nhập tên phim" type='text'/>
                <img src={iconSearch} alt="icon search" style={{width: 25, height: 25}} />
            </div> */}
            <div className="icon">
                <img src= {icPopcorn} alt="logo" style={{width: 40, height: 40}} />
                <img src= {icCamera} alt="logo" style={{width: 40, height: 40}} />
                <img src= {icFilm} alt="logo" style={{width: 40, height: 40}} />
                <img src= {icTicket} alt="logo" style={{width: 40, height: 40}} />

            </div>
            {/* <div className="acount">
                <p><a className="signIn">Đăng ký/</a><a className="login" href="#">Đăng nhập</a></p>
            </div> */}
        </div>
        <div className="header-navbar">
            <nav className="navbar">
                <ul className="navbar-nav">
                    {/* {menu.map((item, index) => (
                        <li className="nav-item popular-movies " key={index}>
                            <NavLink 
                                activeStyle={{
                                    background: '#131313'
                                }} to={item.to} className="nav-link" exact={item.exact}>{item.name}</NavLink>
                        </li>
                    ))} */}
                    {menu.map((item, index) => (
                        <li className= {ac === item.to ? "nav-item active" : "nav-item"} key={index}>
                            <NavLink to={item.to} className="nav-link" exact={item.exact}>{item.name}</NavLink>
                        </li>
                    )
                    )}
                </ul>
            </nav>   
        </div>
    </div>
  );
}

export default Header;
