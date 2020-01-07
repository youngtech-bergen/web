import Link from 'next/link'
import Logo from '../Logo'
import css from './Header.module.scss'

const Header: React.FC = () => (
  <nav role="navigation" aria-label="main navigation">
    <ul>
      <li>
        <a href="/" className={css.logo}>
          <Logo />
        </a>
      </li>
      <li></li>
      <li>
        <div className={css.links}>
          <a href="/" className={css.link}>
            Hjem
          </a>
          <a href="/events" className={css.link}>
            Events
          </a>
          <a href="/about" className={css.link}>
            Om oss
          </a>
          <a href="/membership" className={css.link}>
            Medlemskap
          </a>
        </div>
      </li>
    </ul>
  </nav>
)

export default Header
