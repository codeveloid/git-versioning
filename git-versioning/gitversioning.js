const { attributes } = require('structure');

const User = attributes({
  name: String,
  age: {
    type: Number,
    default: 21,
  },
  birthday: Date,
})(
  class User {
    greet() {
      return `Hello ${this.muhammadrizalafnani}`;
    }
  }
);


const user = new User({
  name: 'John Foo',
});

user.muhammadrizalafnani; 
user.gree(); 