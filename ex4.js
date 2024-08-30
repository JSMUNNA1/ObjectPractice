//Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
//Already read 'Bill Gates' by The Road Ahead.
//Already read 'Steve Jobs' by Walter Isaacson.
//You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

var library = [ 
  {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true
  },
  {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      readingStatus: true
  },
  {
      author: 'Suzanne Collins',
      title:  'Mockingjay: The Final Book of The Hunger Games', 
      readingStatus: false
  }];

    library.forEach((books)=>{
             if(books.readingStatus)
            console.log(`Already read '${books.author}' by ${books.title}`)
              else
              console.log(`You still need to read '${books.title}' by ${books.author}`);
              
    })

