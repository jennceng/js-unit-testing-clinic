describe('Book', function(){
  describe('new Book()', function(){
    it('takes in a title and author as arguments', function(){
      var slaughterhouseFive = new Book('Slaughterhouse Five', 'Kurt Vonnegut');

      expect(slaughterhouseFive).toBeDefined();
      expect(slaughterhouseFive.title).toBe('Slaughterhouse Five');
      expect(slaughterhouseFive.author).toBe('Kurt Vonnegut');
    })
  })
})
