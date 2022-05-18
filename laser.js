class Laser{
 constructor(x, y, vx, vy){
    this.pos = createVector(x, y)
   this.vel = createVector(vx, vy)
   this.vel.setMag(10)
  }
update(){
  this.pos.add(this.vel)
}
  display(){
    fill(100, 100, 255)
    ellipse(this.pos.x, this.pos.y, 30, 30)
  }
}