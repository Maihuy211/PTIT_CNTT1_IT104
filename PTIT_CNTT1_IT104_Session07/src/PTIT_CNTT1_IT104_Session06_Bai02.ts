class Vehicle {
    protected name : string 
    protected speed : number
    protected id : number 
    constructor(name : string , speed : number , id : number){
        this.name = name;
        this.speed = speed;
        this.id = id 
    }
    slowDown(speed : number):number{
        return this.speed -= speed ;
    }
    speedUp(speed : number):number{
        return this.speed += speed ;
    }
    showSpeed():void {
        console.log(`tốc độ hiện tại : ${this.speed}`)
    }
}
class Bicycle extends Vehicle {
    private gear : number ;
    constructor(name : string , speed : number , id : number , gear : number ){
        super(name , speed , id)
        this.gear = gear
    }
}
const bicycle = new Bicycle("meo" , 60 , 1 , 4);
bicycle.showSpeed()
console.log("tốc độ giảm: 10" );
bicycle.slowDown(10);
bicycle.showSpeed()
console.log("tốc độ tăng: 30" );
bicycle.speedUp(40);
bicycle.showSpeed()



