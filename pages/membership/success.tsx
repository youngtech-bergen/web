import { Layout, MarkdownBody } from '../../components'
import { success } from '../../content/membership'
import css from '../../styles/main.scss'
const MembershipSuccess = () => (
  <Layout siteTitle="Newsletter Success">
    <section className={css.hero}>
      <div className={css.title}>
        <MarkdownBody content={success} />
        <button onClick={e => (window.location.pathname = '/')}>Hjem</button>
      </div>
    </section>
  </Layout>
)

export default MembershipSuccess
