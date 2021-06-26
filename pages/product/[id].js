import { useRouter } from 'next/router'
import Link from 'next/link'
import baseUrl from '../../helpers/baseUrl'
import { useRef, useEffect } from 'react'
import { Mongoose } from 'mongoose'
const Product = ({ product }) => {
    // console.log('product ', product);
    const modleRef = useRef(null)
    const router = useRouter()

    if (router.isFallback) {
        return <h3>Loadding...</h3>
    }

    const deleteProduct = async () => {
        const res = await fetch(`${baseUrl}/api/product/${product._id}`, { method: 'DELETE' })
        await res.json()
        router.push("/")
    }

    useEffect(() => { M.Modal.init(modleRef.current) }, [])
    const getModal = () => {
        return (<div ref={modleRef} id="modal1" className="modal">
            <div className="modal-content">
                <h4>{product.name}</h4>
                <p>Are you sure you want to Delete</p>
            </div>
            <div className="modal-footer">
                <button className="#b388ff deep-purple btn waves-effect waves-light"><i className="material-icons right">cancel</i>
                </button>
                <button
                    onClick={()=>deleteProduct()} className="#e53935 red darken-1 btn waves-effect waves-light"><i className="material-icons right">check
</i>
                </button>
            </div>
        </div>)
    }
    return (
        <div>
            {/* {productList} */}
            <div className="container center-align ">
                <h3>{product.name}</h3>
                <img style={{ width: '30%' }} src={product.mediaUrl} />
                <h5>RS. {product.price}</h5>
                <p className="left-align">{product.description}</p>
                <input type="number" style={{ width: '397px', margin: '10px', }} min='1' placeholder="Quantity" />
                <button className="#b388ff deep-purple btn waves-effect waves-light" title="Add" ><i className="material-icons right">add</i>
                </button>
                <button className="#e53935 red darken-1 btn modal-trigger waves-effect waves-light " data-target="modal1" title="Delete" > <i className="material-icons right">delete</i>
                </button>
                {getModal()}
            </div>
        </div>
    )
}

export async function getServerSideProps({ params: { id } }) {

    const res = await fetch(`${baseUrl}/api/product/${id}`)
    const data = await res.json()
    return {
        props: {
            product: data
        }
    }
}

// export async function getStaticProps({ params: { id } }) {
//     const res = await fetch(`http://localhost:3000/api/product/${id}`)
//     const data = await res.json()
//     return {
//         props: {
//             product: data
//         }
//     }
// }
// export async function getStaticPaths() {
//     return {
//         paths: [{
//             params: { id: '60d44c2d3b3c92d5edc474af' }
//         }],
//         fallback: true,
//     }
// }
export default Product
