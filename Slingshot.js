class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.why1=loadImage ("sprites/sling1.png");
        this.help2=loadImage ("sprites/sling2.png");
        this.rubberissad=loadImage ("sprites/sling3.png");

        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.why1, 200, 20);   
        image(this.help2, 170, 20)
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8);
            if (pointA.x<200||pointA.x>=210)
            {
                strokeWeight(4);
                line(pointA.x-20, pointA.y+20, pointB.x-20, pointB.y);
                line(pointA.x-20, pointA.y+20, pointB.x+20, pointB.y);
                image(this.rubberissad, pointA.x-25, pointA.y, 15, 20);
            }
            else {
                strokeWeight(8);
                line(pointA.x-20, pointA.y+20, pointB.x-20, pointB.y);
                line(pointA.x-20, pointA.y+20, pointB.x+20, pointB.y);
                image(this.rubberissad, pointA.x-25, pointA.y, 15, 20);
            }
            
        }
    }
    
}