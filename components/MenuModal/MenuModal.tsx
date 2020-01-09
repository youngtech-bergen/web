import React from 'react'
import css from './MenuModal.module.scss'
import Link from 'next/link'
import { Blueprint } from '..'
import { X } from 'react-feather'

interface MenuModalProps {
  show: boolean
  setShow: any
}

const MenuModal: React.FC<MenuModalProps> = ({ show, setShow, children }) => {
  return show ? (
    <div className={css.container}>
      <Blueprint />
      <div className={css.close} onClick={() => setShow(false)}>
        <X />
      </div>
      <ul className={css.navigation} onClick={() => setShow(false)}>
        <li>
          <Link href="/">
            <h1>Hjem</h1>
          </Link>
        </li>
        <li>
          <Link href="/events">
            <h1>Events</h1>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <h1>Om oss</h1>
          </Link>
        </li>
        <li>
          <Link href="/membership">
            <h1>Medlemskap</h1>
          </Link>
        </li>
      </ul>
    </div>
  ) : null
}

export default MenuModal
