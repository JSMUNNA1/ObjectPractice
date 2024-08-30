function printAllProperty(obj){

  const obj1=Object.getOwnPropertyNames(obj).filter(function(x){
    return typeof obj[x] == "function";
  });
      return  obj1;


}

console.log(printAllProperty( Array));

// console.log({}?1:2);

