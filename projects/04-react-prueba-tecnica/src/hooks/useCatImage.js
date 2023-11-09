import { useEffect, useState } from "react"

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage({ fact }) {
    const [imageURL, setImageURL] = useState()

    // Para recuperar la imagen cada vez que se tiene una cita nueva
    useEffect(() => {
        if (!fact) return

        const threeFirstWord = fact.split(' ', 1).join(' ')
        
        const url = `${CAT_PREFIX_IMAGE_URL}/cat/says/${threeFirstWord}?size=50&color=red&json=false`
        setImageURL(url)        

    }, [fact])
    
    return { imageURL }
}