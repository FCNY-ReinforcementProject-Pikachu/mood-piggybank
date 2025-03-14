import path from 'path'
import express, { Request, Response, NextFunction } from 'express'
import bankController from './controllers/bankController'
import authController from './controllers/authController'
const PORT = 8080
const app = express()
const __dirname = path.resolve()
import cors from 'cors'; // Import CORS

/**
 * handle parsing request body
 */
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
// app.use(express.static(path.resolve(__dirname, '../client')));

app.post( '/signup', authController.signup)
app.post('/login', authController.login);

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Hello World!');
  });

app.post('/deposit', bankController.deposit);
app.post('/withdraw', bankController.withdraw);
// app.use('*', (_req: Request, res: Response): Response<any> => {
//   return res.status(404).send('This is not the page you\'re looking for...');
// });

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });
  
export default app;
  