import { Layout, MarkdownBody } from '@components'
import css from '../../../styles/main.scss'
import { registered } from '@content/events'

const SuccessPage = () => (
  <Layout siteTitle="Registrert 📭">
    <section className={css.hero}>
      <div className={css.title}>
        <MarkdownBody content={registered} />
        <button onClick={() => (window.location.pathname = '/')}>Hjem</button>
      </div>
    </section>
  </Layout>
)

export default SuccessPage
