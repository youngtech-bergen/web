import { Blueprint, Circle, Layout } from '../components'
import css from '../styles/main.scss'

const Membership = () => (
  <div>
    <Circle />
    <Blueprint />
    <div>
      <Layout siteTitle="Medlemskap">
        <section className={css.hero}>
          <h1 className={css.title}>Medlemskap</h1>
          <p className={css.description}>Kommer snart.</p>
        </section>
      </Layout>
    </div>
  </div>
)

export default Membership
