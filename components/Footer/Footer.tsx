import css from './Footer.module.scss'
import { DNBLogo } from './logos'

const logos = {
  DNB: <DNBLogo />
}

const companies = ['DNB']

const Footer: React.FC = () => (
  <footer role="navigation" aria-label="footer navigation">
    <div className={css.content}>
      <div className={css.github}>
        <ul>
          <li>
            <code>Make a change</code>
          </li>
          <li>
            <a href="https://github.com/youngtech-bergen">
              <code>GitHub</code>
            </a>
          </li>
        </ul>
      </div>
      <div className={css.sponsors}>
        <h5>Våre sponsorer</h5>
        <div className={css.logos}>
          {companies.map(company => logos[company])}
        </div>
      </div>
      <div className={css.contact}>
        <ul>
          <li>
            <code>Kontakt oss</code>
          </li>
          <li>
            <a href="mailto:hello@young.tech">
              <code>hello@young.tech</code>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
