import * as sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '0iiz4iwe',
  dataset: 'production',
  useCdn: true
})
