import dotenv from 'dotenv';
import connectDB from './config/db.js';
import app from './app.js';

dotenv.config({
  path: './.env',
});

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Application is running on PORT : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('ERROR :', error);
  });
