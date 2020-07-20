import React from 'react';
import Header from './components/Header';
import './assets/css/App.css'
import Home from './components/Home/Home';
import PopularMovies from './components/PopularMovies';
import demo from './traning/demo'

function App() {
  return (
    <div className="App">
      <Header />
      <PopularMovies />
     
    </div>
  );
}

export default App;
