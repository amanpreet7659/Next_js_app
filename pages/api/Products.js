import initDB from "../../helpers/initDB"
import Product from "../../models/product";

initDB();
export default async (req, res) => {
    switch (req.method) {
        case "GET": {
            await getAllProducts(req, res)
            break
        }
        case "POST":
            {
                await saveProduct(req, res)
                break
            }
    }
}
// product.find().then(products => {
//     res.status(200).json(products)

const getAllProducts = async (req, res) => {
    Product.find().then(products => {
        res.status(200).json(products)
    })
}

const saveProduct = async (req, res) => {
    console.log(req.body);
    const { name, price, mediaUrl, description } = req.body
    if (!name || !price || !description || !mediaUrl) {
        return res.status(422).json({ error: "Please fill all Details" })//Apropriate data not Received
    }
    const product = await new Product({
        name, price, description, mediaUrl
    }).save()
    res.status(200).json(product)
}