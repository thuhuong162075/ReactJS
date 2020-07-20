import React from 'react';
import Gallery from './Gallery';
import '../../assets/css/Home/Home.css'
import RightBox from './RightBox';
import FilmHot from './FilmHot';
import ListCategory from './ListCategory';
import ListFilm from '../ListFilm';

function Home() {
  return (
    <div className="Home">
      <Gallery />
      <div className="content-home">
        <div className="content-left">
          <div className="box">
            <FilmHot />
            <RightBox />
          </div>
          <div className="list-film">
            <ListFilm />
          </div>
        </div>
        <div className="content-right">
          <div className="list-category">
            <ListCategory />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
