import { Layout, MarkdownBody, Error } from '@components'
import { events as eventsContent, empty } from '@content/events'
import css from '../../styles/main.scss'
import { NextPage } from 'next'
import { IEvent } from '@typings/event'
import 'isomorphic-unfetch'

interface EventsProps {
  events: IEvent[] | null
}

const Events: NextPage<EventsProps> = ({ events }) => {
  if (!events) {
    return <Error content="😳" />
  }

  return (
    <div>
      <Layout siteTitle="Events 🎫">
        <section className={css.hero}>
          <MarkdownBody content={eventsContent} />
          <div className={css.row}>
            {events.length !== 0 ? (
              events.map(event => (
                <a
                  href={`/events/${event.slug}`}
                  className={css.card}
                  key={event._id}
                  style={{ width: '75%' }}
                >
                  <h2>{event.name}</h2>
                  <h3>
                    {new Date(event.startDate).toLocaleDateString('no-NB')}
                    {' && '}
                    {new Date(event.startDate).getHours()}.00-
                    {new Date(event.endDate).getHours()}.00
                  </h3>

                  <p>{event.description}</p>
                  <br />
                  <h3>Påmelding &rarr;</h3>
                </a>
              ))
            ) : (
              <MarkdownBody content={empty} />
            )}
          </div>
        </section>
      </Layout>
    </div>
  )
}

Events.getInitialProps = async function(context): Promise<EventsProps> {
  // TODO: Fix ugly code
  const protocol =
    process.env.NODE_ENV === 'production' ? 'https://' : 'http://'

  const res = await fetch(
    `${context.req ? protocol + context.req.headers.host : ''}/api/events`
  )

  const events: IEvent[] = res.ok ? await res.json() : null

  return {
    events
  }
}

export default Events
