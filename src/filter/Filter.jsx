/* eslint-disable react/prop-types */
import './filter.scss'
import { useState, useEffect} from 'react'

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
        >
            All
        </button>
        
        <button
          onClick ={() =>setActiveGenre(35)}
        >
            Comedy
        </button>
        
        <button
          onClick ={()=>setActiveGenre(80)}
        >
            Crime
        </button>
    </div>
  )
}
