import { searchMovies } from '../services/movies'
import { useMemo, useRef, useState } from 'react'

export function useMovies({ search, sort }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [, setError] = useState(null)
    const previoSearch = useRef(search)

    const getMovies = async () => {
        if (search === previoSearch.current) return
        try {
            setLoading(true)
            setError(null)
            previoSearch.current = search
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

    const sortedMovies = useMemo(() => {  
     return sort
        ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
        : movies
    }, [sort, movies])

    return { movies: sortedMovies, getMovies, loading }
}