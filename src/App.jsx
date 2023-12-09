import { useEffect, useState } from 'react'
import './App.css'
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
      <div className="popularMovies">
        { popular.map(movie => {
          return <Movie key={ movie.id } movie={ movie }/>
        })}
      </div>
    </div>
  )
}

export default App
