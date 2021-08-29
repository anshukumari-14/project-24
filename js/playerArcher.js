class PlayerArcher {
    constructor(x, y, width, height) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./assets/playerArcher.png");
      World.add(world, this.body);
    }
  
   display() {
    if(keyIsDown(UP_ARROW)  && this.angle < -1.2){
      this.angle +=0.01;
      Matter.Body.setAngle(this.body,this.angle);
    }
    if(keyIsDown(DOWN_ARROW) && this.angle > -1.9){
      this.angle -=0.01;
      Matter.Body.setAngle(this.body,this.angle);
    }
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(this.angle);
      
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }