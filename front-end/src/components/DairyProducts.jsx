import React from 'react';

const dairyProducts = [
  { name: 'Milk', description: 'Fresh and organic milk', image: 'https://m.media-amazon.com/images/I/41rxrbktenL._SX300_SY300_QL70_FMwebp_.jpg' },
  { name: 'Cheese', description: 'Kraft American Cheese Slices', image: 'https://m.media-amazon.com/images/I/81R0PQSod5L._SL1500_.jpg' },
  { name: 'Yogurt', description: 'Delicious and healthy yogurt', image: 'path/to/yogurt-image.jpg' },
  { name: 'Butter', description: 'Creamy butter', image: 'path/to/butter-image.jpg' },
];

const DairyProducts = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Dairy Products</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {dairyProducts.map((product) => (
          <div key={product.name} className="card bg-base-100 w-72 shadow-xl">
            <figure>
              <img src={product.image} alt={product.name} className="w-auto h-auto object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Add to Cart</button>
                <div className="badge badge-outline">{product.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DairyProducts;