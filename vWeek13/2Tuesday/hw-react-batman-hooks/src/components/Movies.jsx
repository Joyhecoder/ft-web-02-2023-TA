import React, {useState} from 'react'

const Movies = ({allMovies}) => {
  const [id, setId] = useState('')

  const handleClick = (imdbID) => {
    setId(imdbID)
  }

  const fetchMovieDetails = async (id) => {
    
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline font-mono">
      Hello world!
      </h1>
 {/* navbar section */}
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-amber-300 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white font-mono text-xl"
              href="#"
            >
              Movie App
            </a>
          </div>
        </div>
      </nav>

      {/* main section */}
      <div className="main-section flex flex-row flex-wrap justify-around">
        {allMovies.map(movie => {
          return (
            <div key={movie.imdbID} className="rounded overflow-hidden shadow-lg basis-1/4 mx-3 my-2" onClick={()=>handleClick(movie.imdbID)}>
                <img class="w-full" src={movie.Poster} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{movie.Title}</div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Year: {movie.Year}</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Type: {movie.Type}</span>
                </div>
            </div>
          )
        })}
      </div>
      

    </>
  )
}

export default Movies
