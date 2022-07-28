img="";
Status="";
objects=[];
function preload()
{
   img=loadImage("Bed.jpg");
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
objects=results;
}

function draw()
{
   for(i=0; i< objects.length; i++)
   {
      document.getElementById("status").innerHTML="Status : Object Detected";
   
      fill("red");
      Percent= floor(objects[i].confidence * 100);

      text(objects[i].label+" "+Percent+"%",objects[i].x,objects[i].y);
      noFill();
      stroke('red');

      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
   }
}
