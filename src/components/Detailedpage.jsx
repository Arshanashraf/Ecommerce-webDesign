import React from 'react'
import { useParams } from 'react-router-dom';
import { products } from './products';

const Detailedpage = () => {
    const { productId } = useParams(); // Get the productId from the URL
    const product = products.find((p) => p.id === parseInt(productId));
  
    if (!product) {
      return <p>Product not found</p>;
    }
  return (
    <div>
      
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <img src={product.image} alt={product.name} />
    </div>
  )
}

export default Detailedpage
