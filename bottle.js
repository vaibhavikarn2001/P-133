img="";
status="";
objects=[];
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
  

    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded(){
    console.log('Model Loaded');
    status=true;
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    
   console.log(results);
   objects=results;
   
   
    
    
}
function preload(){
    img=loadImage("bottle.jpg");
}
function draw(){
    image(img,0,0,380,380);
    

    if (status!=""){
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(img,gotResult);

        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="Status is: Detecting Objects";
            document.getElementById("number_of_objects").innerHTML="Number of objects detected - "+ objects.length;
            fill(r,g,b);
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

        }

    }

}
