import axios from "axios"
import { useEffect,useState} from "react"
import { Link } from "react-router-dom"
function Product (){
  var [product,setProduct] = useState([])
  useEffect(()=>{
   axios.get("https://dummyjson.com/products?limit=0")
   .then((res)=>{
    setProduct(res.data.products)
   }) 
  },[])
  return(
    <>
    {/* {console.log("Product component is rendered at initial load")} */}
    <h1>List of Products</h1>
   

    {/* <div className="grid grid-cols-4 gap-4 mt-6"> */}
    <div className="grid grid-cols-4 gap-4 mt-6">
  {product.map((item, idx) => (
    <div key={idx} className="flex flex-col h-full">
      <div className="overflow-hidden rounded-md bg-gray-200">
        <img 
          className="w-full h-auto object-cover" 
          src={item.thumbnail} 
          alt="" 
        />
      </div>
      <div className="flex-grow mt-2">
        <h3 className="text-sm text-gray-700">{item.title}</h3>
        <p className="text-sm font-medium text-gray-900">${item.price}</p>
      </div>
      <div className="mt-2">
      <button className="bg-sky-400 border-2 border-black px-1 py-0 rounded-lg text-[11px] text-white font-semibold ml-auto mr-auto">
      <Link to={`/product/${item.id}`}>   View More... </Link>
        </button>
       
      </div>
    </div>
  ))}
</div>

{/* </div> */}

    </>
  )
}

export default Product;