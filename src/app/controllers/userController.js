import { v4 } from 'uuid'
import * as Yup from 'yup'
import User from '../models/User.js'

class UserController {

    async store(req, res) {

        try {

            // Validação dos dados
            const schema = Yup.object({
                name: Yup.string().required(),
                email: Yup.string().email().required(),
                password_hash: Yup.string().min(6).required(),
                admin: Yup.boolean()
            })

            schema.validateSync(req.body, {
                abortEarly: false,
                strict: true
            })

            // Pegando os dados do body
            const { name, email, password_hash, admin } = req.body

            // Verifica se o email já existe
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

            // Cria o usuário
            const user = await User.create({
                id: v4(),
                name,
                email,
                password_hash,
                admin
            })

            // Retorna o usuário criado
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