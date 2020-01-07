import ReactMarkdown from 'react-markdown'
import htmlParser from 'react-markdown/plugins/html-parser'

interface MarkdownProps {
  content: string
}

const parseHtml = htmlParser({
  isValidNode: node => node.type !== 'script'
})

const MarkdownBody: React.FC<MarkdownProps> = props => (
  <ReactMarkdown
    source={props.content}
    escapeHtml={false}
    astPlugins={[parseHtml]}
  />
)

export default MarkdownBody
