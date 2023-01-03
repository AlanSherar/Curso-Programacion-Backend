import MongoContainer from "../MongoContainer.js"
import * as model from "../../models/carritos.js"

export class Carritos extends MongoContainer{
  constructor(){
    super()
  }
  
  //GET
  async getAll(){
    try {
      this.connect()

      let res = await model.carritos.find()

      this.disconnect()
      return res
    } catch (error) {
      console.log(error)
    }
  }

  async getById(id){
    try {
      this.connect()

      let res = await model.carritos.find({_id:id})

      this.disconnect()
      return res
    } catch (error) {
      console.log(error)
    }
  }

  //POST
  async post(obj){
    try {
      this.connect()

      let res = await model.carritos({productos: [obj]}).save()
      
      this.disconnect()
      return {carrito: res, producto: obj }
    } catch (error) {
      console.log(error)
    }
  }

  //PUT
  async put(id, carr){
    try {
      this.connect()

      let res = await model.carritos.updateOne({_id: id}, carr)

      this.disconnect()
      return res
    } catch (error) {
      console.log(error)
    }
  }

  //DELETE
  async deleteById(id){
    try {
      this.connect()
      
      let res = await model.carritos.deleteOne({_id: id})

      this.disconnect()
      return res
    } catch (error) {
      console.log(error)
    }
  }
}