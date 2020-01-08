import { Layout, MarkdownBody } from '../components'
import { membership } from '../content/membership'
import css from '../styles/main.scss'

const Membership = () => (
  <div>
    <Layout siteTitle="Medlemskap">
      <section className={css.hero}>
        <MarkdownBody content={membership} />
      </section>
    </Layout>
  </div>
)

export default Membership
