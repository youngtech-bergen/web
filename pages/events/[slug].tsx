import { Layout, RegistrationForm } from '../../components'
import { useRouter } from 'next/router'
import css from '../../styles/main.scss'
import { NextPage } from 'next'
import { Event } from '../../typings'
import 'isomorphic-unfetch'

interface EventProps {
  event: any
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

  const res = await fetch(`${process.env.host}/api/events/${slug}`)
  const data = await res.json()

  return {
    event: data
  }
}
export default EventPage
