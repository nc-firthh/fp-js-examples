const { forEach, map, multiply, pipe } = require('lodash/fp');

// Impure example
const impure = (user) => {
  function getOlder() {
    user.age += 1;
    return user;
  }

  getOlder();

  console.log(user.age);
  return user;
};

// Pure example
const pure = (user) => {
  function getOlder(user) {
    const age = user.age + 1;
    return Object.assign({}, user, { age });
  }

  const olderUser = getOlder(user);

  console.log(olderUser.age);
  return olderUser;
};

// Imperative example
const imperative = (array, logFirst = false) => {
  var newArray = [];
  var i;

  for (i = 0; i < array.length; i++) {
    var doubledValue = array[i] * 2;

    if (logFirst) {
      console.log(array[i]);
    } else {
      console.log(doubledValue);
    }

    newArray.push(doubledValue);
  }

  return newArray;
};

// Declarative example
const declarative = (array) => {
  const double = multiply(2);
  const doubleArray = map(double);
  const logEach = forEach(console.log);

  const doubleAndLog = pipe(
    doubleArray,
    logEach,
  );

  return doubleAndLog(array);
};


impure({ age: 20 });
pure({ age: 20 });
imperative([1, 2, 3], true);
declarative([1, 2, 3]);
