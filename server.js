import http from 'http'

const PORT = 5500

const __dirname = import.meta.dirname

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        serveStatic(req, res, __dirname)
    }
})

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})