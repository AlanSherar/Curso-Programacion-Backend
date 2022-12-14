const DBCliente = require("./public/Contenedor")

const inicializarTabla = data => {
  const DB = new DBCliente(data.options, data.table).crearTabla()
    .then(()=>{
      console.log(`Tabla ${data.table} creada con exito.`)
    })
    .catch( err => {
      console.log(err)
    })
}

module.exports = inicializarTabla