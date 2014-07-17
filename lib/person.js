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
};

personApp.Person.prototype.removeFriend = function(friendFullName) {
  removeIndex = -1;
  this.friends.forEach(function(friend, index) {
    console.log(friendFullName);
    console.log(index);
    console.log(friend);
    if (friend.fullName() === friendFullName)
      removeIndex = index;
  });
  if (removeIndex != -1)
    delete this.friends[removeIndex];
};

// needs no friends error check
personApp.Person.prototype.greetPeople = function(options)  {
  var _options = options || {};
  var friends = [];
  this.friends.forEach(function(person) {
      console.log(person.fullName());
       friends.push(person.fullName());
  });

  var people = _options.people || friends;
  if (people.length === 0)
    throw new Error('No friends, no one to greet!');

  var greeting = _options.greeting || 'Hi';

  var result = "";
  people.forEach(function(person) {
    result += (greeting + ', ' + person + '!\n');
  });

  return result;


};


jake = new personApp.Person('Jake', 'Austin');
neal = new personApp.Person('Neal', 'Stephenson');
bob = new personApp.Person('Bob', 'Burger');

jake.addFriend(neal);
jake.addFriend(bob);

jake.removeFriend('Neal Stephenson');
