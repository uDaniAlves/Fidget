import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(cors()); //Aberto para todos os frontends
app.use(express.json()); //MIDDLEWARE -> Antes de processar as rotas as req sao verificadas em JSON
app.use(routes);

app.listen(3333, () => {
  console.log('HTTP server runing');
});
