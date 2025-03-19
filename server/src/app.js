const express = require('express');
const connectDB = require('./config/database');

const app = express();

const PORT = 3000;

connectDB()
  .then(() => {
    console.log('Database connection established...');
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT: ${PORT}`);
    });
  })
  .catch(() => {
    console.error('Database cannot be connected!!');
  });
