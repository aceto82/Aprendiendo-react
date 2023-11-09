import { useCatImage } from '../hooks/useCatImage'

export function Otro () {
  const { imageUrl } = useCatImage({ fact: 'great' })
  
  return (
    <>
      {imageUrl && <img src={imageUrl} />}
    </>
  )
}