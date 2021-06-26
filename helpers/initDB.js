//pass jcR71uY0dpkLJz55
//mongodb+srv://Aman_5851:<password>@cluster0.i2tf4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

import mongoose from "mongoose"


const initDB = () => {
    if (mongoose.connections[0].readyState) {
        console.log('Already connected to Database');
        return
    }
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    mongoose.connection.on("connected", () => {
        console.log('------------Connected to Mongo------------');
    })
    mongoose.connection.on("error", (err) => {
        console.log('------------Error to connecting with Mongo------------', err);
    })
}

 
export default initDB