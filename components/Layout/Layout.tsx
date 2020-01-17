import { ISiteProps } from '../../typings/site'
import css from './Layout.module.scss'
import { Footer, Meta, Header, Circle, Blueprint } from '../'

const Layout: React.FC<ISiteProps> = props => (
  <div className={css.container}>
    <Circle />
    <Blueprint />
    <section className={css.layout}>
      <Meta
        siteTitle={props.siteTitle}
        siteDescription={props.siteDescription}
      />
      <Header />
      <div className={css.content}>{props.children}</div>
    </section>
    <Footer />
  </div>
)

export default Layout
