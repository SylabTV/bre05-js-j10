class book {
    title;
    author;
    publishDate;
    pages;
    nbOfCopy;

    // constructor
    constructor(title,author,publishDate,pages,nbOfCopy){
        this.title = title;
        this.author = author;
        this.publishDate = publishDate;
        this.pages = pages;
        this.nbOfCopy = nbOfCopy;
    }
    // method savoir si le livre est dispo
    getnbOfCopy(){
        if(this.nbOfCopy > 0){
            return "Livre disponible, il reste " + this.nbOfCopy + " exemplaire";
        }
        else {
            return "Livre indisponible";
        }
    }
}