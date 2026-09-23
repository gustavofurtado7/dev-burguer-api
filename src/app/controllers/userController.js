import { v4 } from 'uuid'
import * as Yup from 'yup'
import User from '../models/User.js'
import bcrypt from 'bcrypt'

class UserController {
    async store(req, res) {

        try {


            const schema = Yup.object({
                name: Yup.string().required(),
                email: Yup.string().email().required(),
                password: Yup.string().min(6).required(),
                admin: Yup.boolean()
            })

            schema.validateSync(req.body, {
                abortEarly: false,
                strict: true
            })


            const { name, email, password, admin } = req.body


            const existingUser = await User.findOne({
                where: {
                    email
                }
            })

            if (existingUser) {
                return res.status(400).json({
                    message: 'Email already taken!'
                })
            }

            const password_hash = await bcrypt.hash(password, 10)


            const user = await User.create({
                id: v4(),
                name,
                email,
                password_hash,
                admin
            })


            return res.status(201).json({
                id: user.id,
                name: user.name,
                email: user.email,
                admin: user.admin
            })

        } catch (err) {

            console.log(err)

            return res.status(400).json({
                error: err.message
            })
        }
    }
}

export default new UserController()