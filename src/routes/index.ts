import express from 'express';
import imageProcessing from './api/imageProcessing';

//
const routes = express.Router();

routes.use('/imageProcessing', imageProcessing);

//
export default routes;
