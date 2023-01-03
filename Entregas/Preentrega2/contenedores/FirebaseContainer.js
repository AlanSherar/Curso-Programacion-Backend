import admin from "firebase-admin"
import fs from "fs"

const serviceAccount = JSON.parse(fs.readFileSync("../config/firebase/preentrega2-54008-firebase-adminsdk-x9yhh-861b6f5e36.json"))

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

export class FirebaseContainer {
  constructor(collection) {
    this.db = admin.firestore()
    this.query = this.db.collection(collection)
  }
  
  //GET
  async getAll() {
    try {
      const res = await this.query.get()
      const data = []
      res.forEach(doc => data.push(doc.data()))
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
  async getById(id) {
    try {
      const res = await this.query.doc(id).get()
      const data = res.data()
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  //POST
  async post(obj) {
    try {
      const res = await this.query.add(obj)
      return res
    } catch (error) {
      throw new Error(error)
    }
  }

  //PUT
  async put(id, obj) {
    try {
      const res = await this.query.doc(id).update(obj)
      return res
    } catch (error) {
      throw new Error(error)
    }
  }

  //DELETE
  async deleteById(id) {
    try {
      const res = await this.query.doc(id).delete()
      return res
    } catch (error) {
      throw new Error(error)
    }
  }
}
