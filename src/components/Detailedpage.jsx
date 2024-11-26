import React from 'react'
import { useParams } from 'react-router-dom';
import { products } from './products';
import Icon1 from '../assets/images/Icon/Vector.png'
import Icon2 from '../assets/images/Icon/shopping_basket.png'
const Detailedpage = () => {
    const { productId } = useParams(); // Get the productId from the URL
    const product = products.find((p) => p.id === parseInt(productId));
  
    if (!product) {
      return <p>Product not found</p>;
    }
    
  return (
    <div className='mx-20'>
      <p>Home &gt;</p>
      <div className='flex bg-white p-4'>
        <div>
          <div className='p-2 border border-gray-300 bg-white rounded-md'><img src={product.image} alt={product.name} className='w-[345px] '/></div>
        </div>
        <div className=''>
          <p className='text-green-500 font-semibold text-lg'> &#10003; In stock</p>
          <h1 className='text-2xl font-bold'>{product.name}</h1>
          <div>
            <div className='flex py-3'>
              <span className='text-xl text-yellow-500'>&#9733;&#9733;&#9733;&#9733;</span>
              <span className='text-xl text-gray-400'>&#9733;</span><p className='text-lg font-semibold pl-1 pr-1  text-yellow-500'>{product.rating}</p>
              <p className='flex gap-2 font-semibold text-gray-400 text-lg'>
                 &#8226;
                  <img src={Icon1} alt="" className='w-5 h-5 mt-1.5'/>
                  <span>32 reviews</span>&#8226;
                  <img src={Icon2} alt="" className='w-5 h-5 mt-1'/>154 sold</p>
              </div>
              <div className='flex bg-[#FFF0DF] pl-3 py-2 gap-3'>
                <div className='border-r border-gray-300 pr-8'>
                  <h1 className='text-lg font-bold text-red-500'>${product.price}</h1>
                  <p className='text-xs text-gray-500'>50-100 pcs</p>
                </div>
                <div className='border-r border-gray-300 pr-8'>
                  <h1 className='text-lg font-bold '>${product.discount1}</h1>
                  <p className='text-xs text-gray-500'>100-700 pcs</p>
                </div>
                <div>
                  <h1 className='text-lg font-bold '>${product.discount2}</h1>
                  <p className='text-xs text-gray-500'>700+ pcs </p>
                </div>
              </div>
              <div>
                <div className='flex border-b border-gray-300 py-3'>
                  <p className='w-32 text-gray-400'>Price:</p><p>Negotiable</p>
                </div>
                <div className='border-b border-gray-300 py-3'>
                  <div className='flex'><p className='w-32 text-gray-400'>Type:</p>Classic Shoes<p></p></div>
                  <div className='flex'><p className='w-32 text-gray-400'>Material:</p><p>Plastic material</p></div>
                  <div className='flex'><p className='w-32 text-gray-400'>Design:</p><p>Modern nice</p></div>
                </div>
                <div className='border-b border-gray-300 py-3'>
                  <div className='flex'><p className='w-32 text-gray-400 '>Customization:</p><p className='leading-5'>Customized logo and <br />design custom packages</p></div>
                  <div className='flex'><p className='w-32 text-gray-400'>Protection:</p><p>Refund Policy</p></div>
                  <div className='flex'><p className='w-32 text-gray-400'>Warranty:</p><p>2 years full warranty</p></div>
                </div>
              </div>
            </div>
        </div>
        <div >
          <div className='border border-gray-300 rounded-md px-3 py-4'>
            <div className='flex gap-2 border-b border-gray-300 pb-4'>
              <h1 className='text-3xl font-bold bg-[#C6F3F1] px-4 py-2 text-[#4CA7A7] rounded-md'>R</h1>
              <p className='font-semibold text-lg'>Supplier <br />Guanjoi Trading LLC</p>
            </div>
            <div>
              <div className='flex'><div className='w-12'><img src="/src/assets/images/flags/ger.jpeg" alt="" className='w-6 h-4 mt-1'/></div><p className='text-gray-400'>Germany, Berlin</p></div>
              <div className='flex'><div className='w-12'><img src="/src/assets/images/Icon/check.png" alt="" className=' h-5 mt-0.5'/></div><p className='text-gray-400'>Verified Seller</p></div>
              <div className='flex'><div className='w-12'><img src="/src/assets/images/Icon/world.png" alt="" className=' h-5 mt-0.5'/></div><p className='text-gray-400'>Worldwide shipping</p></div>
            </div>
          </div>
          
        </div>
      </div>
      
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      
    </div>
  )
}

export default Detailedpage
