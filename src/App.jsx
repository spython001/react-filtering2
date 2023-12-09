import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const fetchPopular = async () => {
      const url = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1';
      const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTYxYTBmODFkNGQzZDYwZDc2YzgzZGNlN2Y3MjI2OSIsInN1YiI6IjY1NzNlNWNiN2EzYzUyMDEyZGZmNzgwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hqhYJ_jroGYJ0ypLY05gWcev7sHdUmXinAyqpNpDjyk'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));
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
