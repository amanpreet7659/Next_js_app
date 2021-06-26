import Product from '../../../models/product'

export default async (req, res) => {
    switch (req.method) {
        case 'GET':
            {
                await getProduct(req, res)
                break
            }
        case 'DELETE':
            {
                await deleteProduct(req, res)
            }
    }

}

const getProduct = async (req, res) => {
    const { pid } = req.query
    const product = await Product.findOne({ _id: pid })
    res.status(200).json(product)
    res.send("done")
}

const deleteProduct = async (req, res) => {
    const { pid } = req.query
    await Product.findOneAndDelete({ _id: pid })
    res.status(200).json({})
    res.send("done")
}