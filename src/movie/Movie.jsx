/* eslint-disable react/prop-types */
import './movie.scss'

export default function Movie({ movie }) {

  return (
    <div className='movie'>
        <h2>{ movie.name }</h2>
        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt='no img'/>
    </div>
  )
}
