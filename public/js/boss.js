class Boss {
    constructor(nom, pointVie, pointAttaque){
        this.nom = nom;
        this.pointVie = pointVie;
        this.pointAttaque = pointAttaque;
        this.enigme = () => {
            let reponseEnigme = prompt(`${this.nom}: Il me reste ${this.pointVie} points de vie, si tu veux me vraincre, tu devras répondre à cette énigme: ${enigmeAleatoire}`);
            switch (reponseEnigme) {
                case "prenom":
                    alert(`Bravo, tu as réussi à vaincre ${this.nom}, tu as gagné!`)
                    break;
                case "d":
                    alert(`Bravo, tu as réussi à vaincre ${this.nom}, tu as gagné!`)
                    break;
                case "feu":
                    alert(`Bravo, tu as réussi à vaincre ${this.nom}, tu as gagné!`)
                    break;
                case "9":
                    alert(`Bravo, tu as réussi à vaincre ${this.nom}, tu as gagné!`)
                    break;
                case "en sautant du premier étage":
                    alert(`Bravo, tu as réussi à vaincre ${this.nom}, tu as gagné!`)
                    break;
                default:
                    //faire la condition si il rate, 3 chance pour repondre(donc une boucle pour relancer la question si i<3)
                    break;
            }
        }
    }
}

//Les Boss du jeu
let sauron = new Boss("Sauron", 100, 200);
let chronos = new Boss("Chronos", 100, 185);
let lilith = new Boss("Lilith", 100, 250);

//Les énigmes
let enigmeBoss = ["Je suis quelque chose qui t'appartient mais que les gens utilisent plus que toi, qui suis-je?", "Quelle lettre peut-on lancer dans tous les sens ?", "Je grandis sans être vivant. Je n'ai pas de poumon, mais j'ai besoin d'air pour vivre. L'eau, même si je n'ai pas de bouche, me tue, qui suis-je ?", "Monsieur et Madame Dupont ont 6 fils. Ils ont tous une sœur, combien y-a-t-il de personne dans cette famille ?", "Si je tombe d'un immeuble de 50 étages, comment pourrais-je survivre?"];
//Tirage au sort d'une énigme
let enigmeAleatoire = enigmeBoss[Math.floor(Math.random()*enigmeBoss.length)];
