import MongoContainer from "../MongoContainer.js"
import * as model from "../../models/productos.js"

export class Productos extends MongoContainer{
  constructor(){
    super()
  }
  
  //GET
  async getAll(){
    try {
      this.connect()

      let res = await model.productos.find()
      this.disconnect()

      return res
    } catch (error) {
      console.log(error)
    }
  }

  async getById(id){
    try {
      this.connect()

      let res = await model.productos.find({_id:id})

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

      await model.productos(obj).save()
      
      this.disconnect()
      return obj
    } catch (error) {
      console.log(error)
    }
  }

  //PUT
  async put(id, obj){
    try {
      this.connect()

      let res = await model.productos.updateOne({_id: id}, obj)

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
      
      let res = await model.productos.deleteOne({_id: id})

      this.disconnect()
      return res
    } catch (error) {
      console.log(error)
    }
  }
}
