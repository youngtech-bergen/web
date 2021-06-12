import Outline from './Outline'
import Wave from './Wave'
import css from './Logo.module.scss'

const Logo = () => (
  <div className={css.logoContainer}>
    <div className={css.wave}>
      <Wave />
    </div>
    <div className={css.outline}>
      <Outline />
    </div>
  </div>
)

export default Logo
