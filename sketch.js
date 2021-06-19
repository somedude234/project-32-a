const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg){

        background(backgroundImg);
  
      }


    Engine.update(engine);

    // write code to display time in correct format here
if(hour>= 12){

text("TIME: "+ hour%12+"pm",50,100);

}
else if ( hour === 0 ){

text("Time: 12 am",50,100)

}
else {

    text("TIME: "+ hour%12+"am",50,100);

}
}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var jsonResponse = await response.json();
var day1 = jsonResponse.datetime;
var hour = day1.slice(11,13);

if(hour>04 && hour<=06 ){
 bg = "sunrise1.png";
}
else if(hour>=06 && hour<=08){
bg = "sunrise2.png";
}
else if(hour>23 && hour == 0){
bg = "sunset10.png";
}
else if (hour == 0 && hour<03){
    bg = "sunset11.png";
}
else{
bg = "sunset12.png";
}
backgroundImg = loadImage(bg);
}