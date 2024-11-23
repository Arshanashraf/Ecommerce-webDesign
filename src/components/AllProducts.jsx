import React from "react";

const AllProducts = ({ products }) => {
  return (
    <main className="flex-1">
      {products.length === 0 ? (
        <div className="text-center text-gray-600">No products found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-500">Price: ${product.price}</p>
              <p className="text-yellow-500">Rating: {product.rating} ⭐</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default AllProducts;
