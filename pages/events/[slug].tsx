import { Layout, RegistrationForm } from '../../components'
import css from '../../styles/main.scss'
import { NextPage } from 'next'
import { Event } from '../../typings/event'
import 'isomorphic-unfetch'

interface EventProps {
  event: Event
}

const EventPage: NextPage<EventProps> = props => {
  return (
    <div>
      <Layout siteTitle={`${props.event.name} 🎙`}>
        <section className={css.event}>
          <h1>{props.event.name}</h1>
          <h3 className={css.date}>
            {new Date(props.event.startDate).toLocaleDateString('no-NB')}
            {' && '}
            {new Date(props.event.startDate).getHours()}.00-
            {new Date(props.event.endDate).getHours()}.00
          </h3>
          <p>{props.event.description}</p>
          <RegistrationForm
            id={props.event.slug}
            redirect={`events/${props.event.slug}/success`}
          />
        </section>
      </Layout>
    </div>
  )
}

EventPage.getInitialProps = async function(context) {
  const { slug = '' } = context.query

  if (!process.env.host && process.env.NODE_ENV !== 'production') {
    process.env.host = 'http://localhost:3000'
  }

  const res = await fetch(`${process.env.host}/api/events/${slug}`)
  const event = await res.json()

  return {
    event
  }
}
export default EventPage
