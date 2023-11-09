import responseMovies from './mocks/with-results.json'
import withOutResults from './mocks/no-results.json'
import './App.css'

function App() {

  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

  return (
    <div className='page'>
      <h1>Buscador de películas</h1>
      <form className='form'>
        <input placeholder='Avengers, Dune, ClockWork' />
        <button type='submit'>Buscar</button>
      </form>

      <main>
        {
          hasMovies ?
            (
              <ul>
                {
                  movies.map(movie => (
                    <li key={movie.imdbID}>
                      <h3>{movie.Title}</h3>
                      <p>{movie.Year}</p>
                      <img src={movie.Poster} alt={movie.Title} />
                    </li>
                  ))
                }
              </ul>
            )
            :
            (
              <p>No se encontraron peliculas para esta búsqueda</p>
            )
        }
      </main>
    </div>
  )
}

export default App
