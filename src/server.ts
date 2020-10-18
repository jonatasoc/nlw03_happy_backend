import express from 'express';
<<<<<<< HEAD
import 'express-async-errors';
import path from 'path';

=======
>>>>>>> parent of a98f085... Serving upload folder
import './database';
import routes from './routes';
import errorHandler from './erros/handler';


const app = express();

app.use(express.json());

app.use(routes);

<<<<<<< HEAD
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.use(errorHandler);

=======
>>>>>>> parent of a98f085... Serving upload folder
app.listen(3333, () => {
  console.log("Server Started!");
})
