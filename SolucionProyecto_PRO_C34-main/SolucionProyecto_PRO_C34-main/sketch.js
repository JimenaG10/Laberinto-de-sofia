var Sofia;
var cardboard1, cardboard2, cardboard3, cardboard4, cardboard5, cardboard6, cardboard7, cardboard58, cardboard9,
cardboard10, cardboard11, cardboard12, cardboard13, cardboard14, cardboard15, cardboard16, cardboard17, cardboard18,
cardboard19, cardboard20, cardboard21, cardboard22;

function preload(){

}

function setup(){
createCanvas(400,400);
//crea el objeto del juego
 Sofia= createSprite(20,25,18,18);  
Sofia.shapeColor = "orange";

//crea el laberinto
cardboard1 = createSprite(10,70,100,20);
 cardboard1.shapeColor = "brown";
cardboard2 = createSprite(100,50,20,100);
cardboard2.shapeColor = "brown";
cardboard3 = createSprite(80,130,100,20);
cardboard3.shapeColor = "brown";
cardboard4 = createSprite(50,250,20,100);
cardboard4.shapeColor = "brown";
cardboard5 = createSprite(130,210,100,20);
 cardboard5.shapeColor = "brown";
cardboard6 = createSprite(10,250,100,20);
 cardboard6.shapeColor = "brown";
cardboard7 = createSprite(160,120,20,100);
 cardboard7.shapeColor = "brown";
cardboard8 = createSprite(150,20,100,20);
 cardboard8.shapeColor = "brown";
cardboard9 = createSprite(250,70,20,100);
 cardboard9.shapeColor = "brown";
cardboard10 = createSprite(270,150,100,20);
 cardboard10.shapeColor = "brown";
cardboard11 = createSprite(330,50,100,20);
 cardboard11.shapeColor = "brown";
cardboard12 = createSprite(340,125,20,100);
 cardboard12.shapeColor = "brown";
cardboard13 = createSprite(220,250,20,100);
 cardboard13.shapeColor = "brown";
cardboard14 = createSprite(330,210,150,20);
 cardboard14.shapeColor = "brown";
cardboard15 = createSprite(100,300,20,100);
 cardboard15.shapeColor = "brown";
cardboard16 = createSprite(180,310,100,20);
 cardboard16.shapeColor = "brown";
cardboard17 = createSprite(30,352,20,100);
 cardboard17.shapeColor = "brown";
cardboard18 = createSprite(175,352,20,100);
 cardboard18.shapeColor = "brown";
cardboard19 = createSprite(280,290,20,100);
 cardboard19.shapeColor = "brown";
cardboard20 = createSprite(350,270,120,20);
 cardboard20.shapeColor = "brown";
cardboard21 = createSprite(250,390,100,20);
 cardboard21.shapeColor = "brown";
cardboard22 = createSprite(330,370,20,100);
 cardboard22.shapeColor = "brown";
target = createSprite(395,375,10,50);
target.shapeColor = "yellow";

}

function draw() {
//establece el color de fondo a blanco 
background("pink");

Sofia.velocityX=0;
Sofia.velocityY=0;
if ( Sofia.bounce(target))  
{
textSize(40);
fill("red");
text("¡Ganaste!", 130,200);
}
fill("blue");

if (keyDown("UP_ARROW")) {

Sofia.velocityX=0;
Sofia.velocityY=-4;
}
if (keyDown(DOWN_ARROW)) {

Sofia.velocityX=0;
Sofia.velocityY=4;
}
if (keyDown(LEFT_ARROW)) {

Sofia.velocityX=-4;
Sofia.velocityY=0;
}
if (keyDown(RIGHT_ARROW)) {

Sofia.velocityX=4;
Sofia.velocityY=0;
}

Sofia.bounceOff(cardboard1);
Sofia.bounceOff(cardboard2);
Sofia.bounceOff(cardboard3);
Sofia.bounceOff(cardboard4);
Sofia.bounceOff(cardboard5);
Sofia.bounceOff(cardboard6);
Sofia.bounceOff(cardboard7);
Sofia.bounceOff(cardboard8);
Sofia.bounceOff(cardboard9);
Sofia.bounceOff(cardboard10);
Sofia.bounceOff(cardboard11);
Sofia.bounceOff(cardboard12);
Sofia.bounceOff(cardboard13);
Sofia.bounceOff(cardboard14);
Sofia.bounceOff(cardboard15);
Sofia.bounceOff(cardboard16);
Sofia.bounceOff(cardboard17);
Sofia.bounceOff(cardboard18);
Sofia.bounceOff(cardboard19);
Sofia.bounceOff(cardboard20);
Sofia.bounceOff(cardboard21);
Sofia.bounceOff(cardboard22);

Sofia.collide(target);


textSize(19);
text("Copa", 350, 340);
textSize(19);
text("Sofia",30,43);

drawSprites();


}
