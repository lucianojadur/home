
const darkPath = 'file:///home/luciano/Escritorio/frontend/dark.css';
const lightPath = 'file:///home/luciano/Escritorio/frontend/light.css';


function showText(id, text){
    document.getElementById(id).innerHTML = text;
}

function flipTextContent(id1, id2){
    let aux = document.getElementById(id1).innerHTML;
    document.getElementById(id1).innerHTML = document.getElementById(id2).innerHTML;
    document.getElementById(id2).innerHTML = aux;
}

function changeStyle(){
    let link = document.getElementById('style')
    link.href = (link.href === darkPath) ? link.href = lightPath : darkPath;
}