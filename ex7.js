function subset(){
  let arr=[]
  for(let i=0;i<this.length;i++){
    for(let j=i+1;j<this.length+1;j++){
        
        arr.push(this.slice(i,j));
        
    }
}
   return arr;

}

String.prototype.subSet=subset;
console.log("Munna".subSet());
