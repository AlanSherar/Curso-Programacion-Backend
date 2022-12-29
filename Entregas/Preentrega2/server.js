import express from 'express'
import { Router } from "express"

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const router = new Router()

const server = app.listen(PORT, () => {
  console.log("Por qué no arranca??")
})
server.on('error', err => {console.log(err)})