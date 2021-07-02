
const darkPath = 'dark.css';
const lightPath = 'light.css';


function showText(id, text){
    document.getElementById(id).innerHTML = text;
}

function flipTextContent(id1, id2){
    let aux = document.getElementById(id1).innerHTML;
    document.getElementById(id1).innerHTML = document.getElementById(id2).innerHTML;
    document.getElementById(id2).innerHTML = aux;
}

function changeStyle(){
    let urlstring = document.getElementById('style');
	//
	//Aunque en el doc aparezca "href='nombre.arcihvo'" el valor real de href es la
	//ruta ABSOLUTA.
	//Las rutas absolutas en github y en la pc difieren, 
	//por lo que necesito rescatar sólo el nombre del archivo (relURL)
	//y reemplazar el valor actual de href por ese nombre
    let absURL = urlstring.href.replace(/\/$/, '').split('/');
    let relURL = absURL[absURL.length - 1]; 	//última cadena del path (nombre del fichero)
    urlstring.href = 'css/';    
    urlstring.href += (relURL === darkPath) ? lightPath : darkPath;
}