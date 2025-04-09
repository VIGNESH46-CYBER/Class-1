var box;

function setup() {
  createCanvas(1000,1000);
  box = createSprite(200,200,30,30);
  box.shapeColor="black"

}

function draw() 
{
   background("lightblue");
   
   
   if (keyIsDown(RIGHT_ARROW)) 
    {
      box.position.x = box.position.x +5;
      box.shapeColor="red"

    }
    
    if (keyIsDown(LEFT_ARROW)) 
      {
        box.position.x= box.position.x -5;
        box.shapeColor="yellow"    
    }
 
  if (keyIsDown(UP_ARROW)) 
    {
      box.position.y = box.position.y - 5;
      box.shapeColor="blue"
    }
    
    if (keyIsDown(DOWN_ARROW)) 
      {
        box.position.y = box.position.y + 5;
        box.shapeColor="green"
      }

  drawSprites();
}




