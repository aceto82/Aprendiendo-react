import { searchMovies } from '../services/movies'
import { useCallback, useMemo, useRef, useState } from 'react'

export function useMovies({ search, sort }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [, setError] = useState(null)
    const previoSearch = useRef(search)

    const getMovies = useCallback(async ({ search }) => {
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
    }, [])

    const sortedMovies = useMemo(() => {
        return sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies
    }, [sort, movies])

    return { movies: sortedMovies, getMovies, loading }
}