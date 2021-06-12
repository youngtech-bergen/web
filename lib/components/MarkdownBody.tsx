import ReactMarkdown from 'react-markdown'
import '../../styles/main.scss'

interface MarkdownProps {
  content: string
  className?: any
}

const MarkdownBody: React.FC<MarkdownProps> = (props) => (
  <ReactMarkdown className={props.className}>{props.content}</ReactMarkdown>
)

export default MarkdownBody
