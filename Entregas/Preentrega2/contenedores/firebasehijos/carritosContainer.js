import {FirebaseContainer} from "../FirebaseContainer.js"

export class Carritos extends FirebaseContainer{
  constructor(){
    super("carritos")
  }

  async addProd(id, newProd){
    const doc  = await this.getById(id)
    let productos = [...doc.productos, newProd]
    doc.productos = productos

    let res = await this.query.doc(id).update(doc)
    return res
  }
}