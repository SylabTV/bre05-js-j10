// class 
class User {
    firstName;
    lastName;
    frenchGrades;
    mathGrades;
    englishGrades;
    // constructor pour les insatances
    constructor(firstName,lastName,frenchGrades,mathGrades,englishGrades){
        this.firstName = firstName;
        this.lastName = lastName;
        this.frenchGrades = frenchGrades;
        this.mathGrades = mathGrades;
        this.englishGrades = englishGrades;
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
    // methode getenglishAverage calculer la moyenne de francais 
    getEnglishAverage(){
        let englishsum = 0
        for(let english of this.englishGrades){
            englishsum += english;
        }
        return englishsum / this.englishGrades.length;
    }
    // methode getAverage calculer la moyenne generale
    getAverage(){
        return (this.getFrenchAverage() + this.getMathAverage() + this.getEnglishAverage()) / 3;
    }
    // trouver la moyenne la plus elever
    getBestAverage(){
        const french = this.getFrenchAverage();
        const english = this.getEnglishAverage();
        const math = this.getMathAverage();

        if (math >= french && math >= english){
            return "maths have the best average"
        }
        else if (french >= math && french >= english){
            return "french have the best average"
        }
        else{
            return "english have the best average"
        }

    }
}
// les instances
let mari = new User("Mari","Doucet",[11, 17],[9, 7],[9, 7]);
// appeler la methode introduce et lafficher dans la console
console.log(mari.student());
console.log(mari.getAverage());
console.log(mari.getBestAverage());