import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import imageUrlBuilder from '@sanity/image-url'
import client from '../client'

interface SanityImageProps {
  width?: number
  height?: number
  image: SanityImageSource
}

function urlFor(source: SanityImageSource) {
  return imageUrlBuilder(client).image(source)
}

const SanityImage: React.FC<SanityImageProps> = props => (
  <img
    src={urlFor(props.image)
      .width(props.width || 50)
      .height(props.height || 50)
      .url()}
  />
)

export default SanityImage
