import React from "react";
const AllProducts = ({ products }) => {
  return (
    <main className="flex-1">
      {products.length === 0 ? (
        <div className="text-center text-gray-600">No products found.</div>
      ) : (
        <div className="grid grid-cols-1 xs:gird-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <a href={`/details/${product.id}`}>
              <div
                key={product.id}
                className="bg-white rounded-lg flex shadow-md p-4 hover:scale-105 transition-transform xs:flex-col sm:flex-col lg:flex-col"
              >
            <img
              src={product.image}
              alt={product.name}
              className="w-[210px] object-cover rounded"
            />
            <div>
            <div className="flex justify-between w-full"><h3 className="text-lg font-semibold mt-2 ">{product.name}</h3> <a href=""><i class="fa-regular fa-heart text-xl text-blue-500 font-semi-bold border border-gray-300 rounded-md px-2 py-1.5"></i></a></div>
            <p className="font-bold text-xl mt-3">${product.price} <span className="text-gray-400 pl-2 text-base line-through ">$1128.00</span></p>
            <div className="flex gap-2 mt-1">
            <p className="text-yellow-500"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star "></i><i class="fa-solid fa-star text-gray-300"></i> {product.rating} </p>
            <ul className="list-disc flex gap-8 pl-5 marker:text-gray-400 xs:hidden sm:hidden lg:hidden"><li className="text-gray">154 orders</li><li className="text-green-500">Free Shipping</li></ul>
            </div>
            <p className="mt-3 text-lg text-gray-400 pr-10 xs:hidden sm:hidden lg:hidden">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero reprehenderit illo, quam, </p>
            <a href="#" className="text-blue-500 text-lg font-semibold mt-2.5">View details</a>
            </div>
          </div></a>
          ))}
        </div>
      )}
    </main>
  );
};

export default AllProducts;
