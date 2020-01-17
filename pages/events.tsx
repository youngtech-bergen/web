import { Layout, MarkdownBody } from '../components'
import { events } from '../content/events'
import css from '../styles/main.scss'
import { NextPage } from 'next'
import { IEvent } from '../typings/event'
import 'isomorphic-unfetch'

interface EventsProps {
  events: Array<IEvent>
}

const Events: NextPage<EventsProps> = props => {
  return (
    <div>
      <Layout siteTitle="Events 🎫">
        <section className={css.hero}>
          <MarkdownBody content={events} />
          <div className={css.row}>
            {props.events.map(event => (
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
            ))}
          </div>
        </section>
      </Layout>
    </div>
  )
}

Events.getInitialProps = async function(context) {
  // TODO: Fix ugly code
  const protocol =
    process.env.NODE_ENV === 'production' ? 'https://' : 'http://'

  const res = await fetch(
    `${context.req ? protocol + context.req.headers.host : ''}/api/events`
  )
  const events = await res.json()

  return {
    events
  }
}

export default Events
