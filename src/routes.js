import { Router } from "express";
import User from "./app/models/user";
import { v4 } from "uuid";


const routes = new Router()

routes.get('/', async (req, res) =>{
    const user = { 
        id: v4(),
        name: 'Henrique',
        email: 'henrique@email.com',
        password_hash: '12345',
        admin: false
    }
     await User.create(user);

    res.status(201).json(user)
})

export default routes