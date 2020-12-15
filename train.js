class Train {
  
  constructor(){
    this.r=100;
    this.width=width;
    this.height=height-this.r;
    
  }
  move(){
    this.x -= 3;
  }
  show(){
    image(this.image,Img,this.x,this.y,this.r,this.r);
  }
}