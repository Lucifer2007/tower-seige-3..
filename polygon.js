class polygon{
   constructor(x,y,width,height){

   var options = {

      isStatic:false,
      restitution:0.4,
      
   }
   this.body = Bodies.rectangle(x,y,100,100,options);
   this.x = x;
   this.y = y;
   this.image = loadImage("2.png")
   World.add(world,this.body);


   }
  display(){

  var pos = this.body.position;
  var angle = this.body.angle;
  push()
  translate(pos.x,pos.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.image,0,0,100,100);
  pop()
  }
}