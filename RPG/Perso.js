'use strict';

class Perso {
    constructor(nom) {
        this.nom = nom;
        this.sante = this.initialSante = Math.round(Math.random() * 20 + 5);
        this.puissance = Math.round(Math.random() * 3 + 1);
    }

    patate(cible) {
        let resultat = '';
        if (cible.sante > 0) {
            if (2 > Math.round(Math.random() * 10)) { // Probabilité de 20% de rater l'attaque
                resultat += this.nom + ' a loupé son attaque contre ' + cible.nom + '<br>';
            } else {
                resultat += this.nom + ' a frappé ' + cible.nom + '<br>';
                cible.sante -= this.puissance;
            }
            if (1 > Math.round(Math.random() * 10)) { // Probabilité de 10% de se blesser soi-même
                resultat += this.nom + ' se blesse lui-même ! <br>';
                this.sante -= this.puissance;
            }
            resultat += (cible.sante <= 0) ? cible.nom + ' est mort ! <br>' : '';
            resultat += (this.sante <= 0) ? this.nom + ' est mort ! <br>' : ''; 
        } else {
            resultat += this.nom + ' essaye de frapper un cadavre ! <br>';
        }

        return resultat;
    }

    histoire() {
        return 'Je suis ' + this.nom + ' j\'ai ' + this.sante + ' de santé et ' + this.puissance + ' de puissance.';
    }
}
