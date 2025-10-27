const Meme = document.getElementById('memeImage')

let xPosition = 0;

let xSpeed = 4;

let intervalid = null;

const width = 400;

const height = 200;

function mememoving(){



xPosition += xSpeed;



if (xPosition <= 0 || xPosition + width >= window.innerWidth) {
    xSpeed = -xSpeed;
}


    Meme.style.left = xPosition + 'px'
    
    Meme.style.top = yPosition + 'px'

}

function begin(){

if (!intervalid) {

    intervalid = setInterval (mememoving, 10);

} 

}

function end(){

 clearInterval(intervalid);

 intervalid = null;

}