import React from 'react';
import '../../assets/css/Home/Gallery.css'

function Gallery() {
  return (
    <div className="Gallery">
        <ul className="list-group">
            <li className="list-item">
                <img src='https://image.tmdb.org/t/p/w780/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg' />
            </li>
            <li className="list-item">
                <img src='https://image.tmdb.org/t/p/w780/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg' />
            </li>
            <li className="list-item">
                <img src='https://image.tmdb.org/t/p/w780/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg' />
            </li>
            <li className="list-item">
                <img src='https://image.tmdb.org/t/p/w780/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg' />
            </li>
            <li className="list-item">
                <img src='https://image.tmdb.org/t/p/w780/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg' />
            </li>
        </ul>
        <div className="button button-prev prev"></div>
        <div className="button button-next next"></div>
    </div>
  );
}

export default Gallery;
