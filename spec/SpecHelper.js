beforeEach(function () {
  jasmine.addMatchers({
    nameBeginsWith: function () {
      return {
        compare: function (actual, expected) {
          var newPerson = actual;

          return {
            pass: newPerson.name[0] === expected && (newPerson instanceOf Person)
          };
        }
      };
    }
  });
});
