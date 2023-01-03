import express from "express"
import { Productos } from "../../contenedores/mongohijos/productosContainer.js"

class mongoProductosRouter extends express.Router {
  constructor(){
    super()
    
    const productos = new Productos()

    this.get("/", async (req, res, next) => {
      try {
        res.json(await productos.getAll())
      } catch (error) {
        console.log(new Error(error))
      }
    })
    this.get("/:id", async (req, res, next) => {
      try {
        res.json(await productos.getById(req.params.id))
      } catch (error) {
        console.log(new Error(error))
      }
    })
    this.post("/", async (req, res, next) => {
      try {
        res.json(await productos.post(req.body))
      } catch (error) {
        console.log(new Error(error))
      }
    })
    this.put("/:id", async (req, res, next) => {
      try {
        res.json(await productos.put(req.params.id , req.body))
      } catch (error) {
        console.log(new Error(error))
      }
    })
    this.delete("/:id", async (req, res, next) => {
      try {
        res.json(await productos.deleteById(req.params.id))
      } catch (error) {
        console.log(new Error(error))
      }
    })
  }
}

export default mongoProductosRouter