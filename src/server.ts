import dotenv from 'dotenv';
import app from './app';
import 'reflect-metadata';
import './database';

dotenv.config();

app.listen(process.env.PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log('🏃 Running Server');
});
