import { useState } from "react"
import baseUrl from "../helpers/baseUrl"

const create = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [media, setMedia] = useState('')
    const [description, setDescription] = useState('')
    const imageUpload = async () => {
        const data = new FormData()
        data.append('file', media)
        data.append('upload_preset', "ImageUrl")
        data.append('"cloud_name', 'Private')
        const res = await fetch(`https://api.cloudinary.com/v1_1/privatecompany7659/image/upload`, { method: 'POST', body: data })
        const result= await res.json()
        console.log('result ',result);
        return result.url
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const Url= await imageUpload();
        console.log(name,price,media,description,Url);
        const res = await fetch(`${baseUrl}/api/Products`, {
            method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
                name, 
                description, price, 
                mediaUrl: Url,
            })
        })
        const result = await res.json()
        if (result.error) {
            M.toast({ html: result.error, classes: 'red' })
        } else {
            M.toast({ html: 'Record Save Successfully',classes:'green' })
        }
    }
    return (
        <div>
            <form onSubmit={(e) => { handleSubmit(e) }} className="contaimer">
                <input type='text' name='name' placeholder='Enter Product Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='text' name='price' placeholder='Enter Product price' value={price} onChange={(e) => setPrice(e.target.value)} />
                <div className="file-field input-field">
                    <div className="btn">
                        <span>File</span>
                        <input type="file" accept='imsge/*' onChange={(e) => { setMedia(e.target.files[0]) }} />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>
                </div>
                <img className='responsive-img' src={media ? URL.createObjectURL(media) : ""} width="30%" />
                <textarea
                    name="description" value={description}
                    placeholder="Enter Description" onChange={(e) => { setDescription(e.target.value) }} className="materialize-textarea"></textarea>
                <button className="btn waves-effect waves-light" type="submit" >Submit<i className="material-icons right">send</i>
                </button>
            </form>
        </div>
    )
}

export default create
