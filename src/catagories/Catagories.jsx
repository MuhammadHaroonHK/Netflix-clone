import React, { useEffect, useState } from 'react'
import cards_data from '../assets/cards/Cards_data.js'
import './Catagories.css'

const Catagories = ({Catagorie, changeCateg}) => {

  const [apiData, setApiData] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGI1MzRiYzJkMDgyYThkZjU2YjUyMzJhZjhiZTY4ZiIsIm5iZiI6MTczNjczOTY4My40MzcsInN1YiI6IjY3ODQ4YjYzNGJmZDdlZjU1ZGJiMTczZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B30ebC7qeQRgIo1884ll6xkEuJ_GNnyCBWOLYjXrIPo'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${changeCateg ? changeCateg : "now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
  },[])

  
  return (
    <div>
    <div className='cards'>
                  <h2>{Catagorie?Catagorie:"Populat on Netflix"}</h2>
                </div>
                <div className='card'>
                  {apiData.map((data) => {
                    return <div>
                      <img src={`https://image.tmdb.org/t/p/w500` +data.backdrop_path} alt="" />
                      <p>{data.title}</p>
                    </div>
                  })}
                </div>
                </div>
  )
}

export default Catagories