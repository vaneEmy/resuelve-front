import './App.css';

import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header'

import movie1 from './assets/images/movie1.jpeg'
import movie2 from './assets/images/movie2.jpeg'
import movie3 from './assets/images/movie3.jpeg'

function App() {
  return (
    <div>
      <Header />
      <div>
        <Carousel images={[movie1, movie2, movie3]} />
      </div>
      
    </div>
  );
}

export default App;
