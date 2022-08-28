class Shapes {
  constructor(x, y, sz, i) {
    this.x = x;
    this.y = y;
    this.sz = sz;
    this.i = i;
    this.opacity = 255;
    this.forma = [this.sqr, this.circ, this.tri];
    this.time = 0
  }

  display(strokeColor,fusionMethod,filler) {
    push();
    blendMode(fusionMethod)
    fill(filler,this.opacity);
    // strokeWeight(3);
    stroke(strokeColor);
    this.forma[this.i](this.x, this.y, this.sz);
    pop();
  }

  sqr(x, y, sz) {
    rectMode(CENTER)
    rect(x, y, sz, sz);
  }

  circ(x, y, sz) {
    ellipse(x, y, sz, sz);
  }

  cross(x, y, sz) {
    line(x-sz/2, y-sz/2, x + sz / 2, y + sz / 2);
    line(x + sz / 2, y-sz/2, x-sz/2, y + sz / 2);
  }
  
  tri(x,y,sz){
    triangle(x,y-sz/2,x-sz/2,y+sz/2,x+sz/2,y+sz/2);
  }
  
  pulse(){
    this.time++;
    this.sz = this.sz+2*sin(this.time/10);
  }
  
  decolor(){
    if(mouseIsPressed === true){
      this.opacity = min(this.opacity + 10, 255)
    } 
    
  }
}
