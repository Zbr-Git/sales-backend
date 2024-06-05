import 'dotenv/config';
import express from 'express';
import allRoutes from './routes/index.js';
import { connectionDB } from './db/config.js';
import syncDB from './db/init.js';

const app = express();
app.use(express.json());

connectionDB();
syncDB().then(() => console.log('db synced'));

// All routes
app.use(allRoutes);

app.listen(3000, () => {
  console.log(`Server listening on 3000`);
});
