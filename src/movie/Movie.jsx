/* eslint-disable react/prop-types */
import './movie.scss'
import { motion} from 'framer-motion';

export default function Movie({ movie }) {

  return (
    <motion.div
      animate={{ opacity: 1}} 
      initial={{ opacity: 0}}
      exit={{ opacity: 0 }}
      layout 
      className='movie'
    >
        <h2>{ movie.name }</h2>
        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt='no img'/>

    </motion.div>
  )
}
