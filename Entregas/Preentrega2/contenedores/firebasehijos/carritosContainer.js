import {FirebaseContainer} from "../FirebaseContainer"

class Carritos extends FirebaseContainer{
  constructor(){
    super("carritos")
  }

  async addProd(id, newProd){
    const doc  = await this.getById(id)
    let productos = [...doc.productos, newProd]
    doc.productos = productos

    await this.query.doc(id).update(doc)

  }
}