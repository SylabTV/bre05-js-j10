// classe
class Cat {
    name;
    age;
    color;
// constructor permet de cree les instances
    constructor(name, age, color){
        this.name = name;
        this.age = age;
        this.color = color;
    }
}

// instance de classe
let garfield = new Cat("Garfield","10 ans","de couleur orange");
let felix = new Cat("Felix","5 ans","de couleur noir et blanc");

// Afficher les instances
console.log(garfield);
console.log(felix);