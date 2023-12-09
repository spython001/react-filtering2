import './filter.scss'
import { useState, useEffect} from 'react'

export default function Filter() {
  return (
    <div className='filter'>
        <button>All</button>
        <button>Comedy</button>
        <button>Action</button>
    </div>
  )
}
