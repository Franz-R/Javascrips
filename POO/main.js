//Clase -- una plantilla de un objeto
class Comida{
    constructor(id,nombre,color){
        this.id = id;
        this.nombre = nombre;
        this.color = color;
    }

//metodo
nombrar(){
    return ´${this.nombre} de color ${this.color}´;
}

}

// objeto --  1ro creamos una variable
// hacemos una instancia de la clase recien creada

const manzana = new Comida(1, 'manzana', 'rojo');
const pera = new Comida(2, 'pera', 'verde');


console.log(manzana);

