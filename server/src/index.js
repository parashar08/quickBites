import dotenv from 'dotenv';
import connectDB from './config/database.js';
import app from './app.js';

dotenv.config({
  path: '.env',
});

const PORT = process.env.PORT || 8000;

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
