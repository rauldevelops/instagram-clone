import fs from 'node:fs/promises'
import path from 'node:path'

export async function getPosts(req, res) {
    const pathJSON = path.join('data','posts.json')
    const data = await fs.readFile(pathJSON, 'utf-8')
    res.json(data)
}