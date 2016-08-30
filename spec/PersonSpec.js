describe('Person', function() {
  describe('new Person()', function() {
    it('takes an argument for the name', function() {
      var eben = new Person('Eben');

      expect(eben).toBeDefined();
      expect(eben.name).toBe('Eben');
    });

    it('allows name to be an optional argument which defaults to Jane Doe', function() {
      var anonymous = new Person();

      expect(anonymous).toBeDefined();
      expect(anonymous.name).toBe('Jane Doe');
    });

    it('returns true when checking instance prototype', function() {
      var chelsea = new Person("Chelsea");
      var jesse = new Person("Jesse");

      expect(chelsea instanceof Person).toBe(true);
    });

    it('returns false when using the object literal with the same properties', function(){
      var jesse = {
        name: "Jesse",
        greet: function(){
          return this.name + " says hello!";
        }
      };

      expect(jesse instanceof Person).toBe(false);
    })
  });

  describe('greet()', function() {
    it('returns a string with a greeting that includes the persons name', function() {
      var nick = new Person('Nick');

      expect(nick.greet()).toBe('Nick says hello!');
    });

    it('does not belong to the individual instance of Person', function(){
      var nick = new Person('Nick');

      expect(nick.hasOwnProperty("greet")).toBe(false);
    })
  });

});
