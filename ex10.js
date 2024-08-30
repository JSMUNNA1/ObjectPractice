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

var sort_by = function(field_name, reverse, initial){
 // console.log(initial);
    var key = initial ?
      function(x)
            {
                //console.log(initial(x[field_name]));
                
              return initial(x[field_name]);
            } :
      function(x) 
            {
               console.log("mm");
               
              return x[field_name];
            };
  reverse = !reverse ? 1 : -1;
  //console.log(reverse);
  
  return function (x, y) {
    x = key(x), y = key(y)
    return reverse * ((x > y) - (y > x));
    } ;
};


var newobj = library.sort(sort_by('libraryID', true, parseInt));

console.log(newobj);
