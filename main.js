var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var roverwidth=100;
var roverheight=90;
var backgroundimage="mars.jpg";
var roverimage="rover.png";
var roverx=10;
var rovery=10;




function add(){
     backgroundimagetag=new Image();
     backgroundimagetag.onload=uploadbg;
     backgroundimagetag.src=backgroundimage;

     roverimagetag=new Image();
     roverimagetag.onload=uploadrover;
     roverimagetag.src=roverimage;
}

function uploadbg(){
    ctx.drawImage(backgroundimagetag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(roverimagetag,roverx,rovery,roverwidth,roverheight);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='37')
    {
        console.log("left");
    }
    if(keyPressed=='38')
    {
        console.log("up");
    }if(keyPressed=='39')
    {
        console.log("right");
    }if(keyPressed=='40')
    {
        console.log("down");
    }
}