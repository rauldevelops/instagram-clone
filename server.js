import express from 'express'

const PORT = 8000

const app = express()

app.use( express.static('public'))

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})