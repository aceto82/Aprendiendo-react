import { Filters } from "./Filters";
import './Filters.css'

export function Header({changeFilters}) {
    return (
        <header>
            <h1>React Shopping 🛒</h1>
            <Filters onChange={changeFilters}/>
        </header>
    )
}