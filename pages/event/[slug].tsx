import client from '../../client'
import groq from 'groq'
import { NextPageContext, NextPage } from 'next'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

import { Layout, MarkdownBody } from '../../components'

interface PostProps {
  name?: string
  speakers?: Array<string>
  categories?: Array<any>
  body?: string
}

const Post: NextPage<PostProps> = props => {
  const { name = 'Name not found', speakers, categories, body } = props

  return (
    <Layout>
      <article>
        <h1>{name}</h1>
        <span>By {name}</span>
        {categories && (
          <ul>
            Categories:
            {categories.map(category => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        )}
        {speakers && (
          <ul>
            Speakers:
            {speakers.map(speaker => (
              <li key={speaker}>{speaker}</li>
            ))}
          </ul>
        )}
        {body && <MarkdownBody content={body} />}
      </article>
    </Layout>
  )
}

const query = groq`*[_type == "event" && slug.current == $slug][0]{
  name,
  "speakers": speakers[]->name,
  "categories": categories[]->title,
  body
}`

Post.getInitialProps = async function(
  context: NextPageContext
): Promise<PostProps> {
  const { slug = '' } = context.query

  return await client.fetch(query, { slug })
}

export default Post
