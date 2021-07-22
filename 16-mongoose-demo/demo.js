const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Cat = mongoose.model('Cat', { name: String });

for (let i = 0; i < 100; i++) {
  const kitty = new Cat({ name:  `cat${i}` });
  kitty.save().then(() => console.log('meow'));
}
