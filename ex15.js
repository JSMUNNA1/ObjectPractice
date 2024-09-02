const obj={name:"munna",classs:"EC1"};
function ObjToArrayKeyvalue(obj){
           
          const arr=[]
        
          for(let key in obj){
                 arr.push([key,obj[key]])
                 
                 
          }
          console.log(arr);
          
}
ObjToArrayKeyvalue(obj)
