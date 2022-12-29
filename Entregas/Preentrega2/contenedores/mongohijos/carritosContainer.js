import MongoContainer from "../MongoContainer"
import * as model from "../../models/carritos"
class Carritos extends MongoContainer{
  constructor(){
    super()
  }
  
  //GET
  async getAll(){
    try {
      this.#connect()

      let res = await new model.carritos.find()

      this.#disconnect()
      return res
    } catch (error) {
      console.log(error)
    }
  }

  async getById(id){
    try {
      this.#connect()

      let res = await model.carritos.find({_id:id})

      this.#disconnect()
      return res
    } catch (error) {
      console.log(error)
    }
  }

  //POST
  async post(obj){
    try {
      this.#connect()

      await new model.carritos({productos: [obj]}).save()
      
      this.#disconnect()
      return obj
    } catch (error) {
      console.log(error)
    }
  }

  //PUT
  async put(id, obj){
    try {
      this.#connect()

      let prods = await model.carritos.find({_id: id}, {productos: 1, _id: 0, timestamp: 0})
      prods = [...prods, obj]
      await model.carritos.updateOne({_id: id}, {productos: prods})

      this.#disconnect()
    } catch (error) {
      console.log(error)
    }
  }

  //DELETE
  async deleteById(id){
    try {
      this.#connect()
      
      await model.carritos.deleteOne({_id: id})

      this.#disconnect()

    } catch (error) {
      console.log(error)
    }
  }
}