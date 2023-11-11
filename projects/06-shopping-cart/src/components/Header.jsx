import { Filters } from "./Filters";
import './Filters.css'

export function Header() {
    return (
        <header>
            <h1>React Shopping 🛒</h1>
            <Filters/>
        </header>
    )
}