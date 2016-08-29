function Person(name) {
  this.name = name || "Jane Doe";
}

Person.prototype.greet = function(){
  return this.name + " says hello!"
}
