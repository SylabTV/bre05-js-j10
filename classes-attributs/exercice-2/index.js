// class 
class User {
    firstName;
    lastName;
    grades;
    // constructor pour les insatances
    constructor(firstName,lastName,grades){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grades = grades;
    }
}
// les instances
let mari = new User("Mari","Doucet",[13, 12, 15]);
let hugues = new User ("Hugues","Froger",[14, 11, 17, 13]);
// afficher les deux instances
console.log(mari);
console.log(hugues);
// afficher la longueur de grades 
console.log(mari.grades.length)
console.log(hugues.grades.length)