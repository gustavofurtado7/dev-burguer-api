import * as Yup from "yup";
import Product from "./../models/Product.js";
import Category from "./../models/Category.js";

class ProductController {
  async store(req, res) {
    const schema = Yup.object({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category_id: Yup.number().required(),
    });

    try {
      schema.validateSync(req.body, { abortEarly: false, strict: true });
    } catch (error) {
      return res.status(400).json({ error: error.errors });
    }

    const { name, price, category_id } = req.body;
    const { filename } = req.file;

    const newProduct = await Product.create({
      name,
      price,
      category_id,
      path: filename,
    });

    return res.status(201).json({ newProduct });
  }

  async index(_req, res) {
    const products = await Product.findAll({
      include: {
        model: Category,
        as: "category",
        attributes: ["id", "name"],
      },
    });

    return res.status(200).json(products);
  }
}

export default new ProductController();
