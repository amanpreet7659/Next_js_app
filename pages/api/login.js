import initDB from "../../helpers/initDB";
import login from "../../models/login";

initDB()
export default async (req, res) => {
    switch (req.method) {
        case "GET":
            {
                await getAllUsers(req, res)
                break
            }
        case "POST":
            {
                await saveUser(req, res)
                break
            }
    }
}

const getAllUsers = async (req, res) => {
    login.find().then(products => {
        res.status(200).json(products)
    })
}

const saveUser = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).json({ error: "Please fill all Details" })//Apropriate data not Received
    }
    const user = await new Product({
        email, password
    }).save()
    res.status(200).json(user)
}