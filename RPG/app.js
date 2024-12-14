'use strict';

document.addEventListener('DOMContentLoaded',function() {
	let lancer = document.querySelector('#lancer'),
		attaque = document.querySelector('#attaque'),
		resume = document.querySelector('#resume'),
		malik, valentin;

	lancer.addEventListener('click',function(){
		malik = new Perso('Malik');
		valentin = new Perso('Valentin');
		resume.innerHTML = '<p>' + malik.histoire() + '</p>';
		resume.innerHTML = '<p>' + valentin.histoire() + '</p>' + resume.innerHTML;
        attaque.disabled = false; // Activation du bouton "attaque"
    });

    attaque.addEventListener('click', function() {
        if (malik && valentin) {
            resume.innerHTML += malik.patate(valentin);
            resume.innerHTML += valentin.patate(malik);
			resume.innerHTML += '<p>' + malik.nom + ' : ' + malik.sante + ' points de vie restants</p>';
            resume.innerHTML += '<p>' + valentin.nom + ' : ' + valentin.sante + ' points de vie restants</p>';

            if (malik.sante <= 0 || valentin.sante <= 0) {
                attaque.disabled = true; // Désactivation du bouton "attaque" lorsque le combat est terminé
                resume.innerHTML += '<p>Le combat est terminé !</p>';
            }
        }
    });
});
