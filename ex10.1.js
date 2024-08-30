var library = [ 
  {
      title: 'Bill Gates',
      author: 'The Road Ahead',
      libraryID: 1254
  },
  {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      libraryID: 4264
  },
  {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      libraryID: 3245
  }];

function sortByProperty(property){
   function item(x){
           return x[property];
   }
   return function(x,y){
             return item(x)-item(y);  
   }

}
  
library.sort(sortByProperty('libraryID'));
console.log(library);
