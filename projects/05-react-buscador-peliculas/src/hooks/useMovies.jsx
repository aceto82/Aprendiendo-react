import { searchMovies } from '../services/movies'
import { useState } from 'react'

export function useMovies({ search }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [, setError] = useState(null)

    const getMovies = async () => {
        try {
            setLoading(true)
            setError(null)

            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        }
        catch (e) {
            setError(e.message)
        }
        finally {
            setLoading(false)
        }
    }

    return { movies, getMovies, loading }
}