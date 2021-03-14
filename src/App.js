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
import AutoCompleteText from './components/AutoCompleteText/AutoCompleteText'

function App() {

  const[filmsList, setFilmsList] = useState([])
  const[suggestions, setSuggestions] = useState([])
  const[newFilmsList, setNewFilmsList] = useState([])
  const[text, setText] = useState("")

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
          setNewFilmsList(filmsData)
          setFilmsList(filmsData)
        }
      }
    } catch(error){
      console.error(error.message)
    }
  }

  const onChangeAutoCompleteText = (e) =>{
    console.log(e.target.value)
    const value = e.target.value.toLowerCase();
    let suggestions = value.length === 0 ? [] : filmsList.filter(f => f.title.toLowerCase().includes(value))


    // if(value.length > 0){
    //   const regex = new RegExp(`^${value}`, 'i')
    //   suggestions = filmsList.sort((a, b) =>{
    //     if(a.title > b.title){
    //       return -1
    //     }
    //     if(b.title > a.title){
    //       return 1
    //     }
    //     return 0;
    //   }).filter(v => regex.test(v.title))
    //   console.log("----- SUGGESTIONS -----")
    //   console.log(suggestions)
    // }
    setText(value)
    setSuggestions(suggestions)
  }

  const suggestionSelected = (value) =>{
    console.log("--- SELECCIONE UN DATO :d")
    console.log(value)
    setText(value.title)
    setSuggestions([])
  }
  // const renderSuggestions = () => {
  //   if(suggestions.length === 0){
  //     return null
  //   }
  // }

  return (
    <div>
      <Header />
      <div>
        <Carousel images={[movie1, movie2, movie3]} />
      </div>
      <AutoCompleteText items={suggestions} onChangeText={onChangeAutoCompleteText} onSelectSuggestion={suggestionSelected} text={text}/>
      <div className={s.films}>
        <Films films={filmsList} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
