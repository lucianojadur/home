
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
    let link = document.getElementById('style');
    let absURL = link.href.replace(/\/$/, '').split('/');
    let relURL = absURL[absURL.length - 1];
    link.href = (relURL === darkPath) ? lightPath : darkPath;
}
