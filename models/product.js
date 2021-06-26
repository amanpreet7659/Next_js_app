import moongose from 'mongoose'

const productSchema = new moongose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    mediaUrl: {
        type: String,
        required: true
    }
})

export default moongose.models.product || moongose.model('product', productSchema)