// class 
class User {
    firstName;
    lastName;
    frenchGrades;
    mathGrades;
    // constructor pour les insatances
    constructor(firstName,lastName,frenchGrades,mathGrades){
        this.firstName = firstName;
        this.lastName = lastName;
        this.frenchGrades = frenchGrades;
        this.mathGrades = mathGrades;
    }
    // methode student 
    student(){
        return `${this.firstName} ${this.lastName}`
    }
    // methode getMathAverage calculer la moyenne de math
    getMathAverage(){
        let mathsum = 0
        for(let math of this.mathGrades){
            mathsum += math;
        }
        return mathsum / this.mathGrades.length;
    }
    // methode getFrenchAverage calculer la moyenne de francais 
    getFrenchAverage(){
        let frenchsum = 0
        for(let french of this.frenchGrades){
            frenchsum += french;
        }
        return frenchsum / this.frenchGrades.length;
    }
    // methode getAverage calculer la moyenne generale
    getAverage(){
        let result = this.getFrenchAverage() + this.getMathAverage()
        return result / 2

        // ou 
        // return (this.getFrenchAverage() + this.getMathAverage()) / 2;
    }
}
// les instances
let mari = new User("Mari","Doucet",[11, 17],[9, 7]);
// appeler la methode introduce et lafficher dans la console
console.log(mari.student());
console.log(mari.getAverage());