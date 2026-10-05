import { Router } from 'express';
import sessionController from './app/controllers/SessionController.js';
import userController from './app/controllers/UserController.js';
import ProductController from './app/controllers/ProductController.js';
import OrderController from './app/controllers/OrderController.js';
import multer from 'multer';
import multerConfig from './config/multer.cjs';
import authMiddleware from './app/middlewares/auth.js';
import adminMiddleware from './app/middlewares/admin.js';



const routes = new Router();

const upload = multer(multerConfig)

routes.post('/users', userController.store);
routes.post('/sessions', sessionController.store);


routes.use(authMiddleware)
routes.post('/products', adminMiddleware ,upload.single('file') ,ProductController.store)
routes.put('/products/:id', adminMiddleware ,upload.single('file') ,ProductController.update)
routes.get('/products', ProductController.index);

routes.post('/categories', adminMiddleware ,upload.single('file') ,ProductController.store)
routes.put('/categories/:id', adminMiddleware ,upload.single('file') ,ProductController.update)
routes.get('/categories', ProductController.index);

routes.post('/orders', OrderController.store)
routes.get('/orders', OrderController.index)
routes.put('/orders/:id', adminMiddleware , OrderController.update)

export default routes;
