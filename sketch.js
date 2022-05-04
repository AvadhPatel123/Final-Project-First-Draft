

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  test = new Teams(windowWidth/2, windowHeight/2 + 50, 0);
}

function draw() {
  background(0, 255, 91);
  
  noStroke();
  fill("black");
  rect(windowWidth/2 - 75, windowHeight/4, 7, 400); //Vertical
  rect(windowWidth/2 + 75, windowHeight/4, 7, 400); //Vertical 
  rect(windowWidth/4 + 150, windowHeight/2 - 30, 400, 7); //Horizontal
  rect(windowWidth/4 + 150, windowHeight/2 + 110, 400, 7); //Horizontal
  
  test.display();


  
}


class Teams{
  
  constructor(x,y,type){
    this.x = x;
    this.y = y;
    this.type = type;
    
  }
  
  display(){
    if(this.type == 0){
      
      push();
      translate(this.x, this.y);
      rotate(PI/4);
      fill(62, 193, 249);
      rect(-47, -13, 80, 8);
      rect(-13, -47, 8, 80);
      pop();
      
      
    }
    else if(this.type== 1){
      
      push();
      translate(this.x, this.y);
      fill("white");
      circle(0, 0, 80);
      pop();
      
      
    }
  }
  
}