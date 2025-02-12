import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source?: SanityImageSource) => {
  if (!source) {
    // Return a placeholder image or an empty string if no source is provided
    return {
      url: () => "/placeholder.png" // Use your desired placeholder image here
    }
  }
  return builder.image(source)
}
