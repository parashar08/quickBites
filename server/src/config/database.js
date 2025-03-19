const mongoose = require('mongoose');

async function connectDB() {
  await mongoose.connect(
    'mongodb+srv://the69bit:3kNQYhFGoYVFnUsg@quickcluster.smbb5.mongodb.net/quickDB'
  );
}

module.exports = connectDB;
