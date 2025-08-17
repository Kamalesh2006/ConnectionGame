import express from 'express';
import { sequelize } from './config/database.js';

const app = express();
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// TODO: Add routes

const PORT = process.env.PORT || 5001;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
