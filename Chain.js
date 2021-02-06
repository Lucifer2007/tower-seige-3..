class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness: 0.01,
            length: 60
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    
	flow(){
        this.chain.bodyA = null;
    }
    attach(body){
        this.chain.bodyA = body;
    }
      
    display(){
        if(this.chain.bodyA ){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        color("white");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}