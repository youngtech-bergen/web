import { Blueprint, Circle, Layout } from '../components'
import css from '../styles/main.scss'

const About = () => (
  <div>
    <Circle />
    <Blueprint />
    <div>
      <Layout siteTitle="Om oss">
        <section className={css.hero}>
          <h1 className={css.title}>Om oss</h1>
          <p className={css.description}>Kommer snart.</p>
        </section>
      </Layout>
    </div>
  </div>
)

export default About
