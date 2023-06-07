class Paper{
    constructor(x, y, width, height) {
        var options = {
          isStatic:false,
			     restitution :0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        		var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.width-40,this.height-40);
  
			pop()
      }
	}