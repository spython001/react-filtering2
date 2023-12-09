import { useEffect } from 'react'
import './App.css'
import getPopularMovieData  from './movieAPi'

function App() {
  useEffect(() => {
    const fetchPopular = async () => {
      const data = await getPopularMovieData();
      console.log(data)
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
