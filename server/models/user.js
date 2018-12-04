const mongoose = require('mongoose');
const validator = require('validator');

// {
//   email: 'some@example.com',
//   password: 'myPass123/hashing',
//   tokens: [{
//     access: 'auth',
//     token: 'dafewrt23rdalgewtwerg'
//   }]
// }


var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: (value) => {
        return validator.isEmail(value);
      },
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

module.exports = {User};
