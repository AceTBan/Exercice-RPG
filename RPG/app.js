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
        }
    });
});
