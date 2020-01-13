import { Layout, MarkdownBody } from '../components'
import { events } from '../content/events'
import css from '../styles/main.scss'

const Events = () => {
  return (
    <div>
      <Layout siteTitle="Events">
        <section className={css.hero}>
          <MarkdownBody content={events} />
          <div className={css.row}>
            <div className={css.card}>
              <h3>Ser ut som at det er tomt her</h3>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default Events
