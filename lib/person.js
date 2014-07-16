var personApp = personApp || {};

// weight in kg
//height in cm
personApp.Person = function(firstName, lastName, options) {
    this.firstName = firstName;
    this.lastName = lastName;
    var _options = options || {};
    this.age = _options.age || 30;
    this.weight = _options.weight || 80;
    this.height  = _options.height || (Math.round(Math.random() * 50) + 150);
    this.friends = _options.friends || [];
};

personApp.Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

personApp.Person.prototype.weightInStone = function() {
  return this.weight * 0.157473;
};

personApp.Person.prototype.addFriend = function(friend) {
  this.friends.push(friend);
  console.log(this.friends);
};

personApp.Person.prototype.removeFriend = function() {

};

personApp.Person.prototype.greetPeople = function(greeting)  {

};
