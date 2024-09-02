const obj={
      name:"munna",
      class:"Ec1",
}
  const obj2={}
for(let [key,value] of Object.entries(obj)){
  console.log(key,value);
  
      obj2[value]=key
}
console.log(obj2);
