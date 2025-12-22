import http from 'http'
import path from 'node:path'
import fs from 'node:fs/promises'
import { serveStatic } from './utils/serveStatic.js'
import { handleGet } from './handlers/routeHandlers.js'

const PORT = 8000

const __dirname = import.meta.dirname

console.log('__dirname:', __dirname)

const server = http.createServer( async (req, res) => {
    console.log (req.method, req.url)
    if (req.url === '/api') {
        if (req.method === 'GET') {
            return await handleGet(res)
        }
    }
        else if (req.url === '/') {
        serveStatic(req, res, __dirname)
    }
})

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})