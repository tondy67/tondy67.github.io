//

window.onload = () => {
	let m;
	try { m = JSON.parse(meta);}catch(e){console.log(e)};
	if (!m) return;
/*	const s = JSON.stringify(m, null, 2);
	const box = document.querySelector('#meta');
	box.innerHTML = '<pre>' + s + '</pre>'; */
	document.title = m.name;
	const body = document.querySelector('#body');
//	body.innerHTML = m.body;
};
