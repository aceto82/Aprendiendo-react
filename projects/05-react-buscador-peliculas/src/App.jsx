import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import './App.css'

function App() {

  const { movies } = useMovies()

  return (
    <div className='page'>
      <h1>Buscador de películas</h1>
      <form className='form'>
        <input placeholder='Avengers, Dune, ClockWork' />
        <button type='submit'>Buscar</button>
      </form>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
