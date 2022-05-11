//Caractéristiques principales des personnages
class Personnage {
    constructor(nom, pointVie, pointAttaque) {
        this.nom = nom;
        this.pointVie = pointVie;
        this.pointAttaque = pointAttaque;
    }
}
//Class des Boss
class Boss extends Personnage {
    constructor(nom, pointVie, pointAttaque) {
        super(nom, pointVie, pointAttaque);
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

//Création des Héros
class Guerrier extends Personnage{
    constructor(nom, pointVie, pointAttaque, pointRage){
        super(nom, pointVie, pointAttaque);
        this.pointRage = pointRage;
    }
}
let persoGuerrier = new Guerrier("", 0, 0, 0);

class Mage extends Personnage{
    constructor(nom, pointVie, pointAttaque, pointMana){
        super(nom, pointVie, pointAttaque);
        this.pointMana = pointMana;
    }
}
//Attribution aléatoire des point de mana
let manaChiffre = [7, 9, 11];
let manaAleatoire = manaChiffre[Math.floor(Math.random()*manaChiffre.length)];

let persoMage = new Mage("", 0, 0, 0);
persoMage.pointMana = manaAleatoire;

class Archer extends Personnage{
    constructor(nom, pointVie, pointAttaque, fleche){
        super(nom, pointVie, pointAttaque);
        this.fleche = fleche;
    }
}
//Attribution des fleches de manière aléatoire
let nombreFleche = Math.floor(Math.random()*(11-7))+7;

let persoArcher = new Archer("", 0, 0, 0);
persoArcher.fleche = nombreFleche

function hero() {
    alert("Êtes-vous prêt à initialiser vos 3 héros?")
    persoGuerrier.nom = prompt("Veillez indiquer le nom de votre guerrier");
    persoMage.nom = prompt("Veillez indiquer le nom de votre mage");
    persoArcher.nom = prompt("Veillez indiquer le nom de votre archer");
    alert("Maintenant vous allez attribuer les points de vie à chacun de vos héros. Attention vous avez un total de 60 points de vie à partager. Tant qu'ils ne seront pas complètement partagés, vous ne pourrez pas continuer!");
    let totalPointVie;
    let totalPointAttaque;
    do {
        persoGuerrier.pointVie = +prompt(`Combien de point de vie souhaitez-vous attribuer à ${persoGuerrier.nom}?`);
        persoMage.pointVie = +prompt(`Combien de point de vie souhaitez-vous attribuer à ${persoMage.nom}?`);
        persoArcher.pointVie = +prompt(`Combien de point de vie souhaitez-vous attribuer à ${persoArcher.nom}?`);
        totalPointVie = persoGuerrier.pointVie + persoArcher.pointVie + persoMage.pointVie
    }
    while (totalPointVie !== 60);
    alert("Passons aux points d'attaque, attention vous avez un total de 60 points d'attaque à partager. Tant qu'ils ne seront pas complètement partagés, vous ne pourrez pas continuer!");
    do {
        persoGuerrier.pointAttaque = +prompt(`Combien de point d'attaque souhaitez-vous attribuer à ${persoGuerrier.nom}?`);
        persoMage.pointAttaque = +prompt(`Combien de point d'attaque souhaitez-vous attribuer à ${persoMage.nom}?`);
        persoArcher.pointAttaque = +prompt(`Combien de point d'attaque souhaitez-vous attribuer à ${persoArcher.nom}?`);
        totalPointAttaque = persoGuerrier.pointAttaque + persoArcher.pointAttaque + persoMage.pointAttaque
    }
    while (totalPointAttaque !== 60);
    console.log(persoArcher);
    console.log(persoGuerrier);
    console.log(persoMage);
}
// hero()