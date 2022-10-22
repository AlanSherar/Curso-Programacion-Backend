class Usuario {

    constructor(nombre , apellido , libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;    
    }

    getFullName(){
    //     //String. Retorna el completo del usuario. Utilizar template strings.
        let nomComp = `${this.nombre}` `${this.apellido}`;
        return nomComp;
    }
    addMascota(nombre){
        //void. Recibe un nombre de mascota y lo agrega al array de mascotas.
        this.mascotas.push(nombre);
    }
    countMascotas(){
        //Number. Retorna la cantidad de mascotas que tiene el usuario.
        return this.mascotas.length;
    }
    addBook(nom , aut){
        //void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
        this.libros.push({nombre:nom,autor:aut});
    }
    getBookNames(){
         // String[]. Retorna un array con sólo los nombres del array de libros del usuario.
    }
    

}
const usuario1 = new Usuario ("Alan", "Sherar", [{nombre: "Crónicas de una muerte anunciada", autor: "Gabriel García Márquez"},{nombre:"Viaje al centro de la Tierra",autor:"Julio Verne"}], ["Firulais","Lupita","Waffles"])

console.log(usuario1.getFullName());
usuario1.addMascota("Lunita");
console.log(usuario1.countMascotas());
usuario1.addBook("Harry Potter y la piedra filosofal","J. K. Rowling");
