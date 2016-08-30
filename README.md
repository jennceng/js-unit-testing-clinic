### Jasmine Test Suite

Very similar to RSpec for ruby: <http://jasmine.github.io/2.0/introduction.html>

---

### Pre-defined Matchers
* list is taken from [Testing JS using Jasmine](http://www.htmlgoodies.com/beyond/javascript/testing-javascript-using-the-jasmine-framework.html)

* `toBe`: represents the exact equality (===) operator.
* `toEqual`: represents the regular equality (==) operator.
* `toMatch`: calls the RegExp match() method behind the scenes to compare string data.
* `toBeDefined`: opposite of the JS "undefined" constant.
* `toBeUndefined`: tests the actual against "undefined".
* `toBeNull`: tests the actual against a null value - useful for certain functions that may return null, like those of regular expressions (same as toBe(null))
* `toBeTruthy`: simulates JavaScript boolean casting.
* `toBeFalsy`: like toBeTruthy, but tests against anything that evaluates to false, such as empty strings, zero, undefined, etc…
* `toContain`: performs a search on an array for the actual value.
* `toBeLessThan`/`toBeGreaterThan`: for numerical comparisons.
* `toBeCloseTo`: for floating point comparisons.
* `toThrow`: for catching expected exceptions.

---

### Book

* it takes a title and author as arguments

---

### Bookshelf

* accepts an optional argument of maxBooks, defaults to 10
* initialized with a Books property which starts as an empty Array
* has a method, addBook, which adds a book to the books array if not at maxBooks

* if already at maxBooks, returns some sort of string letting you know something went wrong, and book is not added

---

A lot of things will be similar to between RSpec and Jasmine, such as (although in RSpec you would probably use let for something like this)

```ruby
# RSpec
before(:each) do
    first_bookshelf = Bookshelf.new;
    small_bookshelf = Bookshelf.new(5);
    slaughterhosue_five = Book.new('Slaughterhouse Five', 'Kurt Vonnegut');
end
```

```javascript
// Jasmine
  var firstBookshelf;
  var smallBookshelf;
  var slaughterhouseFive;

  beforeEach(function() {
    firstBookshelf = new Bookshelf();
    smallBookshelf = new Bookshelf(5);
    slaughterhouseFive = new Book('Slaughterhouse Five', 'Kurt Vonnegut');
  });
```

---

### Person

* I want to create a constructor, Person, that has a property of name

* it accepts an optional argument for name, if none is provided it defaults to Jane Doe

* Any new objects defined using the Person constructor should be an instanceof Person
* Person should have a greet function that states the person’s name “ says hello”
* an object that has the same properties created with an object literal should not be an instance of Person

```ruby
# RSpec
describe Person do
  describe('#new') do
    it 'takes an optional argument of name' do
      nick = Person.new("nick")

      expect(nick).to_not eq nil
      expect(nick.name).to eq "nick"
    end

    it 'defaults to a name of Jane Doe if no argument given' do
      anonymous = Person.new

      expect(anonymous).to_not eq nil
      expect(anonymous.name).to eq "Jane Doe"
    end

    it 'creates an instance of Person' do
      anonymous = Person.new

      expect(anonymous.instance_of?(Person)).to eq true
    end
  end

  describe('greet') do
    it('returns a string with a greeting that includes the persons name') do
      nick = Person.new("Nick")

      expect(nick.greet).to eq 'Nick says hello!'
    end
  end
end
```

```javascript
// Jasmine equivalent (roughly)
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

  describe('greet()', function() {
    it('returns a string with a greeting that includes the persons name', function() {
      var nick = new Person('Nick');

      expect(nick.greet()).toBe('Nick says hello!');
    });
  });

});

```
