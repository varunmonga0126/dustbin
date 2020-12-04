class Paper {

    constructor(x, y,radius) {
        var option={
isStatic:false,
restitution:0.2
,friction:0.5
,density:1.2

        }
        this.x=x;
        this.y=y;
        this . radius =radius
this .boby=Bodies.circle(this.x,this.y,this.radius/2,option);
 World.add(world, this.body);
        
     
    }


    display() {
        var pos =this.body.position;
push()
      translate(groundPos.x, groundPos.y);
      rectMode(CENTER)
      strokeWeight(4);
        fill("red");
        ellipseMode(radius);
        ellipse(this.body.position.x ,this.body.position.y,this.radius);
        pop()
    }
}
