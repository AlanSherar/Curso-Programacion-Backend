import express from 'express'
import {fireCarritosRouter} from "./routers/firebase/carritos.js"
import {fireProductosRouter} from "./routers/firebase/productos.js"
import mongoCarritosRouter from "./routers/mongo/carritos.js"
import mongoProductosRouter from "./routers/mongo/productos.js"

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/fire/carritos", new fireCarritosRouter())
app.use("/fire/productos", new fireProductosRouter())
app.use("/mongodb/carritos", new mongoCarritosRouter()) 
app.use("/mongodb/productos", new mongoProductosRouter())

const server = app.listen(PORT, () => {
  console.log("Arranca por ahora jeje")
})
server.on('error', err => {console.log(err)})