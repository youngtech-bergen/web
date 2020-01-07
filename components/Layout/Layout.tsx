import Header from '../Header'
import Meta from '../Meta'
import { SiteProps } from '../../typings/site'
import css from './Layout.module.scss'

const Layout: React.FC<SiteProps> = props => (
  <section className={css.layout}>
    <Meta siteTitle={props.siteTitle} siteDescription={props.siteDescription} />
    <Header />
    <div className={css.content}>{props.children}</div>
  </section>
)

export default Layout
