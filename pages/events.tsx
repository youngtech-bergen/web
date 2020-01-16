import { Layout, MarkdownBody } from '../components'
import { events } from '../content/events'
import css from '../styles/main.scss'
import { NextPage } from 'next'
import { Event } from '../typings/event'
import 'isomorphic-unfetch'

interface EventsProps {
  events: Array<Event>
}

const dateOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
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
  const res = await fetch(`${process.env.host}/api/events`)
  const data = await res.json()

  return {
    events: data
  }
}

export default Events
