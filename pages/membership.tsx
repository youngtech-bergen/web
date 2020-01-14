import { Layout, MarkdownBody, MailForm } from '../components'
import { membership } from '../content/membership'
import css from '../styles/main.scss'

const Membership = () => (
  <div>
    <Layout siteTitle="Medlemskap 🤝">
      <section className={css.hero}>
        <MarkdownBody content={membership} />
        <MailForm redirect="/newsletter/subscribed" />
      </section>
    </Layout>
  </div>
)

export default Membership
