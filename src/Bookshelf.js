function Bookshelf(maxBooks){
  this.books = [];
  this.maxBooks = maxBooks || 10;
}

Bookshelf.prototype.addBook = function(book){
  if (this.books.length < this.maxBooks) {
    this.books.push(book);
  } else {
    return 'Ooops, not enough room to add book, book was not added';
  }
}
