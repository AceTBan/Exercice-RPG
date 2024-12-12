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
	});
});