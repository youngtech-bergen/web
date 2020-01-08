import ReactMarkdown from 'react-markdown'
import htmlParser from 'react-markdown/plugins/html-parser'
import '../styles/main.scss'

interface MarkdownProps {
  content: string
  className?: any
}

const parseHtml = htmlParser({
  isValidNode: node => node.type !== 'script'
})

const MarkdownBody: React.FC<MarkdownProps> = props => (
  <ReactMarkdown
    className={props.className}
    source={props.content}
    escapeHtml={false}
    astPlugins={[parseHtml]}
  />
)

export default MarkdownBody
