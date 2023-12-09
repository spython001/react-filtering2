import { useEffect, useState } from 'react'
import './App.css'
import Filter from './filter/Filter'
import Movie from './movie/Movie'
import getPopularMovieData  from './movieAPi'

function App() {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    const fetchPopular = async () => {
      const movies = await getPopularMovieData();
      setPopular(movies.results)
    }
    fetchPopular();
  }, [])
  
  
  return (
    <div className='app'>
      <Filter/>
      <div className="popularMovies">
        { popular.map(movie => {
          return <Movie key={ movie.id } movie={ movie }/>
        })}
      </div>
    </div>
  )
}

export default App
