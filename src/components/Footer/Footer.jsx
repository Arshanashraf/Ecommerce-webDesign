import React from 'react'

function Footer() {
  return (
    <footer className="bg-white ">
        <section className="mx-24 rounded-md  xl:mx-16 lg:mx-5 md:mx-10 sm:mx-5 xs:mx-2  xs:p-0 xs:bg-none 2xs:mx-4 2xs:mt-3 2xs:p-0 2xs:bg-none ">
            <div className="py-10 flex flex-wrap  gap-10">
                <div>
                    <div className="flex items-center space-x-4 -mt-1 md:mr-4 sm:mr-10 2xs:mr-10">
                        <a href="" className="flex items-center text-blue-300 text-3xl font-bold">
                          <img src="/src/assets/images/logo/logo.png" className="w-12 mr-1" alt=""/>Brand</a>
                      </div>
                      <h1 className="mt-4">Best information about the company Lorem <br/>ipsum dolor  sit, amet consectetur adipisicing elit.</h1>
                      <div className="flex flex-wrap gap-5 mt-4 justify-evenly">
                        <a href="#" className="text-xl text-white bg-gray-400 px-4 py-2  rounded-full"><i className="fa-brands fa-facebook-f "></i></a>
                        <a href="#" className="text-xl text-white bg-gray-400 px-3 py-2  rounded-full"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#" className="text-xl text-white bg-gray-400 px-3.5 py-2  rounded-full"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="#" className="text-xl text-white bg-gray-400 px-3.5 py-2  rounded-full"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" className="text-xl text-white bg-gray-400 px-3 py-2  rounded-full"><i className="fa-brands fa-youtube"></i></a>
                      </div>
                </div>
                
                  <div className="flex flex-wrap gap-10">
                    <div className="space-y-2">
                        <h1 className="font-bold text-xl">About</h1>
                        <ul className="space-y-1">
                            <li><a href="#" className="text-gray-500">About Us</a></li>
                            <li><a href="#" className="text-gray-500">Find store</a></li>
                            <li><a href="#" className="text-gray-500">Categories</a></li>
                            <li><a href="#" className="text-gray-500">Blogs</a></li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h1 className="font-bold text-xl">Partnership</h1>
                        <ul className="space-y-1">
                            <li><a href="#" className="text-gray-500">About Us</a></li>
                            <li><a href="#" className="text-gray-500">Find store</a></li>
                            <li><a href="#" className="text-gray-500">Categories</a></li>
                            <li><a href="#" className="text-gray-500">Blogs</a></li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h1 className="font-bold text-xl">Information</h1>
                        <ul className="space-y-1">
                            <li><a href="#" className="text-gray-500">Help Center</a></li>
                            <li><a href="#" className="text-gray-500">Money refund</a></li>
                            <li><a href="#" className="text-gray-500">Shipping</a></li>
                            <li><a href="#" className="text-gray-500">Contact Us</a></li>
                        </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-6">
                    <div className="space-y-2">
                        <h1 className="font-bold text-xl">For Users</h1>
                        <ul className="space-y-1">
                            <li><a href="#" className="text-gray-500">Login</a></li>
                            <li><a href="#" className="text-gray-500">Register</a></li>
                            <li><a href="#" className="text-gray-500">Settings</a></li>
                            <li><a href="#" className="text-gray-500">My Orders</a></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h1 className="font-bold text-xl">Get App</h1>
                        <div className="space-y-3">
                            <a href="#" className="flex text-white bg-black gap-2 font-semibold rounded-md shadow-md shadow-gray-800 px-3 py-3"><i className="fa-brands fa-apple pt-1"></i><p className='flex-col flex leading-3'><span className='text-[10px] font-light '>Download on the</span>App Store</p></a>
                            <a href="#" className="flex text-white bg-black gap-2 font-semibold rounded-md shadow-md shadow-gray-800 px-3 py-3"><i className="fa-brands fa-google-play pt-1"></i><p className='flex-col flex leading-3'><span className='text-[10px] font-light '>Get it on</span>Play Store</p></a>
                        </div>
                    </div>
                  </div>
            </div>
        </section>
        <section className="bg-gray-300">
            <div className="mx-24 rounded-md  xl:mx-16 lg:mx-5 md:mx-10 sm:mx-5 xs:mx-0  xs:p-0 xs:bg-none 2xs:mx-0 2xs:mt-3 2xs:p-0 2xs:bg-none py-5">
                <div className="flex   justify-between">
                    <h1 className="text-gray-500">&copy; 2024 Ecommerce</h1>
                    <div className="flex gap-1  text-gray-500 ">
                        <img src="/src/assets/images/flags/usa.png" className="w-5 h-4 mt-1.5 " alt=""/>
                        <div>
                        <select className='bg-gray-300 text-'>
                            <option >English</option>
                           < option >Duetesch</option>
                            </select> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </footer>
  )
}

export default Footer
