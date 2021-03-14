import React, {useState, useEffect } from 'react';

import s from './App.module.scss';

import api from './utils/api'
import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import movie1 from './assets/images/movie1.jpeg'
import movie2 from './assets/images/movie2.jpeg'
import movie3 from './assets/images/movie3.jpeg'
import Films from './components/Films/Films';

function App() {

  const[filmsList, setFilmsList] = useState([])
  // const[allFilms, setAllFilms] = useState([])


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
      <div className={s.films}>
        <Films films={filmsList} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
