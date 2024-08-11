const authors = require("./authors.json");
const books = require("./books.json");


function getBookById(bookId, books) {
  return books.filter(book=> book.id === bookId)[0]

}
// console.log(getBookById(12, books)); // done

function getAuthorByName(authorName, authors) {
  return authors.filter(author=> author.name.toLowerCase() == authorName.toLowerCase())[0]
}
// console.log(getAuthorByName("J.K. Rowling", authors)); // done

function bookCountsByAuthor(authors) {
  return authors.map(author=>{
    return {author: author.name, bookCount: author.books.length}
  })
}
// console.log(bookCountsByAuthor(authors)); //done

function booksByColor(books) {
  const colors = {};
  books.forEach(book => {
    if(!colors[book.color]){
      colors[book.color] = []
    }
    colors[book.color].push(book.title)
    
  });

  return colors;
}
// console.log(booksByColor(books)); //done

function titlesByAuthorName(authorName, authors, books) {
  const author = getAuthorByName(authorName, authors)
  return books.filter(book=> author.books.includes(book.id)).map(book=>book.title)
}
// console.log(titlesByAuthorName("George R.R. Martin", authors, books)); //done

function mostProlificAuthor(authors) {
  // Your code goes here
  let maxBooks = 0
  let mostProlificAuthor = ""
  authors.forEach(author=>{
    if(maxBooks < author.books.length){
      maxBooks = author.books.length
      mostProlificAuthor = author.name
    }
  })
  return mostProlificAuthor
}
// console.log(mostProlificAuthor(authors)); //done

function relatedBooks(bookId, authors, books) {
  const book = getBookById(bookId, books)
  const bookAuthors = book.authors
  const authorsBooks = []
  bookAuthors.forEach(author=>{
    // const authorName = getAuthorByName(author.name, authors)
    const authorTitles = titlesByAuthorName(author.name, authors, books)
    authorTitles.forEach(book=>!authorsBooks.includes(book) && authorsBooks.push(book))
  })
  return authorsBooks
}

// console.log(relatedBooks(46, authors, books)); //done + bonus

/**************************************************************
 * friendliestAuthor(authors):
 * - receives a list of authors
 * - returns the name of the author that has
 *   co-authored the greatest number of books
 ****************************************************************/
function friendliestAuthor(authors) {
  // Your code goes here
}
// console.log(friendliestAuthor(authors));

module.exports = {
  getBookById,
  getAuthorByName,
  bookCountsByAuthor,
  booksByColor,
  titlesByAuthorName,
  mostProlificAuthor,
  relatedBooks,
  friendliestAuthor,
};
