import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './src/routes/routes.js';
import { connect } from 'mongoose';

const PORT = process.env.PORT || 5001;
const DB_URL = process.env.DB_URL;

if (!DB_URL) throw new Error('DB_URL is not defined');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);

const startApp = async () => {
  try {
    await connect(DB_URL);
    app.listen(PORT, () => console.log('server is working'));
  } catch (e) {
    console.log(e);
  }
};

startApp();
