import { useId, useState } from 'react'
// import { useFilters } from '../hooks/useFilters.js'
import './Filters.css'

export function Filters ({onChange}) {
  // const { filters, setFilters } = useFilters()

  //const minPriceFilterId = useId()
  //const categoryFilterId = useId()

  const [minPrice, setMinPrice] = useState(0)

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    onChange(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
    // setFilters(prevState => ({
    //   ...prevState,
    //   minPrice: event.target.value
    // }))
  }

  const handleChangeCategory = (event) => {
    // ⬇️ ESTO HUELE MAL
    // estamos pasando la función de actualizar estado
    // nativa de React a un componente hijo
    // setFilters(prevState => ({
    //   ...prevState,
    //   category: event.target.value
    // }))
    onChange(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>

      <div>
        <label htmlFor={minPrice}>Precio a partir de:</label>
        <input
          type='range'
          id='price'
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}          
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor='category'>Categoría</label>
        <select id='category' onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>

    </section>

  )
}
