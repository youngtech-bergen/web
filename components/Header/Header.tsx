import Link from 'next/link'
import Logo from '../Logo'
import css from './Header.module.scss'
import { useState, useEffect } from 'react'
import { MenuModal } from '..'
import { Menu } from 'react-feather'

const Header: React.FC = () => {
  const [flipped, setFlipped] = useState<boolean>(false)
  const [showMenu, setShowMenu] = useState<boolean>(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFlipped(!flipped)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [flipped])

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header>
      <MenuModal show={showMenu} setShow={setShowMenu} />
      <nav role="navigation" aria-label="main navigation">
        <div onClick={toggleMenu}>
          <Menu className={css.burger} />
        </div>
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
              <Link href="/" prefetch>
                <a className={css.link}>Hjem</a>
              </Link>
              <Link href="/events" prefetch>
                <a className={css.link}>Events</a>
              </Link>
              <Link href="/about" prefetch>
                <a className={css.link}>Om oss</a>
              </Link>
              <Link href="/membership" prefetch>
                <a className={css.link}>Medlemskap</a>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
