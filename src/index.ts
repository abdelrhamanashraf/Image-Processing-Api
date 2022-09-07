import Express from 'express';
import routes from './routes/index';

const app = Express();
const port = 3000;

//

app.use('/api', routes);
app.get('/', (req: Express.Request, res: Express.Response): void => {
  res.redirect('/api/imageProcessing');
});
//
app.listen(port, () => {
  console.log('sever is up on http://localhost:3000/');
  console.log(
    'http://localhost:3000/api/imageProcessing?imagename=image1&width=123&hight=321'
  );
});
export default app;
