import mongoose from "mongoose"
import URL from "../config/mongoDB/url"
class MongoContainer{
  constructor(){
  }

  async #connect(){
    try {
      let res = await mongoose.connect(URL, {
        useNewUrlParser: true,
        UseUnifiedTopology: true
      })
      console.log(res)
      console.log("DB conectada")
    } catch (error) {
      console.log(error)
    }
  }

  async #disconnect(){
    try {
      await mongoose.disconnect()
    } catch (error) {
      console.log(error)
    }
  }
}
