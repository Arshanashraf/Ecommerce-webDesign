import React from "react";
import { Link } from "react-router-dom";
import Grid1 from "../assets/images/Icon/grid.png";
import Bars from "../assets/images/Icon/bars.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice"; // Assuming you have an addToCart action in cartSlice

const AllProducts = ({ products }) => {
  console.log("Products received:", products);
  const dispatch = useDispatch();

  // Function to handle adding a product to the cart
  const handleCartButton = (product) => {
    console.log("Adding product to cart:", product);
    dispatch(addToCart(product));
  };

  return (
    <main className="flex-1">
      <div className="flex justify-between sm:justify-center bg-white px-2 py-4 mb-3 rounded-md border border-gray-300 shadow-md shadow-gray-400 xs:hidden 2xs:hidden">
        <div className="sm:hidden">
          <h1>
            12,991 items in <span className="font-semibold">Mobile accessories</span>
          </h1>
        </div>
        <div className="flex gap-1.5">
          <div>
            <input type="checkbox" /> Verified only
          </div>
          <div>
            <select
              name=""
              id=""
              className="w-28 py-1.5 -mt-2 border border-gray-300 rounded-md"
            >
              <option value="">Featured</option>
            </select>
          </div>
          <div className="flex">
            <a
              href=""
              className="p-2 -mt-1.5 hover:bg-gray-300 border border-gray-300 rounded-l-md"
            >
              <img src={Grid1} alt="Grid View" />
            </a>
            <a
              href=""
              className="p-2 -mt-1.5 hover:bg-gray-300  border border-gray-300 rounded-r-md"
            >
              <img src={Bars} alt="List View" />
            </a>
          </div>
        </div>
      </div>
      {products.length === 0 ? (
        <div className="text-center text-gray-600">No products found.</div>
      ) : (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-300 shadow-md shadow-gray-400 rounded-lg flex gap-2 p-4 hover:scale-105 transition-transform xs:flex-col sm:flex-col lg:flex-col 2xs:flex-col"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-[210px] h-[210px] object-cover rounded"
              />
              <div>
                <div className="flex justify-between w-full">
                  <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                  <a href="">
                    <i className="fa-regular fa-heart text-xl text-blue-500 font-semi-bold border border-gray-300 rounded-md px-2 py-1.5"></i>
                  </a>
                </div>
                <p className="font-bold text-xl mt-3">
                  ${product.price}{" "}
                  <span className="text-gray-400 pl-2 text-base line-through">
                    $1128.00
                  </span>
                </p>
                <div className="flex gap-2 mt-1">
                  <p className="text-yellow-500">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star text-gray-300"></i>{" "}
                    {product.rating}
                  </p>
                  <ul className="list-disc flex gap-8 pl-5 marker:text-gray-400 2xs:hidden xs:hidden sm:hidden lg:hidden">
                    <li className="text-gray">154 orders</li>
                    <li className="text-green-500">Free Shipping</li>
                  </ul>
                </div>
                <p className="mt-3 text-lg text-gray-400 pr-10 xs:hidden sm:hidden lg:hidden 2xs:hidden">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                  reprehenderit illo, quam,
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Link
                    to={`/details/${product.id}`}
                    key={product.id}
                    className="text-blue-500 text-lg px-5 py-1.5 font-semibold border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
                  >
                    View details
                  </Link>
                  <button
                    onClick={() => handleCartButton(product)}
                    className="text-white bg-blue-500 text-lg px-3 py-1.5 font-semibold rounded-md border-2 border-blue-500 hover:bg-white hover:text-blue-500"
                  >
                    Add to cart <i className="fa-solid fa-shopping-cart"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default AllProducts;
