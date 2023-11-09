import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from './hooks/useCatFact'
import './App.css'

function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageURL } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt={`Imagen obtenida de las palabras ${fact}`} />}
    </main>
  )
}

export default App
