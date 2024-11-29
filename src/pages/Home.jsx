import React from 'react'
import Avatar from "../assets/images/mainbg/avatar.png"
import { Link } from 'react-router-dom'

function Home() {
    
    
  return (
    <div id='/'>
      <section className="mx-20 xl:mx-16 lg:mx-5 md:mx-10 sm:mx-5 xs:mx-0 2xs:mx-0  mt-6 rounded-md px-5 py-3 bg-white   xs:mt-0 xs:p-0 xs:bg-none 2xs:mt-0 2xs:p-0 border border-gray-400 shadow-md shadow-gray-500">
            <div className="row flex  items-center justify-between gap-2">
                <div className="col-3 flex flex-col space-y-[1px] sm:hidden xs:hidden 2xs:hidden">
                    <Link to="/products" className="bg-blue-100 font-semibold pr-32 md:pr-10 sm:pr-10 pl-3 py-2 rounded-lg">Automobiles</Link>
                    <Link to="/products" className="   hover:bg-blue-100 text-gray-700 pl-3 py-2 rounded-lg">Clothes and wear</Link>
                    <Link to="/products" className="   hover:bg-blue-100 text-gray-700 pl-3 py-2 rounded-lg">Home interiors</Link>
                    <Link to="/products" className="   hover:bg-blue-100 text-gray-700 pl-3 py-2 rounded-lg">Computer and tech</Link>
                    <Link to="/products" className="   hover:bg-blue-100 text-gray-700 pl-3 py-2 rounded-lg">Tools, equipments</Link>
                    <Link to="/products" className="   hover:bg-blue-100 text-gray-700 pl-3 py-2 rounded-lg">Sports and outdoor</Link>
                    <Link to="/products" className="   hover:bg-blue-100 text-gray-700 pl-3 py-2 rounded-lg">Animal and pets</Link>
                    <Link to="/products" className="   hover:bg-blue-100 text-gray-700 pl-3 py-2 rounded-lg">Machinery tools</Link>
                    <Link to="/products" className="   hover:bg-blue-100 text-gray-700 pl-3 py-2 rounded-lg">More category</Link>
                </div>
                <div className="col-5 mx-2 xs:mx-0 sm:mx-0 2xs:mx-0 xs:h-72 xs:w-full xs:max-w-auto  2xs:h-60 2xs:w-full bg-cover bg-center  w-[665px] h-[360px]" style={{background:'url(/src/assets/images/mainbg/bgmain.png)', backgroundRepeat:"no-repeat"}}>
                    <div className='ml-10 mt-10'>
                    <h1 className='text-3xl font-medium'>Latest trending</h1>
                    <h2 className='text-3xl font-bold mb-8'>Electronic items</h2>
                    <a href="#" className='bg-white font-medium px-4 py-2.5 rounded-md hover:animate-pulse shadow shadow-gray-300'>Learn more</a>
                    </div>
                </div>
                <div className="col-4 w-60 xs:hidden 2xs:hidden">
                    <div className="p-2  w-full bg-blue-100 shadow-md shadow-blue-200  rounded-lg">
                        <div className="flex flex-row ">
                            <div className='w-[44px] h-[44px] bg-[#C7E1FF] rounded-full'><img src={Avatar} alt="" className="w-[28px] h-[34px]  ml-2 mt-2.5"/></div>
                            <p className="px-2 font-medium leading-5">Hi, user <br/>let's get started</p>
                        </div>
                        <div className="flex flex-col space-y-2 mt-3">
                            <button className="bg-blue-600 text-white rounded-lg py-1.5">Join now</button>
                            <button className="bg-white text-blue-600 rounded-lg py-1.5">log in</button>
                        </div>
                    </div>
                    <div className="bg-orange-500 p-4 rounded-lg mt-2 shadow-md shadow-orange-700">
                        <h1 className="text-white leading-5">GET US 10$ off <br/> with a new <br/>supplier</h1>
                    </div>
                    <div className="bg-teal-400 p-4 rounded-lg shadow-md shadow-teal-600 mt-2">
                        <h1 className="text-white leading-5">Send quotes with<br/> supplier<br/>prefrences</h1>
                    </div>
                </div>
            </div>

        </section>

        <section className="mx-20 xl:mx-16 lg:mx-5 md:mx-10 sm:mx-5 xs:mx-0 2xs:mx-0 mt-6 rounded-md  bg-white  xs:mt-2 sm:mt-2 xs:p-0 xs:bg-none 2xs:mt-0 2xs:p-0 2xs:bg-none border-2 border-gray-400">
            <div className="row flex  xs:flex-col sm:flex-col 2xs:flex-col ">
                <div className="col-lg-2 flex flex-col  pr-11 p-5  xs:flex-row xs:space-x-14 sm:flex-row sm:space-x-40 sm:border-b xs:border-b 2xs:flex-row 2xs:space-x-6 2xs:border-b 2xs:p-2">
                    <div className="-space-y-1 xs:-space-y-0 xs:pt-4 2xs:-space-y-0 2xs:pt-4 sm:pt-4">
                        <h1 className="text-xl font-bold 2xs:text-lg">Deals and offers</h1>
                        <h2 className="text-base text-gray-500 2xs:text-sm">Hygiene equipments</h2>
                    </div>
                    <div className="text-center flex   mt-4 space-x-1.5 2xs:space-x-0.5">
                        <div className="text-white bg-gray-700 px-2 py-1 rounded-md
                        xs:hidden 2xs:hidden  sm:bg-slate-300 sm:text-gray-400">
                            <h1 className="font-semibold text-xl">04</h1>
                            <h2 className="text-sm">Days</h2>
                        </div>
                        <div className="text-white bg-gray-700 px-2 py-1 rounded-md
                        xs:bg-slate-300 xs:text-gray-400  2xs:bg-slate-300 2xs:text-gray-400 sm:bg-slate-300 sm:text-gray-400 ">
                            <h1 className="font-semibold text-xl">13</h1>
                            <h2 className="text-sm">Hour</h2>
                        </div>
                        <div className="text-white bg-gray-700 px-3 py-1 rounded-md xs:bg-slate-300 xs:text-gray-400 sm:bg-slate-300 sm:text-gray-400  2xs:bg-slate-300 2xs:text-gray-400">
                            <h1 className="font-semibold text-xl">34</h1>
                            <h2 className="text-sm">Min</h2>
                        </div>
                        <div className="text-white bg-gray-700 px-3 py-1 rounded-md xs:bg-slate-300 xs:text-gray-400 sm:bg-slate-300 sm:text-gray-400  2xs:bg-slate-300 2xs:text-gray-400 ">
                            <h1 className="font-semibold text-xl">56</h1>
                            <h2 className="text-sm">Sec</h2>
                        </div>
                    </div>
                    
                </div>
                <div className="flex 2xs:flex-wrap 2xs:mx-2 2xs:mt-4 2xs:gap-2 xs:pb-5 2xs:pb-5  xs:flex-wrap xs:mx- xs:mt-4 xs:mx-4 xs:gap-2 sm:flex sm:flex-row items-center justify-center">
                    <Link to="/products">
                    <div className="col-lg-2 h-[240px] border xs:rounded-md xs:border 2xs:rounded-md 2xs:border p-5 border-gray-400 hover:scale-105 bg-white transition-transform">
                        <div className=" flex flex-col items-center text-center">
                            <img src="/src/assets/images/section2/smartWatch.png" alt="" className="w-36"  />
                            <h1 className="font-semibold ">Smart watches</h1>
                            <p className="bg-pink-200 px-3 text-red-600 font-semibold text-sm py-1 rounded-2xl">-25%</p>
                        </div>
                    </div>
                    </Link>
                    <Link to="/products">
                    <div className="col-lg-2 h-[240px] border 2xs:rounded-md 2xs:border xs:rounded-md  xs:border p-5 border-gray-400 hover:scale-105 bg-white transition-transform">
                        <div className=" flex flex-col items-center text-center">
                            <img src="/src/assets/images/section2/laptop.png" alt="" className="w-36"  />
                            <h1 className="font-semibold">Laptops</h1>
                            <p className="bg-pink-200 px-3 text-red-600 font-semibold text-sm py-1 rounded-2xl">-15%</p>
                        </div>
                    </div></Link>
                    <Link to="/products">
                    <div className="col-lg-2 h-[240px] border 2xs:rounded-md 2xs:border xs:rounded-md  xs:border p-5 border-gray-400 hover:scale-105 bg-white transition-transform">
                        <div className=" flex flex-col items-center text-center">
                            <img src="/src/assets/images/section2/goproCamera.png" alt="" className="w-36"  />
                            <h1 className="font-semibold">GoPro Cameras</h1>
                            <p className="bg-pink-200 px-3 text-red-600 font-semibold text-sm py-1 rounded-2xl">-40%</p>
                        </div>
                    </div></Link>
                    <Link to="/products">
                    <div className="col-lg-2 h-[240px] border 2xs:rounded-md 2xs:border xs:rounded-md xs:border  p-5 border-gray-400 hover:scale-105 bg-white transition-transform">
                        <div className=" flex flex-col items-center text-center">
                            <img src="/src/assets/images/section2/headphones.png" alt="" className="w-36"  />
                            <h1 className="font-semibold">Headphones</h1>
                            <p className="bg-pink-200 px-3 text-red-600 font-semibold text-sm py-1 rounded-2xl">-25%</p>
                        </div>
                    </div></Link>
                    <Link to="/products">
                    <div className="col-lg-2 h-[240px] border 2xs:rounded-md 2xs:border xs:rounded-md xs:border p-5 border-gray-400 md:hidden xs:hidden 2xs:hidden hover:scale-105 bg-white transition-transform">
                        <div className=" flex flex-col items-center text-center">
                            <img src="/src/assets/images/section2/canonCameras.png" alt="" className="w-36"  />
                            <h1 className="font-semibold">Canon Cameras</h1>
                            <p className="bg-pink-200 px-3 text-red-600 font-semibold text-sm py-1 rounded-2xl">-25%</p>
                        </div>
                    </div></Link>
                </div>
                
            </div>
        </section>

        <section className="mx-20 xl:mx-16 lg:mx-5 md:mx-10 sm:mx-5 xs:mx-0 2xs:mx-0 mt-6 rounded-md md:border md:border-gray-400 md:bg-white lg:bg-white 2xs:border 2xs:border-gray-400 2xs:bg-white  xs:border xs:border-gray-400 xs:bg-white  sm:border sm:border-gray-400 sm:bg-white xs:mt-2 sm:mt-2 xs:p-0 xs:bg-none  2xs:mt-0 2xs:p-0 2xs:bg-none shadow-md shadow-gray-500">
            <div className=" flex md:flex-col xs:flex-col lg:flex-col  sm:flex-col 2xs:flex-col ">
                <div className="p-5 font-bold  bg-white  text-xl  xl:hidden 2xl:hidden 3xl:hidden">Home and outdoor</div>
                <div className="col1  p-5 h-[260px] md:text-center xs:hidden sm:hidden 2xs:hidden md:hidden lg:hidden  w-[513px]" style={{background:'url("/src/assets/images/section3/bg1.png")', backgroundRepeat: "no-repeat" ,}}>
                    <div >
                        <h1 className=" font-bold text-xl mb-6">Home and<br />outdoor</h1>
                        <Link to="/products" className="px-4 py-2 bg-white rounded-md font-semibold">Source now</Link>
                    </div>
                </div>
                <div className="col2  flex flex-wrap 2xs:mx-20 2xs:gap-2 xs:mx-5 xs:gap-2 sm:mx-5 sm:gap-2 md:gap-4 md:mx-5 justify-center">
                    <div className="col1 flex px-5 py-5 border w-[228px] xl:w-[180px] xl:max-w-auto border-gray-400  hover:scale-110 transition-transform bg-white ">
                        <div>
                            <h1 className="font-semibold">Soft Chairs</h1>
                            <p className="text-sm text-gray-400 ">from <br />USD 19</p>
                        </div>
                        <div className="  pt-2 pl-5">
                            <img src="/src/assets/images/section3/softChairs.png" alt="" className="w-20 " />
                        </div>
                    </div>
                    <div className="col2 flex   px-5 py-5 border w-[228px] xl:w-[180px] xl:max-w-auto space-x- border-gray-400  hover:scale-110 transition-transform bg-white ">
                        <div>
                            <h1 className="font-semibold">Sofa and chairs</h1>
                            <p className="text-sm text-gray-400 ">from <br />USD 89</p>
                        </div>
                        <div className="  pt-2 ">
                            <img src="/src/assets/images/section3/lamp.png" alt="" className="w-20 " />
                        </div>
                    </div>
                    <div className="col3 flex  px-5 py-5 border w-[228px] xl:w-[180px] xl:max-w-auto space-x- border-gray-400  hover:scale-110 transition-transform bg-white ">
                        <div>
                            <h1 className="font-semibold">Kitchen Dishes</h1>
                            <p className="text-sm text-gray-400 ">from <br/>USD 10</p>
                        </div>
                        <div className="  pt-2">
                            <img src="/src/assets/images/section3/bed.png" alt="" className="w-20"/>  
                        </div>
                    </div>
                    <div className="col4 flex  px-5 py-5 border w-[228px] xl:w-[180px] xl:max-w-auto space-x- border-gray-400  hover:scale-110 transition-transform bg-white  ">
                        <div>
                            <h1 className="font-semibold">Smart Watches</h1>
                            <p className="text-sm text-gray-400 ">from <br />USD 90</p>
                        </div>
                        <div className="  pt-2 ">
                            <img src="/src/assets/images/section3/pot.png" alt="" className="w-20 "/>
                        </div>
                    </div>
                    <div className="col5 flex  px-5 py-5 border w-[228px] xl:w-[180px] xl:max-w-auto space-x- border-gray-400  hover:scale-110 transition-transform bg-white xs:hidden 2xs:hidden">
                        <div>
                            <h1 className="font-semibold">Kitchen mixer</h1>
                            <p className="text-sm text-gray-400 ">from <br />USD 35</p>
                        </div>
                        <div className="  pt-2 ">
                            <img src="/src/assets/images/section3/kitchen.png" alt="" className="w-20  "/>
                        </div>
                    </div>
                    <div className="col6 flex  px-5 py-5 border w-[228px] xl:w-[180px] xl:max-w-auto space-x- border-gray-400 4 bg-white hover:scale-110 transition-transform xs:hidden 2xs:hidden">
                        <div className="pr-1">
                            <h1 className="font-semibold">Blenders</h1>
                            <p className="text-sm text-gray-400 ">from <br />USD 340</p>
                        </div>
                        <div className="  pt-2  pl-10">
                            <img src="/src/assets/images/section3/blender.png" alt="" className="w-20  "/>
                        </div>
                    </div>
                    <div className="col7 flex  px-5 py-5 border w-[228px] xl:w-[180px] xl:max-w-auto space-x- border-gray-400  hover:scale-110 transition-transform bg-white xs:hidden 2xs:hidden md:hidden  sm:hidden lg:hidden">
                        <div>
                            <h1 className="font-semibold">Home appliances</h1>
                            <p className="text-sm text-gray-400 ">from <br />USD 19</p>
                        </div>
                        <div className="  pt-2  ">
                            <img src="/src/assets/images/section3/appliancees.png" alt="" className="w-20  "/>
                        </div>
                    </div>
                    <div className="col8 flex  px-5 py-5 border w-[228px] xl:w-[180px] xl:max-w-auto space-x- border-gray-400  bg-white  lg:hidden  md:hidden xs:hidden 2xs:hidden sm:hidden hover:scale-110 transition-transform">
                        <div>
                            <h1 className="font-semibold">Coffee Maker</h1>
                            <p className="text-sm text-gray-400 ">from <br />USD 240</p>
                        </div>
                        <div className="  pt-2 pl-2 ">
                            <img src="/src/assets/images/section3/coffee.png" alt="" className="w-20 "/>
                        </div>
                    </div>
                </div>
                <Link to="/products" className="p-5 font-bold  bg-white text-blue-600 text-xl   xl:hidden 2xl:hidden 3xl:hidden cursor-pointer">Source now &#8594;</Link>
            </div>
        </section>

        <section className="mx-20 xl:mx-16 lg:mx-5 md:mx-10 sm:mx-5 xs:mx-0 2xs:mx-0 mt-6 rounded-md md:border md:border-gray-400 md:bg-white lg:bg-white 2xs:border 2xs:border-gray-400 2xs:bg-white  xs:border xs:border-gray-400 xs:bg-white  sm:border sm:border-gray-400 sm:bg-white xs:mt-2 sm:mt-2 xs:p-0 xs:bg-none  2xs:mt-0 2xs:p-0 2xs:bg-none shadow-md shadow-gray-500">
            <div className="row flex md:flex-col xs:flex-col  sm:flex-col 2xs:flex-col justify-between items-center">
                <div className="p-5 font-bold  bg-white  text-xl   xl:hidden 2xl:hidden 3xl:hidden">Consumer electronics and gadgets</div>
                <div className="col1 bg-cover p-5  md:text-center xs:hidden lg:hidden sm:hidden 2xs:hidden md:hidden w-[513px] h-[260px]"
                style={{background:'url("/src/assets/images/section4/bg2.png")', backgroundRepeat:"no-repeat"}} >
                    <div >
                        <h1 className=" font-bold text-xl mb-6">Consumer<br/>electronics and <br/> gadgets </h1>
                        <Link to="/products" className="px-4 py-2 bg-white rounded-md font-semibold">Source now</Link>
                    </div>
                </div>
                <div className="col2  flex flex-wrap justify-center 2xs:mx-20 2xs:gap-2 xs:mx-5 xs:gap-2 sm:mx-5 sm:gap-2 md:gap-4 md:mx-5">
                    <div className="col1 flex px-5 py-5 border w-[228px] xl:w-[180px]  space-x- border-gray-400 hover:scale-110 transition-transform bg-white ">
                        <div>
                            <h1 className="font-semibold">Smart Watches</h1>
                            <p className="text-sm text-gray-400 ">from <br/>USD 19</p>
                        </div>
                        <div className="  pt-2 ">
                            <img src="/src/assets/images/section4/smartWatch.png" alt="" className="w-20 "/>
                        </div>
                    </div>
                    <div className="col2 flex   px-5 py-5 border w-[228px] xl:w-[180px]  space-x- border-gray-400  hover:scale-110 transition-transform bg-white ">
                        <div>
                            <h1 className="font-semibold">Camera</h1>
                            <p className="text-sm text-gray-400 ">from <br/>USD 89</p>
                        </div>
                        <div className="  pt-2 ">
                            <img src="/src/assets/images/section4/goproCamera.png" alt="" className="w-20 "/>
                        </div>
                    </div>
                    <div className="col3 flex  px-5 py-5 border w-[228px] xl:w-[180px]  space-x- border-gray-400 hover:scale-110 transition-transform bg-white ">
                        <div>
                            <h1 className="font-semibold">Headphones</h1>
                            <p className="text-sm text-gray-400 ">from <br/>USD 10</p>
                        </div>
                        <div className="  pt-2">
                            <img src="/src/assets/images/section4/headphone2.png" alt="" className="w-20"/>
                        </div>
                    </div>
                    <div className="col4 flex  px-5 py-5 border w-[228px] xl:w-[180px]  space-x- border-gray-400 hover:scale-110 transition-transform bg-white  ">
                        <div>
                            <h1 className="font-semibold">Smart Watches</h1>
                            <p className="text-sm text-gray-400 ">from <br/>USD 90</p>
                        </div>
                        <div className="  pt-2 ">
                            <img src="/src/assets/images/section4/kettle.png" alt="" className="w-20 "/>
                        </div>
                    </div>
                    <div className="col5 flex  px-5 py-5 border w-[228px] xl:w-[180px]  space-x- border-gray-400 hover:scale-110 transition-transform bg-white xs:hidden 2xs:hidden">
                        <div>
                            <h1 className="font-semibold">Gaming set</h1>
                            <p className="text-sm text-gray-400 ">from <br/>USD 35</p>
                        </div>
                        <div className="  pt-2 ">
                            <img src="/src/assets/images/section4/headphones.png" alt="" className="w-20  "/>
                        </div>
                    </div>
                    <div className="col6 flex  px-5 py-5 border w-[228px] xl:w-[180px]  space-x- border-gray-400 bg-white hover:scale-110 transition-transform xs:hidden 2xs:hidden">
                        <div className="pr-1">
                            <h1 className="font-semibold">Laptop & PCs</h1>
                            <p className="text-sm text-gray-400 ">from <br/>USD 340</p>
                        </div>
                        <div className="  pt-2  ">
                            <img src="/src/assets/images/section4/laptop.png" alt="" className="w-20  "/>
                        </div>
                    </div>
                    <div className="col7 flex  px-5 py-5 border w-[228px] xl:w-[180px]  space-x- border-gray-400 hover:scale-110 transition-transform bg-white xs:hidden 2xs:hidden md:hidden  sm:hidden lg:hidden">
                        <div>
                            <h1 className="font-semibold">Smart phones</h1>
                            <p className="text-sm text-gray-400 ">from <br/>USD 19</p>
                        </div>
                        <div className="  pt-2  ">
                            <img src="/src/assets/images/section4/phone2.png" alt="" className="w-20  "/>
                        </div>
                    </div>
                    <div className="col8 flex  px-5 py-5 border w-[228px] xl:w-[180px]  space-x- border-gray-400 bg-white  lg:hidden  md:hidden xs:hidden 2xs:hidden sm:hidden hover:scale-110 transition-transform">
                        <div>
                            <h1 className="font-semibold">Electric kettle</h1>
                            <p className="text-sm text-gray-400 ">from <br/>USD 240</p>
                        </div>
                        <div className="  pt-2  ">
                            <img src="/src/assets/images/section4/phone3.png" alt="" className="w-20 "/>
                        </div>
                    </div>
                </div>
                <Link to="/products" className="p-5 font-bold  bg-white text-blue-600 text-xl   xl:hidden 2xl:hidden 3xl:hidden cursor-pointer">Source now &#8594;</Link>
            </div>
        </section>

        <section className="relative mt-6 rounded-md bg-cover  xs:mt-2 sm:mt-2 xs:p-0 xs:bg-none 2xs:mx-0 2xs:mt-3 2xs:p-0 2xs:bg-none border border-gray-400 mx-20 xl:mx-16 lg:mx-5 md:mx-10 sm:mx-5 xs:mx-0" style={{background:'url(/src/assets/images/section5/bg3.png)'}}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/100 via-blue-500/90 to-blue-400/70"></div>
            <div className="relative flex p-10 2xs:p-4 xs:p-4">
                <div className="w-full pr-52 space-y-4 2xs:pr-0 xs:pr-20 sm:pr-10 md:pr-20 lg:pr-16">
                    <h1 className="text-white text-3xl font-semibold ">
                        An easy way to send request to all suppliers
                    </h1>
                    <p className="text-white text-sm 2xs:hidden xs:hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus esse inventore natus nihil sed enim</p>
                    <button className="px-3 py-2 bg-blue-600 text-white w-fit rounded-md mt-10 sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden">Send inquiry</button>
                </div>
                <div className="bg-white p-5 rounded-md w-full space-y-4 2xs:hidden xs:hidden">
                    <div className="">
                        <h1 className="text-xl font-semibold">Send quote to suppliers</h1>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <input type="text"  placeholder="What item you need?" className="placeholder-black py-1 px-2 border border-gray-300 w-full rounded-md"/>
                        <textarea placeholder="Type more details" className="py-1 px-2 border border-gray-300 w-full rounded-md h-20 "></textarea>
                        <div className="flex space-x-4">
                            <input type="text" placeholder="Quantity" className=" placeholder-black py-1 px-2 border border-gray-300  rounded-md" />
                            <select className=" py-1 px-2 border border-gray-300  rounded-md">
                                <option>Pcs</option>
                                <option >1</option>
                                <option >2</option>
                                <option >3</option>
                            </select>
                        </div>
                        <button className="px-3 py-2 bg-blue-600 text-white w-fit rounded-md">Send inquiry</button>
                    </div>
                </div>
            </div>
        </section>

        <section className="mx-20 xl:mx-16 lg:mx-5 md:mx-10 sm:mx-5 xs:mx-0  mt-6 rounded-md xs:mt-2 sm:mt-2 xs:p-0 xs:bg-none 2xs:mx-2 2xs:mt-3 2xs:p-0 2xs:bg-none ">
            <h1 className="text-2xl font-bold">Recommended items</h1>
            <div className="flex flex-wrap gap-5 mt-4 2xs:gap-2 justify-center">
                <div className="bg-white shadow-md shadow-gray-400   px-3 py-2 rounded-md border border-gray-400 hover:animate-pulse">
                    <a href="/products">
                        <img src="/src/assets/images/section6/shirt.png" className="w-48 2xs:w-32" alt="" />
                        <h1 className="font-bold pt-3 text-lg">10.30$</h1>
                        <p className="text-sm text-gray-500 w-40">T-shirts with multiple colors for men</p>
                    </a>
                </div>
                <div className="bg-white shadow-md shadow-gray-400 hover:animate-pulse px-3 py-2 rounded-md border border-gray-400">
                    <a href="/products">
                        <img src="/src/assets/images/section6/shirt3.png" className="w-48 2xs:w-32" alt="" />
                        <h1 className="font-bold pt-3">12.50$</h1>
                        <p className="text-sm text-gray-500 w-40">Brown winter coat medium size</p>
                    </a>
                </div>
                <div className="bg-white shadow-md shadow-gray-400 hover:animate-pulse px-3 py-2 rounded-md border border-gray-400">
                    <a href="/products">
                        <img src="/src/assets/images/section6/suit.png" className="w-48 2xs:w-32" alt="" />
                        <h1 className="font-bold pt-3">34.30$</h1>
                        <p className="text-sm text-gray-500 w-40">Blue suit for men</p>
                    </a>
                </div>
                <div className="bg-white shadow-md shadow-gray-400 hover:animate-pulse px-3 py-2 rounded-md border border-gray-400">
                    <a href="/products">
                        <img src="/src/assets/images/section6/wallet.png" className="w-48 2xs:w-32" alt="" />
                        <h1 className="font-bold pt-3">10.30$</h1>
                        <p className="text-sm text-gray-500 w-40">Blue wallet for men leather material</p>
                    </a>
                </div>
                <div className="bg-white shadow-md shadow-gray-400 hover:animate-pulse px-3 py-2 rounded-md border border-gray-400 xs:hidden 2xs:hidden">
                    <a href="/products">
                        <img src="/src/assets/images/section6/bag.png" className="w-48" alt="" />
                        <h1 className="font-bold pt-3">99.0$</h1>
                        <p className="text-sm text-gray-500 w-40">Jeans bag for travel for men</p>
                    </a>
                </div>
                <div className="bg-white shadow-md shadow-gray-400 hover:animate-pulse px-3 py-2 rounded-md border border-gray-400 xs:hidden 2xs:hidden">
                    <a href="/products">
                        <img src="/src/assets/images/section6/short.png" className="w-48" alt="" />
                        <h1 className="font-bold pt-3">9.99$</h1>
                        <p className="text-sm text-gray-500 w-40">Jeans short for travel for men</p>
                    </a>
                </div>
                <div className="bg-white shadow-md shadow-gray-400 hover:animate-pulse px-3 py-2 rounded-md border border-gray-400 xs:hidden 2xs:hidden">
                    <a href="/products">
                        <img src="/src/assets/images/section6/headphone2.png" className="w-48" alt="" />
                        <h1 className="font-bold pt-3">99.0$</h1>
                        <p className="text-sm text-gray-500 w-40">Headset for gaming with mic</p>
                    </a>
                </div>
                <div className="bg-white shadow-md shadow-gray-400 hover:animate-pulse px-3 py-2 rounded-md border border-gray-400 xs:hidden 2xs:hidden">
                    <a href="/products">
                        <img src="/src/assets/images/section6/shirt2.png" className="w-48" alt="" />
                        <h1 className="font-bold pt-3">10.00$</h1>
                        <p className="text-sm text-gray-500 w-40">T-shirts with multiple colors for men</p>
                    </a>
                </div>
                <div className="bg-white shadow-md shadow-gray-400 hover:animate-pulse px-3 py-2 rounded-md border border-gray-400 xs:hidden 2xs:hidden">
                    <a href="/products">
                        <img src="/src/assets/images/section6/wallet.png" className="w-48" alt="" />
                        <h1 className="font-bold pt-3">34.00$</h1>
                        <p className="text-sm text-gray-500 w-40">Leather wallet</p>
                    </a>
                </div>
                <div className="bg-white shadow-md shadow-gray-400 hover:animate-pulse px-3 py-2 rounded-md border border-gray-400 xs:hidden 2xs:hidden">
                    <a href="/products">
                        <img src="/src/assets/images/section6/kettle.png" className="w-48" alt="" />
                        <h1 className="font-bold pt-3">80.90$</h1>
                        <p className="text-sm text-gray-500 w-40">Kettle </p>
                    </a>
                </div>
            </div>
        </section>

        <section className="mx-28 xl:mx-16 lg:mx-5 md:mx-10 sm:mx-5 xs:mx-0 2xs:mx-0  mt-6 rounded-md   xs:mt-2 sm:mt-2 xs:p-0 xs:bg-none  2xs:mt-3 2xs:p-0 2xs:bg-none ">
            <h1 className="text-2xl font-bold">Our extra services</h1>
            <div className="flex flex-wrap mt-4 gap-4 xs:gap-2 justify-evenly items-center sm:mx-0 xs:mx-14 2xs:mx-16 lg-mx-0 2xl:mx-0">
                <div className="bg-white rounded-md shadow-md shadow-gray-400">
                    <img src="/src/assets/images/section7/img1.png " className="w-64 h-28 rounded-t-md " alt="" />
                    <div className="flex gap-14">
                        <h1 className="p-4">Source from <br/> industry Hubs</h1>
                        <a href="#" className="-mt-6"><i className="fa-solid fa-magnifying-glass bg-gray-300 rounded-full p-4 border border-white "></i></a>
                    </div>
                </div> 
                <div className="bg-white rounded-md shadow-md shadow-gray-400">
                    <img src="/src/assets/images/section7/img2.png " className="w-64 h-28 rounded-t-md " alt="" />
                    <div className="flex gap-12">
                        <h1 className="p-4">Customize your <br/> products</h1>
                        <a href="#" className="-mt-6"><i className="fa-solid fa-box-archive bg-gray-300 rounded-full p-4 border border-white "></i></a>
                    </div>
                </div>
                <div className="bg-white rounded-md shadow-md shadow-gray-400">
                    <img src="/src/assets/images/section7/img3.png " className="w-64 h-28 rounded-t-md " alt="" />
                    <div className="flex gap-1">
                        <h1 className="p-4">Fast, reliable shipping <br/> by ocean or air</h1>
                        <a href="#" className="-mt-6"><i className="fa-regular fa-paper-plane bg-gray-300 rounded-full p-4 border border-white "></i></a>
                    </div>
                </div>
                <div className="bg-white rounded-md shadow-md shadow-gray-400">
                    <img src="/src/assets/images/section7/img4.png" className="w-64 h-28 rounded-t-md " alt="" />
                    <div className="flex gap-4">
                        <h1 className="p-4">Product monitoring <br/> and inspection</h1>
                        <a href="#" className="-mt-6"><i className="fa-solid fa-shield-halved bg-gray-300 rounded-full p-4 border border-white "></i></a>
                    </div>
                </div>
            </div>
        </section>

        <section className="mx-20 xl:mx-16 lg:mx-5 md:mx-10 sm:mx-5 xs:mx-0  mt-6 rounded-md   xs:mt-2 sm:mt-2 xs:p-0 xs:bg-none 2xs:mx-0 2xs:mt-3 2xs:p-0 2xs:bg-none ">
            <h1 className="text-2xl font-bold mb-5">Suppliers by region</h1>
            <div className="flex flex-wrap gap-x-16 gap-y-4 2xs:gap-2 xs:gap-2 justify-center ">
                <div className="flex w-44">
                    <img src="/src/assets/images/flags/uae.webp" className="w-10 h-8 mt-2" alt="" />
                    <div className="pl-2">
                        <h1 className=" font-semibold">Arabic Emirates</h1>
                        <p className="text-sm text-gray-500">Shopname.ae</p>
                    </div>
                </div>
                <div className="flex w-44">
                    <img src="/src/assets/images/flags/australia.jpeg" className="w-10 h-8 mt-2" alt="" />
                    <div className="pl-2">
                        <h1 className=" font-semibold">Australia</h1>
                        <p className="text-sm text-gray-500">Shopname.ae</p>
                    </div>
                </div>
                <div className="flex w-44">
                    <img src="/src/assets/images/flags/usa.png" className="w-10 h-8 mt-2" alt="" />
                    <div className="pl-2">
                        <h1 className=" font-semibold">United States</h1>
                        <p className="text-sm text-gray-500">Shopname.ae</p>
                    </div>
                </div>
                <div className="flex w-44">
                    <img src="/src/assets/images/flags/russia.jpeg" className="w-10 h-8 mt-2" alt="" />
                    <div className="pl-2">
                        <h1 className=" font-semibold">Russia</h1>
                        <p className="text-sm text-gray-500">Shopname.ae</p>
                    </div>
                </div>
                <div className="flex w-44">
                    <img src="/src/assets/images/flags/itzly.jpeg" className="w-10 h-8 mt-2" alt="" />
                    <div className="pl-2">
                        <h1 className=" font-semibold">Italy</h1>
                        <p className="text-sm text-gray-500">Shopname.ae</p>
                    </div>
                </div>
                <div className="flex w-44">
                    <img src="/src/assets/images/flags/denmark.jpeg" className="w-10 h-8 mt-2" alt="" />
                    <div className="pl-2">
                        <h1 className=" font-semibold">Denmark    </h1>
                        <p className="text-sm text-gray-500">Shopname.ae</p>
                    </div>
                </div>
                <div className="flex  w-44">
                    <img src="/src/assets/images/flags/france.jpeg" className="w-10 h-8 mt-2" alt="" />
                    <div className="pl-2">
                        <h1 className=" font-semibold">france</h1>
                        <p className="text-sm text-gray-500">Shopname.ae</p>
                    </div>
                </div>
                <div className="flex w-44">
                    <img src="/src/assets/images/flags/ger.jpeg" className="w-10 h-8 mt-2" alt="" />
                    <div className="pl-2">
                        <h1 className=" font-semibold">Germany</h1>
                        <p className="text-sm text-gray-500">Shopname.ae</p>
                    </div>
                </div>
                <div className="flex w-44">
                    <img src="/src/assets/images/flags/china.jpeg" className="w-10 h-8 mt-2" alt="" />
                    <div className="pl-2">
                        <h1 className=" font-semibold">China</h1>
                        <p className="text-sm text-gray-500">Shopname.ae</p>
                    </div>
                </div>
                <div className="flex w-44">
                    <img src="/src/assets/images/flags/britain.jpeg" className="w-10 h-8 mt-2" alt="" />
                    <div className="pl-2">
                        <h1 className=" font-semibold">Great Britain</h1>
                        <p className="text-sm text-gray-500">Shopname.ae</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-6 bg-gray-300 xs:mt-2 sm:mt-2 xs:p-0   2xs:mt-3 2xs:p-0  ">
            <div class="text-center py-10">
                <h1 class="text-2xl font-bold">Subscribe on our newsletter</h1>
                <p class="text-gray-600">Get daily news on upcoming offers from many suppliers all over the world</p>
                <div class="mt-5">
                    <div class="">
                        <i class="fa-regular fa-envelope translate-x-8 text-gray-400"></i>
                        <input 
                          type="text" 
                          placeholder="Email" 
                          class="pl-10 py-2 border border-gray-300 w-72 rounded-md"
                        />
                        <button class="bg-blue-600 text-white py-2 px-4 rounded-md ml-1">Subscribe</button>
                      </div>
                </div>
            </div>
            
        </section>
    </div>
  )
}

export default Home
