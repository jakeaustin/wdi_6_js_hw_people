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

// If multiple friends have the same name, will remove ALL
personApp.Person.prototype.removeFriend = function(friendFullName) {
  removeIndex = -1;
  this.friends.forEach(function(friend, index) {
    if (friend.fullName() === friendFullName)
      removeIndex = index;
  });
  if (removeIndex != -1)
    delete this.friends[removeIndex];
};

personApp.Person.prototype.greetPeople = function(options)  {
  var _options = options || {};
  var greeting = _options.greeting || 'Hi';
  var people = _options.people || this.friends;

  if (people.length === 0)
    throw new Error('No friends, no one to greet!');

  var result = "";
  people.forEach(function(person) {
    result += (greeting + ', ' + person.fullName() + '!\n');
  });

  return result;
};


jake = new personApp.Person('Jake', 'Austin');
neal = new personApp.Person('Neal', 'Stephenson');
bob = new personApp.Person('Bob', 'Burger');

jake.addFriend(neal);
jake.addFriend(bob);

jake.removeFriend('Neal Stephenson');
jake.greetPeople();
jake.greetPeople({greeting: 'Yo'});
jake.greetPeople({people: [neal, neal], greeting: 'Yo'});
