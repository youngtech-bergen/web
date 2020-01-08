import { Layout, MarkdownBody } from '../components'
import css from '../styles/main.scss'
import { title, events, about, membership } from '../content/index'
import Link from 'next/link'

const content = {
  title: title,
  events: events,
  about: about,
  membership: membership
}

const Home = () => (
  <div>
    <Layout siteTitle="YoungTech Bergen">
      <section className={css.hero}>
        <MarkdownBody className={css.title} content={content['title']} />
        <div className={css.row}>
          {['events', 'about', 'membership'].map(card => (
            <Link href={`/${card}`}>
              <a className={css.card} key={card}>
                <MarkdownBody content={content[card]} />
              </a>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  </div>
)

export default Home
