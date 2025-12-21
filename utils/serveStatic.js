import path from 'node:path'
import fs from 'node:fs/promises'
import { getContentType } from './getContentType.js'
import { sendResponse } from './sendResponse.js'

export async function serveStatic(req, res, baseDir) {
    
    const publicDir = path.join(baseDir, 'public')
    
    let filePath = path.join(
        publicDir, 
        req.url === '/' ? 'index.html' : req.url
    )
    
    const ext = path.extname(filePath)
    const contentType = getContentType(ext)

    try {
        const content = await fs.readFile(filePath)
        sendResponse(res, 200, contentType, content)
    } catch(err) {
        console.error(`Error serving file ${filePath}:`, err)
        sendResponse(res, 404, 'text/plain', '404 Not Found')
    }
}