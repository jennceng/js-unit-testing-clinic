describe('Bookshelf', function(){
  var firstBookshelf;
  var smallBookshelf;
  var slaughterhouseFive;

  beforeEach(function() {
    firstBookshelf = new Bookshelf();
    smallBookshelf = new Bookshelf(5);
    slaughterhouseFive = new Book('Slaughterhouse Five', 'Kurt Vonnegut');
  });

  describe('new Bookshelf()', function(){

    it('accepts a maximum book number as an artument', function(){
      expect(smallBookshelf.maxBooks).toBe(5);
    });

    it('has a default maximum number of books of 10 if no max is specified', function(){
      expect(firstBookshelf.maxBooks).toBe(10);
    });

    it('has a property of books that is intialized as an empty array', function(){
      expect(firstBookshelf.books).toEqual([]);
    });
  });

  describe('#addBook to add a book object to the bookshelf books array', function() {
    it('adds a book to the bookshelf when it has fewer than max books', function(){
      firstBookshelf.addBook(slaughterhouseFive);
      expect(firstBookshelf.books[0]).toBe(slaughterhouseFive);
    });

    it('returns a string that warns the bookshelf is full and the book is not added', function(){
      for(var i = 0; i < smallBookshelf.maxBooks; i++) {
        smallBookshelf.addBook(slaughterhouseFive);
      };

      var catcherInTheRye = new Book('Catcher In The Rye', 'JD Salinger');
      expect(smallBookshelf.addBook(catcherInTheRye)).toBe('Ooops, not enough room to add book, book was not added');
      expect(smallBookshelf.books.indexOf(catcherInTheRye)).toEqual(-1);
    })
  });

})
