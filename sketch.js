let s
let testatroid
function setup() {
  createCanvas(400, 400)
  s = new ship (200, 200)
   testatroid = new Asteroid(200, 200, 0, 0)
}
function draw() {
  background(220);
     testatroid.update()
   testatroid.display()
  s.update()
  s.display()
  if(keyIsDown(65)){
   s.turn(-0.1) 
  }
  if(keyIsDown(68)){
       s.turn(0.1)
  }
  if(keyIsDown(87)){
       s.boost()
  }
 //console.log(keyCode)
}
function keyPressed(){
  if(key == " "){
    s.shoot()
    console.log("blasted")
  }
}