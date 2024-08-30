function Volume(hight,radius){
    this.radius=radius;
    this.hight=hight;
     
}
function  getVolume(){
  return `volume is:${(Math.PI*this.hight*this.radius).toFixed(4)}`
}

Volume.prototype.getVolume=getVolume

 
console.log(new Volume(22,21).getVolume());
