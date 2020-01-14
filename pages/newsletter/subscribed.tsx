import { Layout, MarkdownBody } from '../../components'
import { subscribed } from '../../content/newsletter'
import css from '../../styles/main.scss'

const NewsletterSubscribed = () => (
  <Layout siteTitle="Subscribed 📭">
    <section className={css.hero}>
      <div className={css.title}>
        <MarkdownBody content={subscribed} />
        <button onClick={e => (window.location.pathname = '/')}>Hjem</button>
      </div>
    </section>
  </Layout>
)

export default NewsletterSubscribed
