import React from 'react';

const beveragesProducts = [
  { category: 'Juices', name: 'Orange Juice', description: 'Freshly squeezed orange juice', image: 'https://m.media-amazon.com/images/I/41MyDiMyd0L._SX342_SY445_.jpg', identifiers: ['Juices', 'Organic'], price: '3.49' },
  { category: 'Juices', name: 'Apple Juice', description: 'Crisp apple juice', image: 'https://m.media-amazon.com/images/I/71xfIbrGWfL._AC_UL320_.jpg', identifiers: ['Juices', 'Organic'], price: '2.99' },
  { category: 'Juices', name: 'Grape Juice', description: 'Sweet grape juice', image: 'https://m.media-amazon.com/images/I/71B7Ax2045L._AC_UL320_.jpg', identifiers: ['Juices'], price: '3.99' },
  { category: 'Juices', name: 'Cranberry Juice', description: 'Tart cranberry juice', image: 'https://m.media-amazon.com/images/I/719qt0ILbVL._AC_UL320_.jpg', identifiers: ['Juices'], price: '3.99' },
  { category: 'Tea', name: 'Black Tea', description: 'Sweet black tea', image: 'https://m.media-amazon.com/images/I/71gf01ghAWL._AC_UL320_.jpg', identifiers: ['Tea'], price: '4.49' },
  { category: 'Tea', name: 'Green Tea', description: 'Healthy green tea', image: 'https://m.media-amazon.com/images/I/719AMyv6j5L._AC_UL320_.jpg', identifiers: ['Tea'], price: '4.99' },
  { category: 'Tea', name: 'Herbal Tea', description: 'Calming herbal tea bags', image: 'https://m.media-amazon.com/images/I/81D84tWacwL._AC_UL320_.jpg', identifiers: ['Tea'], price: '5.49' },
  { category: 'Coffee', name: 'Cold brew Coffee', description: 'Cold brew coffee', image: 'https://m.media-amazon.com/images/I/71Rix7rci0L._AC_UL320_.jpg', identifiers: ['Coffee'], price: '7.99' },
  { category: 'Coffee', name: 'Instant Coffee', description: 'Quick instant coffee', image: 'https://m.media-amazon.com/images/I/71NVa8kdBAL._AC_UL320_.jpg', identifiers: ['Coffee'], price: '6.99' },
  { category: 'Coffee', name: 'Espresso', description: 'Strong espresso coffee', image: 'https://m.media-amazon.com/images/I/61fiqC31tiL._AC_UL320_.jpg', identifiers: ['Coffee'], price: '8.99' },
  { category: 'Soda', name: 'Cola', description: 'Classic cola soda', image: 'https://m.media-amazon.com/images/I/81tSHmXkZJL._AC_UL320_.jpg', identifiers: ['Soda'], price: '1.49' },
  { category: 'Soda', name: 'Lemon-Lime Soda', description: 'Refreshing lemon-lime soda', image: 'https://m.media-amazon.com/images/I/71gFH03iYyL._AC_UL320_.jpg', identifiers: ['Soda'], price: '1.49' },
  { category: 'Soda', name: 'Root Beer', description: 'Creamy root beer soda', image: 'https://m.media-amazon.com/images/I/71bu6J1U0PL._AC_UL320_.jpg', identifiers: ['Soda'], price: '1.49' },
  { category: 'Water', name: 'Mineral Water', description: 'Sparkling mineral water', image: 'https://m.media-amazon.com/images/I/61YdOSLHkKL._AC_UL320_.jpg', identifiers: ['Water'], price: '1.99' },
  { category: 'Water', name: 'Spring Water', description: 'Pure spring water', image: 'https://m.media-amazon.com/images/I/51zKtdRMQPL._SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Water'], price: '1.49' },
  { category: 'Water', name: 'Flavored Water', description: 'Fruit flavored water', image: 'https://m.media-amazon.com/images/I/81vn+kpb3AL._AC_UL320_.jpg', identifiers: ['Water'], price: '2.49' },
  { category: 'Sports Drinks', name: 'Electrolyte Drink', description: 'Hydrating electrolyte drink', image: 'https://m.media-amazon.com/images/I/91QQX-tQ6iL._AC_UL320_.jpg', identifiers: ['Sports Drinks'], price: '2.99' },
  { category: 'Sports Drinks', name: 'Energy Drink', description: 'High energy drink', image: 'https://m.media-amazon.com/images/I/71E70Ytt7FL._AC_UL320_.jpg', identifiers: ['Sports Drinks'], price: '2.49' },
  { category: 'Sports Drinks', name: 'Protein Shake', description: 'Protein-packed shake', image: 'https://m.media-amazon.com/images/I/71ehXi7XalL._AC_UL320_.jpg', identifiers: ['Sports Drinks'], price: '3.99' },
  { category: 'Smoothies', name: 'Strawberry Smoothie', description: 'Fresh strawberry smoothie', image: 'https://m.media-amazon.com/images/I/71VrW6+w9rL._AC_UL320_.jpg', identifiers: ['Smoothies'], price: '4.99' },
  { category: 'Smoothies', name: 'Mango Smoothie', description: 'Tropical mango smoothie', image: 'https://m.media-amazon.com/images/I/71742cpdw-L._AC_UL320_.jpg', identifiers: ['Smoothies'], price: '4.99' },
  { category: 'Smoothies', name: 'Green Smoothie', description: 'Healthy green smoothie', image: 'https://m.media-amazon.com/images/I/71PaE4GMMyL._AC_UL320_.jpg', identifiers: ['Smoothies'], price: '5.49' },
];

const sortedBeveragesProducts = beveragesProducts.sort((a, b) => a.category.localeCompare(b.category));

const BeveragesProducts = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Beverages</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {sortedBeveragesProducts.map((product) => (
          <div key={product.name} className="card bg-base-100 w-72 shadow-xl">
            <figure className="h-48 flex items-center justify-center bg-white">
              <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
            </figure>
            <div className="card-body flex flex-col justify-between">
              <div>
                <h2 className="card-title flex justify-center mb-4">{product.name}</h2>
                <p className="card-description flex justify-center">{product.description}</p>
              </div>
              <div className="card-actions flex flex-row items-center">
                <button className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm m-2">Add to Cart</button>
                <div className="flex flex-col gap-1 ml-2">
                  {product.identifiers.map((identifier) => (
                    <div key={identifier} className="badge badge-outline">{identifier}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeveragesProducts;