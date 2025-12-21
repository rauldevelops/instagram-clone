import http from 'http'

const PORT = 8000

const server = http.createServer((req, res) => {
    
    if (req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello, World!</h1>')
    }
})

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})