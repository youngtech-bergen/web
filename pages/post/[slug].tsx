import client from '../../client'
import groq from 'groq'
import { NextPageContext, NextPage } from 'next'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

import { Layout, MarkdownBody } from '../../components'

interface PostProps {
  title?: string
  name?: string
  categories?: Array<any>
  authorImage?: SanityImageSource
  body?: string
}

const Post: NextPage<PostProps> = props => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    body
  } = props

  return (
    <Layout>
      <article>
        <h1>{title}</h1>
        <span>By {name}</span>
        {categories && (
          <ul>
            Posted in
            {categories.map(category => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        )}
        {authorImage && <div></div>}
        {body && <MarkdownBody content={body} />}
      </article>
    </Layout>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`

Post.getInitialProps = async function(
  context: NextPageContext
): Promise<PostProps> {
  const { slug = '' } = context.query

  return await client.fetch(query, { slug })
}

export default Post
