import { Layout, MarkdownBody } from '../components'
import { events } from '../content/events'
import css from '../styles/main.scss'

const Events = () => {
  return (
    <div>
      <Layout siteTitle="Events">
        <section className={css.hero}>
          <MarkdownBody content={events} />
        </section>
      </Layout>
    </div>
  )
}

export default Events
