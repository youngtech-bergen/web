import remark from 'remark'
import html from 'remark-html'
import vfile from 'vfile'

export default async function markdownToHtml(
  markdown: vfile.VFileCompatible
): Promise<string> {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
