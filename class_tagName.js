function heading(){
    lengthH = document.getElementsByTagName('h1').length;
    for (i=0; i<lengthH; i++){
        document.getElementsByTagName('h1')[i].style.color='red';
    }
}

function paragraph(){
    lengthP = document.getElementsByClassName('para').length;
    for (i=0; i<lengthP; i++){
        document.getElementsByClassName('para')[i].innerHTML='P '+(i+1);
    }
}