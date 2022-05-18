class Asteroid{
  constructor(x, y, vx, vy){
    this.pos = createVector(x, y)
    this.vel = createVector(vx, vy)
    this.radius = random(20, 50)
    this.offsets = []
    for(let i = 0; i < 10; i++){
      this.offsets.push(random(0.5 * this.radius, 1.5 * this.radius))
    }
  }
  display(){
beginShape()
for(let i = 0; i < this.offsets.length; i++){
  let angle = map(i, 0, this.offsets.length, 0, TWO_PI)
  let x = cos(angle) * this.offsets[i] + this.pos.x
  let y = sin(angle)* this.offsets[i] + this.pos.y
  vertex(x, y)
}
endShape(CLOSE)
  }
  update(){
    this.pos.add(this.vel)
  }
}