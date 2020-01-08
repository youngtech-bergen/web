import { Layout, MarkdownBody } from '../components'
import { about } from '../content/about'
import css from '../styles/main.scss'

const About = () => (
  <div>
    <Layout siteTitle="Om oss">
      <section className={css.hero}>
        <MarkdownBody content={about} />
      </section>
    </Layout>
  </div>
)

export default About
