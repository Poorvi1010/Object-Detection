img="";
Status="";
function preload()
{
img=loadImage("Bedroom.webp");
}

function setup()
{
   canvas=createCanvas(640,420);
   canvas.center(); 
   objectdetector= ml5.objectDetector("cocossd",ModelLoaded);
   document.getElementById("status").innerHTML="Status : Detecting Object"

}

function ModelLoaded()
{
   console.log("Model Loaded");
   Status= true;
   objectdetector.detect(img,gotResults);
}

function gotResults(error,results)
{
if(error)
{
   console.log(error);
}
console.log(results);
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