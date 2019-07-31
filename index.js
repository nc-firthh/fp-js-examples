const { forEach, map, multiply } = require('lodash/fp');

// Impure example
(() => {
  let user = { age: 20 };

  function getOlder() {
    user.age += 1;
    return user;
  }

  getOlder();

  console.log(user.age);
})();

// Pure example
(() => {
  const user = { age: 20 };

  function getOlder(user) {
    const age = user.age + 1;
    return Object.assign({}, user, { age });
  }

  const olderUser = getOlder(user);

  console.log(olderUser.age);
})();

// Imperative example
(() => {
  var array = [1, 2, 3];
  var newArray = [];
  var i;

  for (i = 0; i < array.length; i++) {
    var doubledValue = array[i] * 2;
    console.log(doubledValue);
    newArray.push(doubledValue);
  }

  console.log(newArray); // [ 2, 4 ,6 ]
})();

// Declarative example
(() => {
  const array = [1, 2, 3];
  const double = multiply(2);
  const doubleArray = map(double);
  const logEach = forEach(console.log);

  const newArray =
    array
    |> doubleArray
    |> logEach;

  console.log(newArray); // [ 2, 4 ,6 ]
})();
