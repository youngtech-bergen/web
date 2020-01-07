import Head from 'next/head'
import { Header, Circle, Blueprint, Layout } from '../components'
import css from '../styles/main.scss'

const Home = () => (
  <div>
    <Circle />
    <Blueprint />
    <div>
      <Layout siteTitle="YoungTech Bergen">
        <section className={css.hero}>
          <h1 className={css.title}>Velkommen til YoungTech Bergen</h1>
          <p className={css.description}>Her kommer en introduksjon.</p>
          <div className={css.row}>
            <a href="/events" className={css.card}>
              <h3>Events &rarr;</h3>
              <p>Få en oversikt over kommende hendelser.</p>
            </a>
            <a href="/about" className={css.card}>
              <h3>Om oss &rarr;</h3>
              <p>Lær mer om hvem vi er og hva vi gjør på.</p>
            </a>
            <a href="/membership" className={css.card}>
              <h3>Medlemskap &rarr;</h3>
              <p>Lær mer om det å være medlem i YoungTech.</p>
            </a>
          </div>
        </section>
      </Layout>
    </div>
  </div>
)

export default Home
