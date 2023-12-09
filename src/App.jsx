import { useEffect, useState } from 'react'
import './App.css'
import getPopularMovieData  from './movieAPi'

function App() {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    const fetchPopular = async () => {
      const data = await getPopularMovieData();
      setPopular(data)
    }
    fetchPopular();
  }, [])
  
  
  return (
    <div className='app'>
      react
    </div>
  )
}

export default App
