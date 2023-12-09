/* eslint-disable react/prop-types */
import './filter.scss'
import { useEffect} from 'react'

export default function Filter({ setActiveGenre, activeGenre, setFiltered, popular }) {

  useEffect(()=>{
    if(activeGenre === 0){
        setFiltered(popular);
        return
    }
    
    const filtered = popular.filter((movie) => 
    movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div className='filter'>
        <button
          onClick ={() =>setActiveGenre(0)}
          className={ activeGenre === 0 ? "active" : ''}
        >
            All
        </button>
        
        <button
          onClick ={() =>setActiveGenre(35)}
          className={ activeGenre === 35 ? "active" : ''}
        >
            Comedy
        </button>
        
        <button
          onClick ={()=>setActiveGenre(80)}
          className={ activeGenre === 80 ? "active" : ''}
        >
            Crime
        </button>
    </div>
  )
}
