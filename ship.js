class ship{
  constructor(x, y){
    this.dir = PI
    this.speed = 1
      this.acc = createVector(0, 0)
    this.vel = createVector(0, 0)
    this.pos = createVector(x, y)
    this.bullets = []
  }
turn(amount){
    this.dir += amount
  }
  boost(){
    let force = createVector(1, 0)
    force.rotate(this.dir)
    this.acc.add(force)
  }
  shoot(){
this.bullets.push(new Laser(this.pos.x, this.pos.y, cos(this.dir), sin(this.dir)))
  }
  display(){
    push()
    translate(this.pos.x, this.pos.y)
    rotate(this.dir)
    triangle(0, 20, 0, -20, 40, 0)
    // triangle(width, 20, width, -20, width + 40, 0)
    // triangle(0, height + 20, 0,height -20, 40, height)
    // triangle(-width, 20, -width, -20,-width + 40, 0)
    // triangle(0,-height + 20, 0,-height -20, 40,-height)

    pop()
    for(let i = 0; i < this.bullets.length; i++){
      this.bullets[i].display()
    }
  }
  update(){
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.vel.mult(0.98)
    this.acc.mult(0)
   for(let i = this.bullets.length - 1; i >= 0; i--){
     this.bullets[i].update()
     if(this.bullets[i].pos.x > width ||this.bullets[i].pos.x < 0||
       this.bullets[i].pos.y > height || this.bullets[i].pos.y < 0){
       this.bullets.splice(i, 1)
       
     }
   }
    
 //   if(this.pos.x < 0)
  }
}