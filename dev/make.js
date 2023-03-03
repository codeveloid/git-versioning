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

/* The attributes "wraps" the Class, still providing access to its methods: */

const user = new User({
  name: 'John Foo',
});

user.name; // 'John Foo'
user.greet(); // 'Hello John Foo'