const mongoose = require('mongoose')
const { Schema } = mongoose

mongoose.connect('mongodb://localhost/students', {useNewUrlParser: true, useUnifiedTopology: true})

const studentsSchema = {
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: Number,
    enum: [0, 1],
    default: 1
  },
  hobbies: {
    type: String
  }
}

const Student = mongoose.model('Student', studentsSchema)
module.exports = Student