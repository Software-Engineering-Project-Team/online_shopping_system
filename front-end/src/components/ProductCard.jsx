import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div key={product.name} className="card bg-base-100 shadow-xl">
      <figure className="h-48 flex items-center justify-center bg-white p-1">
        <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
      </figure>
      <div className="card-body flex flex-col justify-between p-4">
        <div>
          <h2 className="justify-center card-title text-lg font-semibold mb-2 text-center">{product.name}</h2>
          <p className="text-center mb-2">{product.description}</p>
          <p className="text-center text-lg font-bold text-green-950 mb-4">${product.price}</p>
        </div>
        <div className="card-actions flex flex-row items-center justify-evenly">
          <button
            className="bg-green-400 hover:bg-green-700 btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm m-2"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <div className="flex flex-col gap-2 items-center">
            {product.identifiers.map((identifier) => (
              <div key={identifier} className="badge badge-outline">{identifier}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;