/**
 * https://tondy67.github.io/app.js
 */

const modal = () => {
	const modal = document.querySelector('#modalBox');
	const img = document.querySelector('#logo');
	const modalImg = document.querySelector('#img01');
	const captionText = document.querySelector('#caption');
	img.onclick = function(){
		modal.style.display = 'block';
		modalImg.src = this.src;
		captionText.innerHTML = this.alt;
	};
	const span = document.querySelector(".close");
	span.onclick = () => { modal.style.display = 'none'; }
};

window.onload = () => {
	modal();
};
