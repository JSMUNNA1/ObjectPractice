function getOwnProperty(obj){
    return Object.keys(obj)
}

function A(name,clas){
     this.name=name;
     this.clas=clas;
    
}

function B(rollno,name,clas){
     A.call(this,rollno,name)
     this.rollno=rollno
}
function extendss(child,parent){
         child.prototype=Object.create(parent.prototype);
         child.prototype.constructor=child;
}

extendss(B,A);
const a=new B(2105,"munna","EC1")
 console.log(a);


 console.log(Object.keys(a));
 
 