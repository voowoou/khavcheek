import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './src/routes/routes.js';

const PORT = process.env.PORT || 5001;

const app = express();

app.use(cors());
app.use('/api', router);

app.listen(PORT, () => console.log('server is working'));
