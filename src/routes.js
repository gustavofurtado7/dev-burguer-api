import { Router } from 'express';
import sessionController from './app/controllers/SessionController.js';
import userController from './app/controllers/UserController.js';
import ProductController from './app/controllers/ProductController.js';
import multer from 'multer';
import multerConfig from './config/multer.cjs';
import authMiddleware from './middlewares/auth.js';


const routes = new Router();

const upload = multer(multerConfig)

routes.post('/users', userController.store);
routes.post('/session', sessionController.store);


routes.use(authMiddleware)
routes.post('/products', upload.single('file') ,ProductController.store)
routes.get('/products', ProductController.index);

routes.post('/categories', ProductController.store)
routes.get('/categories', ProductController.index);

export default routes;
