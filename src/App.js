import React, {useState, useEffect } from 'react';

import './App.css';

import api from './utils/api'
import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header'

import movie1 from './assets/images/movie1.jpeg'
import movie2 from './assets/images/movie2.jpeg'
import movie3 from './assets/images/movie3.jpeg'
import Films from './components/Films/Films';

function App() {

  const[filmsList, setFilmsList] = useState([])
  const[allFilms, setAllFilms] = useState([])


  useEffect(() => {
    getFilmsData()
  }, [])

  const getFilmsData = async () => {
    try{
      const res = await api.get('/films')
      if(res.status === 200){
        if(res.data.length > 0 ){
          let filmsData = res.data.map((film) => {
            return {
              ...film,
            }
          })
          setAllFilms(filmsData)
          setFilmsList(filmsData)
        }
      }
    } catch(error){
      console.error(error.message)
    }
  }

  return (
    <div>
      <Header />
      <div>
        <Carousel images={[movie1, movie2, movie3]} />
      </div>
      <div className="films">
        <Films films={filmsList} />
      </div>
    </div>
  );
}

export default App;
