const { attributes } = require('structure');

const User = attributes({
  name: String,
  age: {
    type: Number,
    default: 18,
  },
  birthday: Date,
})(
  class User {
    greet() {
      return `Hello ${this.name}`;
    }
  }
);



const user = new User({
  name: 'John Foo',
});

user.name; 
user.greet(); 