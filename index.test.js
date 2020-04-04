const greeter = require('./index.js');

console.log('Starting tests');

const resOne = greeter();
if (resOne !== 'Hello, User!') {
  throw new Error('greet not working with default aregument!');
}

const resTwo = greeter('Andrew');
if (resTwo !== 'Hello, Andrew!') {
  throw new Error('greet not working with name aregument!');
}