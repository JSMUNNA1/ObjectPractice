function ex6(){
       let n=this.length;
       for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(this[i]>this[j]){
                 let temp=this[i];
                 this[i]=this[j]
                 this[j]=temp;
            }
        }

       }
}
 Array.prototype.bubbleSort=ex6;
 const arr=[3,2,-1,8,6,-2] 
 arr.bubbleSort();
 console.log(arr);
 

