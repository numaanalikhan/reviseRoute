import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function Specification() {
    var [borderColorIndex,setBorderColorIndex] = useState(0)
    // console.log(borderColorIndex)
    var params = useParams()
    // console.log(params.productId);
    var [productData,setProductData] = useState(null)
    useEffect(()=>{
        axios.get(`http://dummyjson.com/products/${params.productId}`)
        .then((res)=>{
            setProductData(res.data)
            // console.log(res.data.images)
        })
    },[])
    return (
        <>
    <h1>See More...</h1>
    {
        productData !==null ?
        <>
        <div
    className='flex m-8'>
        <div
        className='w-[400px] h-[400px]  bg-gray-300 rounded-lg px-3 overflow-hidden text-center'>

        <img
        className=''
        src={productData.images[borderColorIndex]}
        alt=""/>
        </div>

        <div
        className='w-[600px] h-[400px] ml-auto mr-auto p-5'
        >
        <p>Title: <b>{productData.title}</b> </p>
        <p className='mt-4 mb-4'>{productData.description}</p>
        <span>Price $</span> <span></span>
        <span className='text-green-500 mt-4'>{productData.price}$</span>
          
            <div className='flex gap-1 ml-0 mr-0 mt-5 '>
               { productData.images.map((item,idx)=>{
                    return(
                
                            <button onClick={()=>{
                                setBorderColorIndex(idx)
                            }}>
                                <img
                                className={`w-32 border-2 ${borderColorIndex === idx ? "border-emerald-500":""}`}
                                key={idx}
                                src={item}
                                alt="img"
                                />
                            </button>
                    )
                })}
            </div>
        </div>
    </div></> :""
    }
        </>



  )
}

export default Specification