import { Router } from 'express';
import sessionController from './app/controllers/SessionController.js';
import userController from './app/controllers/UserController.js';
import ProductController from './app/controllers/ProductController.js';

const routes = new Router();

routes.post('/users', userController.store);
routes.post('/session', sessionController.store);
routes.post('/products', ProductController.store)

export default routes;
