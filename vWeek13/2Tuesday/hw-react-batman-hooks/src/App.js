import React, {useState, useEffect} from 'react'
import Movies from './components/Movies'
import api from './api'



// make your api call here
const App = () => {
  const [movieData, setMovieData] = useState([])

//https://www.omdbapi.com/?i=tt3896198&apikey=530572a3

  useEffect(() => {
   const initalFetchMovieData = async () => {
    try {
      let response = await fetch(`http://www.omdbapi.com/?s=batman&apikey=${api}`)
      let data = await response.json()
      // console.log(data)
      setMovieData(data.Search)
      console.log(movieData)
    } catch (error) {
      console.log(error)
    }
    
   }
   initalFetchMovieData()
 
  }, [])
  
  return (
    <>
      <Movies key={1} allMovies = {movieData} />
    </>
  )
}

export default App
