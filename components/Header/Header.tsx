import Link from 'next/link'
import Logo from '../Logo'
import css from './Header.module.scss'

const Header: React.FC = () => (
  <nav role="navigation" aria-label="main navigation">
    <ul>
      <li>
        <Link href="/">
          <a className={css.logo}>
            <Logo />
          </a>
        </Link>
      </li>
      <li></li>
      <li>
        <div className={css.links}>
          <Link href="/">
            <a className={css.link}>Hjem</a>
          </Link>
          <Link href="/events">
            <a className={css.link}>Events</a>
          </Link>
          <Link href="/about">
            <a className={css.link}>Om oss</a>
          </Link>
          <Link href="/membership">
            <a className={css.link}>Medlemskap</a>
          </Link>
        </div>
      </li>
    </ul>
  </nav>
)

export default Header
