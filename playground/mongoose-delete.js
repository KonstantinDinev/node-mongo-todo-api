const {mongoose} = require('./../server/db/mongoose');

const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Removes all
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5bfe53e9680b00625df5478b'}).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('5bfe53e9680b00625df5478b').then((todo) => {
  console.log(todo);
  if (!todo) {
    return res.status(404).send();
  }

  res.send(todo);
}).catch((e) => {
  res.status(400).send();
});
