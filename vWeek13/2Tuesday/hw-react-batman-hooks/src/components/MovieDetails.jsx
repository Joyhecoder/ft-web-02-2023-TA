import React from 'react'

const MovieDetails = ({details}) => {
  console.log(details)
  return (
    <>
    {details.Response == 'False' ? <> </>
    :
    
      <div className="rounded overflow-hidden shadow-lg flex">
        <img className="w-50" src={details.Poster} alt="" />
        <div className='content'>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{details.Title}</div>
            <p className="text-gray-700 text-base">
              {details.Plot}
            </p>
            <hr  />
            <hr  />
            <hr  />
            <p className="text-gray-700 text-base">
              <h3 className="text-m font-bold font-mono">
                Director: {details.Director}
              </h3>
              <h3 className="text-m font-semibold font-mono">
                Actors: {details.Actors}
              </h3>
              <h3 className="text-m font-semibold font-mono">
                Run Time: {details.Runtime}
              </h3>
            </p>
          </div>
        
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{details.Awards}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{details.Genre}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{details.Language}</span>
          </div>
        </div>
      </div>
}
    </>
  )
}

export default MovieDetails
