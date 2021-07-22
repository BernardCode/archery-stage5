class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;

    this.life1 = "lime";
    this.life2 = "lime";
    this.life3 = "lime";

    this.image = loadImage("./assets/player.png");

    World.add(world, this.body);
  }

  life() {
    push();
    textSize(30)
    fill("white");
    text("Computer",width-285,150);
  
    fill(this.life1);
    rect(width-385,160,70,30);
    fill(this.life2);
    rect(width-315,160,70,30);
    fill(this.life3);
    rect(width-245,160,70,30);
  
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
