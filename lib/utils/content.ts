import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const contentDir = join(process.cwd(), 'content')

export function getContentSlugs() {
  return fs.readdirSync(contentDir)
}
