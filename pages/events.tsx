import { Blueprint, Circle, Layout } from '../components'
import css from '../styles/main.scss'
import client from '../client'
import groq from 'groq'
import { NextPage } from 'next'
import Link from 'next/link'

interface EventsProps {
  events?: Array<any>
}

const Events: NextPage<EventsProps> = props => {
  const { events = [] } = props

  return (
    <div>
      <Circle />
      <Blueprint />
      <div>
        <Layout siteTitle="Events">
          <section className={css.hero}>
            <h1 className={css.title}>Kommende events</h1>
            {events.map(
              ({ _id, title = '', slug = '', _updatedAt = '' }) =>
                slug && (
                  <li key={_id}>
                    <Link href="/event/[slug]" as={`/event/${slug.current}`}>
                      <a>{title}</a>
                    </Link>
                    ({new Date(_updatedAt).toDateString()})
                  </li>
                )
            )}
          </section>
        </Layout>
      </div>
    </div>
  )
}

const query = groq`*[_type=="event" && publishedAt < now()]|order(publishedAt desc)`

Events.getInitialProps = async () => ({
  events: await client.fetch(query)
})

export default Events
