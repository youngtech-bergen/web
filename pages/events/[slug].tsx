import { Layout, RegistrationForm, Error } from '@components'
import css from '../../styles/main.scss'
import { NextPage } from 'next'
import { IEvent } from '@typings/event'
import 'isomorphic-unfetch'

interface EventProps {
  event: IEvent | null
}

const EventPage: NextPage<EventProps> = ({ event }) => {
  if (!event) {
    return <Error content="😳" />
  }

  return (
    <div>
      <Layout siteTitle={`${event.name} 🎙`}>
        <section className={css.hero}>
          <h1>{event.name}</h1>
          <h3 className={css.date}>
            {new Date(event.startDate).toLocaleDateString('no-NB')}
            {' && '}
            {new Date(event.startDate).getHours()}.00-
            {new Date(event.endDate).getHours()}.00
          </h3>
          <p className={css.description}>{event.description}</p>
          <a
            href={`/api/events/${event.slug}/ical`}
            className={css.link}
            download
          >
            <code>Legg til i kalenderen</code>
          </a>
          <div className={css.row}>
            {event.open ? (
              <RegistrationForm
                id={event.slug}
                redirect={`events/${event.slug}/success`}
              />
            ) : (
              <code>Registrering er stengt 🚫</code>
            )}
          </div>
        </section>
      </Layout>
    </div>
  )
}

EventPage.getInitialProps = async function(context) {
  const { slug = '' } = context.query

  // TODO: Fix ugly code
  const protocol =
    process.env.NODE_ENV === 'production' ? 'https://' : 'http://'

  const res = await fetch(
    `${
      context.req ? protocol + context.req.headers.host : ''
    }/api/events/${slug}`
  )
  const event = res.ok ? await res.json() : null

  return {
    event
  }
}
export default EventPage
