import { Router } from 'express';
import sessionController from './app/controllers/SessionController.js';
import userController from './app/controllers/UserController.js';

const routes = new Router();

routes.post('/users', userController.store);
routes.post('/session', sessionController.store);

export default routes;
