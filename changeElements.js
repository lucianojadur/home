
const darkPath = "dark.css";
const lightPath = "light.css";


function showText(id, text){
	document.getElementById(id).innerHTML = text;
}

function flipTextContent(id1, id2){
	let aux = document.getElementById(id1).innerHTML;
	document.getElementById(id1).innerHTML = document.getElementById(id2).innerHTML;
	document.getElementById(id2).innerHTML = aux;
}

function changeStyle(){
	let link = document.getElementById('style');
	if(link.href === lightPath) {
		link.href = darkPath;
	}else if (link.href === darkPath) {
		link.href = lightPath;
	}
}