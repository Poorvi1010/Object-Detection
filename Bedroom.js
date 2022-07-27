img="";
function preload()
{
img=loadImage("Bedroom.webp");
}

function setup()
{
   canvas=createCanvas(640,420);
   canvas.center(); 
}

function draw()
{
image(img,0,0,640,420);
fill("red");
text("Bed",240,50);
noFill();
stroke("red")
rect(250,60,350,300)
}