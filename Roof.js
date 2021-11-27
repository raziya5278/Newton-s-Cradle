class rope{
	constructor(body1,body2, offsetX, offsetY){

		var options={
			bodyA:body1,
			bodyB:body2,
		}

		this.rope=Constraint.create(options);
		World.add(world,this.rope);

		this.offsetX = offsetX
        this.offserY = offsetY
	}

	display(){

		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;

		strokeWeight(2);
	}

}