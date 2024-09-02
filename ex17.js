function ex17(obj,property){
    if(property in obj){
          return "yes"
    }
     return "No"
}

console.log(ex17({munna:"mj",k:"cj"},"k"));
