import http from 'http'

const PORT = 8000

const server = http.createServer((req, res) => {
    console.log('hello from the server')
})

server.listen(PORT, () => {
   
    
})