//docs : https://www.npmjs.com/package/@cloudant/cloudant

const db = require("./db").db

//list all database
db.list().then(body => {
  body.forEach(element => {
    console.log(6,element)
  });
})

let test = "testdb"
// try{
//   db.create(test)
// }catch(e){}//Who does this?


let foo = db.use(test)
foo.insert({test:"test"}).then(body =>{
  console.log(18, body)
})

//callback example for index
var book_indexer = function(doc) {
  if (doc.author && doc.title) {
    // This looks like a book.
    index('title', doc.title);
    index('author', doc.author);
  }
}

//example document format
let ddoc = {
  _id: '_design/library',
  indexes: {
    books: {
      analyzer: {name: 'standard'},
      index   : book_indexer
    }
  }
};
 
//format for inserting into foo

// foo.insert(ddoc, function (err, result) {
//   if (err) {
//     throw err;
//   }
 
//   console.log('Created design document with books index');
// });


foo.search('library', 'books', { q: 'author:dickens' }, function(err, result) {
  if (err) {
    throw err;
  }
 
  console.log('Showing %d out of a total %d books by Dickens', result.rows.length, result.total_rows);
  for (var i = 0; i < result.rows.length; i++) {
    console.log('Document id: %s', result.rows[i].id);
  }
});