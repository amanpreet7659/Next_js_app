import Link from "next/link";
import baseUrl from "../../helpers/baseUrl";

const Profile = ({product}) => {
  console.log('Products ', product);
  const productList = product.map((i) => {
    return (
      <div className="card" key={i._id}>
        <div className="card-image">
          <img src={i.mediaUrl} />
          <span className="card-title">{i.name}</span>
        </div>
        <div className="card-content">
          <p><b>Price is : </b>{i.price}</p>
        </div>
        <div className="card-action">
          <Link href='/product/[id]' as={`product/${i._id}`}><a >View Product</a></Link>
        </div>
      </div>
    )
  })

  return (
    <div>
      {/* <Navbar/> */}
      {/* <h1>next js is awsome</h1>
      <label>Home Component </label> */}
      <div className="rootcard">
        {productList}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/api/Products`, { method: "GET" })
  const data = await res.json()
  return {
    props: {
      product: data
    }
  }
}
export default Profile

