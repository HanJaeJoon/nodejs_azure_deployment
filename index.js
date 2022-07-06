import express from 'express';
import 'dotenv/config';

const PORT = process.env.PORT || 9090;

const app = express();

app
  .get('/', async (req, res) => {
    res.send(process.env.TEST || 'nothing!');
  })
  .use(express.json())
  .listen(PORT, () => console.log(`Listening on ${PORT}`));