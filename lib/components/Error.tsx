import Layout from './Layout'
import css from '../../styles/main.scss'

interface ErrorProps {
  content: string
}

const Error = ({ content }: ErrorProps) => (
  <Layout>
    <div className={css.hero}>
      <h1>
        <code>{content}</code>
      </h1>
    </div>
  </Layout>
)

export default Error
