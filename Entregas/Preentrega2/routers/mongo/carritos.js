import express from "express"
import { Carritos } from "../../contenedores/mongohijos/carritosContainer.js"

class mongoCarritosRouter extends express.Router {
  constructor(){
    super()
    
    const carritos = new Carritos()

    this.get("/", async (req, res, next) => {
      try {
        res.json(await carritos.getAll())
      } catch (error) {
        console.log(new Error(error))
      }
    })
    this.get("/:id", async (req, res, next) => {
      try {
        res.json(await carritos.getById(req.params.id))
      } catch (error) {
        console.log(new Error(error))
      }
    })
    this.post("/", async (req, res, next) => {
      try {
        res.json(await carritos.post(req.body))
      } catch (error) {
        console.log(new Error(error))
      }
    })
    this.put("/:id", async (req, res, next) => {
      try {
        res.json(await carritos.put(req.params.id , req.body))
      } catch (error) {
        console.log(new Error(error))
      }
    })
    this.delete("/:id", async (req, res, next) => {
      try {
        res.json(await carritos.deleteById(req.params.id))
      } catch (error) {
        console.log(new Error(error))
      }
    })
  }
}

export default mongoCarritosRouter