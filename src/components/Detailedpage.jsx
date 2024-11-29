import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import { products } from './products';
import Icon1 from '../assets/images/Icon/Vector.png'
import Icon2 from '../assets/images/Icon/shopping_basket.png'
const Detailedpage = () => {
    const { productId } = useParams(); 
    const product = products.find((p) => p.id === parseInt(productId));
    const [activeTab, setActiveTab] = useState('Description');
  
    if (!product) {
      return <p>Product not found</p>;
    }

    const tabs = ['Description', 'Reviews', 'Shipping', 'About seller'];
    
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
    return (
    <div className='mx-20 2xs:mx-2 xs:mx-2'>
      <p className='text-gray-500 py-3'>Home <span className='px-1'>&#62;</span> Products <span className='px-1'>&#62;</span> {product.category} <span className='px-1'>&#62;</span> {product.name}</p>
      <div className='flex bg-white px-4 pt-4 pb-8 justify-evenly gap-3 flex-wrap border border-gray-300 rounded-md shadow-md shadow-gray-400'>
        <div>
          <div className='p-2 border border-gray-300 bg-white rounded-md shadow-md shadow-gray-200 hover:scale-150'><img src={product.image} alt={product.name} className='w-[380px] '/></div>
          <div>
            <div className='grid grid-cols-6 mt-4'>
              <img src={product.image} alt="" className=' w-[56px] border border-black p-2 rounded-md'/>
              <img src={product.image} alt="" className=' w-[56px] border border-gray-300 p-2 rounded-md hover:border-black'/>
              <img src={product.image} alt="" className=' w-[56px] border border-gray-300 p-2 rounded-md hover:border-black'/>
              <img src={product.image} alt="" className=' w-[56px] border border-gray-300 p-2 rounded-md hover:border-black'/>
              <img src={product.image} alt="" className=' w-[56px] border border-gray-300 p-2 rounded-md hover:border-black'/>
              <img src={product.image} alt="" className=' w-[56px] border border-gray-300 p-2 rounded-md hover:border-black'/>
            </div>
          </div>
        </div>
        <div className='w-[420px]'>
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
                <div className='border-b border-gray-300 py-3 '>
                  <div className='flex'><p className='w-32 text-gray-400 '>Customization:</p><p className='leading-5'>Customized logo and <br />design custom packages</p></div>
                  <div className='flex'><p className='w-32 text-gray-400'>Protection:</p><p>Refund Policy</p></div>
                  <div className='flex'><p className='w-32 text-gray-400'>Warranty:</p><p>2 years full warranty</p></div>
                </div>
              </div>
            </div>
        </div>
        <div >
          <div className='border border-gray-300 rounded-md px-3 w-[280px] py-4 shadow-md shadow-gray-200'>
            <div className='flex gap-2 border-b border-gray-300 pb-6'>
              <h1 className='text-3xl font-bold bg-[#C6F3F1] px-4 py-2 text-[#4CA7A7] rounded-md'>R</h1>
              <p className='font-semibold text-lg'>Supplier <br />Guanjoi Trading LLC</p>
            </div>
            <div className='space-y-2 mt-3'>
              <div className='flex'><div className='w-12'><img src="/src/assets/images/flags/ger.jpeg" alt="" className='w-6 h-4 mt-1'/></div><p className='text-gray-400'>Germany, Berlin</p></div>
              <div className='flex'><div className='w-12'><img src="/src/assets/images/Icon/check.png" alt="" className=' h-5 w-5 mt-0.5 pl-0.5'/></div><p className='text-gray-400'>Verified Seller</p></div>
              <div className='flex'><div className='w-12'><img src="/src/assets/images/Icon/world.png" alt="" className=' h-5 w-5 mt-0.5 pl-0.5'/></div><p className='text-gray-400'>Worldwide shipping</p></div>
            </div>
            <div className='flex flex-col gap-2 mt-6'>
              <button className='bg-blue-600 text-white py-2 font-semibold rounded-md hover:bg-blue-500'>Send inquiry</button>
              <button className='border border-gray-300 text-blue-600 font-semibold py-2 rounded-md hover:bg-blue-600 hover:text-white'>Seller's profile</button>
            </div>
          </div>
          <div  className='text-center mt-3'><a href="#" className='flex justify-center text-blue-600 font-semibold hover:text-blue-400'>
          <i className='fa-regular fa-heart mt-1'> </i><p className='ml-1'>Save for later</p>
            </a></div>
          
        </div>
      </div>

      <div className='flex gap-4 mt-6 flex-wrap'>
        <div className='bg-white border border-gray-300 rounded-md shadow-md shadow-gray-400'>
          {/* Tab Headers */}
          <div className="flex border-b mb-4 px-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 ${
                  activeTab === tab ? 'border-b-2 border-blue-500 font-semibold' : 'text-gray-500'
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
       {/* Tab Content */}
          {activeTab === 'Description' && (
            <div className='px-4 pb-6'>
              <p className="mb-4 text-gray-700 w-[870px]  lg:w-auto md:w-auto sm:w-auto xs:w-auto 2xs:w-auto pr-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo vero, quis nihil nulla dicta ipsa earum soluta repellendus, tempora beatae amet. Voluptatum natus temporibus reprehenderit vero autem? Cupiditate, accusamus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. A voluptas eveniet ad sequi quas debitis delectus, quasi modi soluta consequuntur unde mollitia veritatis consectetur, architecto veniam voluptatum placeat minima rem.
              </p>
              <table className="table-auto mb-4 border w-[600px] sm:w-auto xs:w-auto 2xs:w-auto text-sm text-left">
                <tbody>
                  <tr>
                    <td className="p-2 font-semibold border border-gray-300 bg-gray-200 ">Model</td>
                    <td className="p-2 border border-gray-300">#87868687</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold border border-gray-300 bg-gray-200">Style</td>
                    <td className="p-2 border border-gray-300">Classic style</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold border border-gray-300 bg-gray-200">Certificate</td>
                    <td className="p-2 border border-gray-300">ISO-898921212</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold border border-gray-300 bg-gray-200">Size</td>
                    <td className="p-2 border border-gray-300">34mm x 450mm x 19mm</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold border border-gray-300 bg-gray-200">Memory</td>
                    <td className="p-2 border border-gray-300">36GB RAM</td>
                  </tr>
                </tbody>
              </table>
              <ul className=" ">
                <li><i className='fa-solid fa-check text-gray-400 mr-2'></i>Some great feature name here</li>
                <li><i className='fa-solid fa-check text-gray-400 mr-2'></i>Lorem ipsum dolor sit amet, consectetur</li>
                <li><i className='fa-solid fa-check text-gray-400 mr-2'></i>Duis aute irure dolor in reprehenderit</li>
                <li><i className='fa-solid fa-check text-gray-400 mr-2'></i>Some great feature name here</li>
              </ul>
        </div>
      )}

        {activeTab === 'Reviews' && <div className='px-4 pb-6'><p className="mb-4 text-gray-700 w-[870px]  lg:w-auto md:w-auto sm:w-auto xs:w-auto 2xs:w-auto pr-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo vero, quis nihil nulla dicta ipsa earum soluta repellendus, tempora beatae amet. Voluptatum natus temporibus reprehenderit vero autem? Cupiditate, accusamus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. A voluptas eveniet ad sequi quas debitis delectus, quasi modi soluta consequuntur unde mollitia veritatis consectetur, architecto veniam voluptatum placeat minima rem.
              </p></div> }
        {activeTab === 'Shipping' && <div className='px-4 pb-6'><p className="mb-4 text-gray-700 w-[870px]  lg:w-auto md:w-auto sm:w-auto xs:w-auto 2xs:w-auto pr-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo vero, quis nihil nulla dicta ipsa earum soluta repellendus, tempora beatae amet. Voluptatum natus temporibus reprehenderit vero autem? Cupiditate, accusamus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. A voluptas eveniet ad sequi quas debitis delectus, quasi modi soluta consequuntur unde mollitia veritatis consectetur, architecto veniam voluptatum placeat minima rem.
              </p></div>}
        {activeTab === 'About seller' && <div className='px-4 pb-6'><p className="mb-4 text-gray-700 w-[870px]  lg:w-auto md:w-auto sm:w-auto xs:w-auto 2xs:w-auto pr-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo vero, quis nihil nulla dicta ipsa earum soluta repellendus, tempora beatae amet. Voluptatum natus temporibus reprehenderit vero autem? Cupiditate, accusamus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. A voluptas eveniet ad sequi quas debitis delectus, quasi modi soluta consequuntur unde mollitia veritatis consectetur, architecto veniam voluptatum placeat minima rem.
              </p></div>}
        </div>
        <div className='bg-white pt-3 pl-4 pb-6 pr-8 xl:pr-2 lg:pr-2 md:pr-2 sm:pr-2 xs:pr-2 2xs:pr-2 h-fit border border-gray-300 rounded-md shadow-md shadow-gray-400'>
          <p className='pb-3 font-bold'>You may like</p>
          <div className='grid grid-cols-1 gap-2 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 2xs:grid-cols-2'>
            <div className='flex  gap-2'>
              <div className='px-2 py-1 h-[70px]  w-[70px]  border border-gray-300 rounded-md'><img src={product.image} alt="" className='w-[53px] h-[60px]'/></div>
              <div><h1 className='leading-5'>Apple Watch series<br /> space gray</h1>
              <p className='text-gray-400 text-sm mt-1 '>$7.00 - $99.50</p></div>
            </div>
            <div className='flex  gap-2'>
              <div className='px-2 py-1 h-[70px]  w-[70px]  border border-gray-300 rounded-md'><img src={product.image} alt="" className='w-[53px] h-[60px]'/></div>
              <div><h1 className='leading-5'>Apple Watch series<br /> space gray</h1>
              <p className='text-gray-400 text-sm mt-1 '>$7.00 - $99.50</p></div>
            </div>
            <div className='flex  gap-2'>
              <div className='px-2 py-1 h-[70px]  w-[70px]  border border-gray-300 rounded-md'><img src={product.image} alt="" className='w-[53px] h-[60px]'/></div>
              <div><h1 className='leading-5'>Apple Watch series<br /> space gray</h1>
              <p className='text-gray-400 text-sm mt-1 '>$7.00 - $99.50</p></div>
            </div>
            <div className='flex  gap-2'>
              <div className='px-2 py-1 h-[70px]  w-[70px]  border border-gray-300 rounded-md'><img src={product.image} alt="" className='w-[53px] h-[60px]'/></div>
              <div><h1 className='leading-5'>Apple Watch series<br /> space gray</h1>
              <p className='text-gray-400 text-sm mt-1 '>$7.00 - $99.50</p></div>
            </div>
            <div className='flex  gap-2'>
              <div className='px-2 py-1 h-[70px]  w-[70px]  border border-gray-300 rounded-md'><img src={product.image} alt="" className='w-[53px] h-[60px]'/></div>
              <div><h1 className='leading-5'>Apple Watch series<br /> space gray</h1>
              <p className='text-gray-400 text-sm mt-1 '>$7.00 - $99.50</p></div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white p-4 shadow-md shadow-gray-400 border border-gray-300 rounded-md mt-4'>
        <h1 className='text-xl font-bold pl-2 pb-3'>Related Products</h1>
        <div className='flex justify-center flex-wrap gap-5'>
          <div className='bg-gray-200 border border-gray-300 rounded-md hover:scale-105'>
            <div className='w-[172px] bg-white px-5 rounded-t-md'>
              <img src="/src/assets/images/section2/canonCameras.png" alt="" className='w-[131px] rounded-t-md'/>
            </div>
            <div className='px-1 py-2'>
              <h1 className='leading-5'>Xiaomi Redmi 8 <br />Original</h1>
              <p className='text-gray-400'>$32.00-$40.00</p>
            </div>
          </div>
          <div className='bg-gray-200 border border-gray-300 rounded-md hover:scale-105'>
            <div className='w-[172px] bg-white px-5 rounded-t-md'>
              <img src="/src/assets/images/section2/goproCamera.png" alt="" className='w-[131px] rounded-t-md'/>
            </div>
            <div className='px-1 py-2'>
              <h1 className='leading-5'>Xiaomi Redmi 8 <br />Original</h1>
              <p className='text-gray-400'>$32.00-$40.00</p>
            </div>
          </div>
          <div className='bg-gray-200 border border-gray-300 rounded-md hover:scale-105'>
            <div className='w-[172px] bg-white px-5 rounded-t-md'>
              <img src="/src/assets/images/section2/headphones.png" alt="" className='w-[131px] rounded-t-md'/>
            </div>
            <div className='px-1 py-2'>
              <h1 className='leading-5'>Xiaomi Redmi 8 <br />Original</h1>
              <p className='text-gray-400'>$32.00-$40.00</p>
            </div>
          </div>
          <div className='bg-gray-200 border border-gray-300 rounded-md hover:scale-105'>
            <div className='w-[172px] bg-white px-5 rounded-t-md'>
              <img src="/src/assets/images/section2/smartWatch.png" alt="" className='w-[131px] rounded-t-md'/>
            </div>
            <div className='px-1 py-2'>
              <h1 className='leading-5'>Xiaomi Redmi 8 <br />Original</h1>
              <p className='text-gray-400'>$32.00-$40.00</p>
            </div>
          </div>
          <div className='bg-gray-200 border border-gray-300 rounded-md hover:scale-105'>
            <div className='w-[172px] bg-white px-5 rounded-t-md'>
              <img src="/src/assets/images/section2/laptop.png" alt="" className='w-[131px] rounded-t-md'/>
            </div>
            <div className='px-1 py-2'>
              <h1 className='leading-5'>Xiaomi Redmi 8 <br />Original</h1>
              <p className='text-gray-400'>$32.00-$40.00</p>
            </div>
          </div>
          <div className='bg-gray-200 border border-gray-300 rounded-md hover:scale-105'>
            <div className='w-[172px] bg-white px-5 rounded-t-md'>
              <img src="/src/assets/images/section2/canonCameras.png" alt="" className='w-[131px] rounded-t-md'/>
            </div>
            <div className='px-1 py-2'>
              <h1 className='leading-5'>Xiaomi Redmi 8 <br />Original</h1>
              <p className='text-gray-400'>$32.00-$40.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className=' mt-4 mb-14 shadow-md shadow-blue-900 bg-blue-700 rounded-md' >
        <div className='w-full flex justify-between' style={{background: "url('/src/assets/images/details/bgdetails2.png')", backgroundRepeat: "no-repeat"}}>
          <div className='px-6 py-6'>
            <h1 className='text-2xl text-white font-bold'>Super discount on more than 100 USD</h1>
            <p className='pt-1 pb-3 text-[16px] text-[#FFFFFF]'>Have you ever finally just write dummy info</p>
          </div>
          <div className='mr-14 my-10'>
          <button className='bg-[#FF9017] text-white px-3 py-2 rounded-md shadow-sm shadow-orange-600'>Shop now</button>
        </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Detailedpage
