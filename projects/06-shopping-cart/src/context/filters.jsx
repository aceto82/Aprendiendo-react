import { createContext, useState } from "react";

// 1. Crear el contexto (El que se debe consumir)
export const FiltersContext = createContext()

// 2. Crear el Provider, para proveer el contexto (El que nos provee de acceso al contexto)
export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })
    // 3. Definir el estado inicial
    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}
