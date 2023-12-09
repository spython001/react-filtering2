import { useEffect, useState } from 'react'
import './App.css'
import Filter from './filter/Filter'
import Movie from './movie/Movie'
import getPopularMovieData  from './movieAPi'
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    const fetchPopular = async () => {
      const movies = await getPopularMovieData();
      setPopular(movies.results);
      setFiltered(movies.results);
    }
    fetchPopular();
  }, [])
  
  
  return (
    <div className='app'>
      <Filter popular={ popular } setFiltered={ setFiltered } activeGenre={ activeGenre } setActiveGenre={ setActiveGenre }/>
      
      <motion.div 
        layout 
        className="popularMovies"
      >
        <AnimatePresence>
          { filtered.map(movie => {
            return <Movie key={ movie.id } movie={ movie }/>
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default App
