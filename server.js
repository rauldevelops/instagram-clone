import express from 'express'
import cors from 'cors'
import { postsRouter } from './routes/postsRouter.js'

const PORT = 8000

const app = express()

app.use(cors())

app.use(express.json())

app.use(express.static('public'))

app.use('/api', postsRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})