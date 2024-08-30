class A{
     static class1="Ec1"
     constructor(sub,lecture){
          this.sub=sub;
          this.lecture=lecture;
          
     }
}

class B extends A{
         constructor(rollno,name,sub,lecture){
              super(sub,lecture)
              this.rollno=rollno;
              this.name=name
         }     
}
  const ab=new B(2105,"Munna","English",'paranv Tank')
console.log(ab);
