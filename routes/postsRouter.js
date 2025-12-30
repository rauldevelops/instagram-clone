import express from 'express'
import { getPosts } from '../controllers/getPosts.js'

export const postsRouter = express.Router()

postsRouter.get('/', getPosts)