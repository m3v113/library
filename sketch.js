var movingrect, fixedrect;
var pickle, pikachu, mariam, molly;

function setup() {
  //creates the canvas
  createCanvas(800, 400);

  movingrect = createSprite(400, 200, 50, 50);
  movingrect.shapeColor = "red";
  movingrect.debug = true;

  fixedrect = createSprite(300, 300, 50, 50);
  fixedrect.shapeColor = "black";
  fixedrect.debug = true;

  pickle = createSprite(13, 13, 50,50);
  pickle.shapeColor = "crimson";
  
  pikachu = createSprite(250, 250, 50, 50);
  pikachu.shapeColor = "cyan";

  mariam = createSprite(530,220,50,50);
  mariam.shapeColor = "orange";

  molly = createSprite(400,330,50,50);
  molly.shapeColor = "yellow";
}

function draw() {
  //to add color and clear the screen
  background("powderblue");

  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

if (isTouching(movingrect, mariam)){
  movingrect.shapeColor = "pink";
  mariam.shapeColor = "purple";
}
else{
  movingrect.shapeColor = "red";
  mariam.shapeColor = "orange";
}

  drawSprites();
}
