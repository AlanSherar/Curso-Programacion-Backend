const {knex} = require("knex")
class DBCliente{

  constructor(options, tabla){
    this.knex = knex(options);
    this.table = tabla;
  }

  async crearTablaProductos(){
    if (!await this.knex.schema.hasTable(this.table)){
      return this.knex.schema.createTable(this.table, table => {
        table.increments("id").primary()
        table.string("title", 15).notNullable()
        table.double("price", 10).notNullable()
        table.string("thumbnail").notNullable()
      })
      .catch(err=>{console.log(err)})
    }
  }
  async crearTablaMensajes(){
    if (!await this.knex.schema.hasTable(this.table)){
      return this.knex.schema.createTable(this.table, table => {
        table.increments("id").primary()
        table.string("author", 35).notNullable()
        table.string("text").notNullable()
        table.string("time")
      })
      .catch(err=>{console.log(err)})
    }
  }

  /* save(Object): Number - Recibe un objeto, lo guarda en el DB, devuelve el id asignado */
  async save(prod) {
    return this.knex(this.table).insert(prod)
      .then(() => {console.log("Ingresado/s correctamente")})
      .catch(err => {console.log(err)})
      
  }

  /* getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está. */
  async getById(id) {
    return this.knex(this.table).select("*").where("id", "=", id)
      .catch(err=>{console.log(err)})
      
  }

  /* getAll(): Object[] - Devuelve un array con los objetos presentes en el DB */
  async getAll() {
    return this.knex(this.table).select()
    .catch(err=>{console.log(err)})
    
  }

  /* deleteById(Number): void - Elimina del DB el objeto con el id buscado. */
  async deleteById(id) {
    return this.knex(this.table).del().where("id", "=", id)
    .catch(err=>{console.log(err)})
    
  }

  /* deleteAll(): void - Elimina todos los objetos presentes en el DB */
  async deleteAll(){
    return this.knex(this.table).del()
    .catch(err=>{console.log(err)})
  }

}

module.exports = DBCliente