import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const users = []
app.post('/users',async(req,res) => {
    await prisma.User.create({
        data:{
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            posts: req.body.posts
        }
    })
    res.status(201).json(req.body)
})

app.get('/users',(req,res) => {
    res.status(200).json(users)

    res.send('ok deu bom')
})
app.listen(3000)
