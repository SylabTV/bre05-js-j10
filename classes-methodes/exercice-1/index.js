// class 
class User {
    firstName;
    lastName;
    dateOfBirth;
    // constructor pour les insatances
    constructor(firstName,lastName,dateOfBirth){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }
    // methode introduce 
    introduce(){
        return `${this.firstName} ${this.lastName} ${this.dateOfBirth}`
    }
}
// les instances
let hugues = new User("Hugues","Froger","18 Mars 1992");
// appeler la methode introduce et lafficher dans la console
console.log(hugues.introduce());