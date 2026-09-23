import { Router } from "express";
import userController from "./app/controllers/userController.js";


const routes = new Router()

routes.post('/users', userController.store)



export default routes