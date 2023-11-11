import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import './App.css'
import { useCallback, useEffect, useRef, useState } from 'react'
import debounce from 'just-debounce-it'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }
    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  }, [search])
  return { search, updateSearch, error }
}

function App() {
  const [sort, setSort] = useState(false)

  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debouncesGetMovies = useCallback(debounce(search => getMovies({ search }), 300), [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ search })
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncesGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <h1>Buscador de películas</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input style={{
          border: '1px solid transparent',
          borderColor: error ? 'red' : 'transparent'
        }} onChange={handleChange} value={search} name='query' placeholder='Avengers, Dune, ClockWork' />
        <input type='checkbox' onChange={handleSort} checked={sort} />
        <button type='submit'>Buscar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
