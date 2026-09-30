import * as Yup from 'yup'
import Category from '../models/Category.js'
import { response } from 'express'

class CategoryController {
    async store(req, res) {
        const schema = Yup.object({
            name: Yup.string().required(),
        })

        try {
            schema.validateSync(req.body, { abortEarly: false, strict: true })
        } catch (error) {
            return res.status(400).json({ error: error.errors })
        }

        
        const { name } = req.body;

        const existingCategory = await Category.findOne({
            where: {
                name
            }
        })

        if(existingCategory){
            return response.status(400).json({error: 'Category already exists'})
        }

        const newCategory = await Category.create({
            name,
        });


        return res.status(201).json({newCategory})
    }

    async index(_req, res) {
        const categories = await Category.findAll()

        return res.status(200).json(categories)
    }
}

export default new CategoryController()