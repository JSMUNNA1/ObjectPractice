function Area(radius){
       this.radius=radius
}

Area.prototype.circle=function(){
        console.log(`Circle is:${(2*Math.PI*this.radius).toFixed(4)}`);
        
}
Area.prototype.area=function(){
  console.log(`Area is:${(Math.PI*this.radius*this.radius).toFixed(4)}`);
  
}

const obj=new Area(3);
obj.area()
obj.circle()