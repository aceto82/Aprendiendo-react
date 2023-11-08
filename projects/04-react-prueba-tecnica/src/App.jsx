import { useEffect } from "react"
import { useState } from "react"
import './App.css'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWords}?size=50&color=red&json=true`

function App() {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()

  // Para recuperar la cita al cargar la página
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
        // Atributo url ya no existe en el JSON

        // fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
        //   .then(res => res.json())
        //   .then(response => {
        //     const  url  = response            
        //     console.log(url)
        //     setImageURL(url)
        //   })

      })
  }, [])

  // Para recuperar la imagen cada vez que se tiene una cita nueva
  useEffect(() => {
    if (!fact) return

    const threeFirstWord = fact.split(' ', 1).join(' ')
    console.log(threeFirstWord)

    const url = `${CAT_PREFIX_IMAGE_URL}/cat/says/${threeFirstWord}?size=50&color=red&json=false`
    setImageURL(url)

  }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt={`Imagen obtenida de las palabras ${fact}`} />}
    </main>
  )
}

export default App
