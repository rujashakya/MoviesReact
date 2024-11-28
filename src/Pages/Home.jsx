import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    let {movies,series} = useSelector(store=> store.movieStore)
    console.log("Movies", movies, "Series", series)

    const movies_url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const series_url = 'https://imdb-top-100-movies.p.rapidapi.com/series/';


const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '1b3d34187dmsh2f217f4089fb12fp10893cjsn6e86a92f071c',
    'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

const dispatch = useDispatch()

useEffect(()=> {

    if(movies_url.length <=0){
        fetch(movies_url,options)
        .then(response=>response.json())
        .then(data=>dispatch({type:"LOAD_MOVIES",payload: data}))
    }
   
    if(series_url.length <=0){

    fetch(series_url,options)
    .then(response=>response.json())
    .then(data=>dispatch({type:"LOAD_Series",payload: data}))
}
},[])

  return (
    <div>Home</div>
  )
}

export default Home