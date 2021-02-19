class Stone{
    constructor(boy, boy){
        var options = {
            isStatic:false,
			restitution :0,
            friction :1,
			density :1.2
			}
        }
        thisBoy = boy;
        thisStone = Constraint.create(options);
    Worldadd(world, thisstone);
    fly(){
        this.stone.boy = null   
    }

    display(){
        if(this.stone.boy){
            var boy = this.stone.boy.position;
            var boy = this.pointB;
            strokeWeight(4);
            line(boy,boy,boy,boy);
            }
    }