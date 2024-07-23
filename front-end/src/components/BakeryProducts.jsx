import React from 'react';

const bakeryProducts = [
  { category: 'Bread', name: 'Whole Wheat Bread', description: 'Freshly baked whole wheat bread', image: 'https://m.media-amazon.com/images/I/71M8DFNTKML._SX679_.jpg', identifiers: ['Bread'], price: '2.99' },
  { category: 'Bread', name: 'Sourdough Bread', description: 'Classic sourdough bread', image: 'https://m.media-amazon.com/images/I/71hD4WFfDiL._AC_UL320_.jpg', identifiers: ['Bread'], price: '3.99' },
  { category: 'Bread', name: 'Baguette', description: 'Crispy French baguette', image: 'https://m.media-amazon.com/images/I/51ALvqJIISL._AC_UL320_.jpg', identifiers: ['Bread'], price: '1.99' },
  { category: 'Pastry', name: 'Croissants', description: 'Buttery croissants', image: 'https://m.media-amazon.com/images/I/81mrfCvXXNS._AC_UL320_.jpg', identifiers: ['Pastry'], price: '5.49' },
  { category: 'Pastry', name: 'Assorted Mini Danish', description: 'Fruit-filled Danish pastries', image: 'https://m.media-amazon.com/images/I/81YOrqOA3hL._AC_UL320_.jpg', identifiers: ['Pastry'], price: '4.99' },
  { category: 'Pastry', name: 'Muffins', description: 'Blueberry muffins', image: 'https://m.media-amazon.com/images/I/61kIPc4Ik1L._AC_UL320_.jpg', identifiers: ['Pastry'], price: '4.99' },
  { category: 'Cake', name: 'Chocolate Cake', description: 'Rich chocolate cake', image: 'https://m.media-amazon.com/images/I/71YpnARJDxL._AC_UL320_.jpg', identifiers: ['Cake'], price: '15.99' },
  { category: 'Cake', name: 'Cheesecake', description: 'Creamy New York cheesecake', image: 'https://m.media-amazon.com/images/I/61X4p9PshYL._AC_UL320_.jpg', identifiers: ['Cake'], price: '18.99' },
  { category: 'Cake', name: 'Carrot Cake', description: 'Moist carrot cake with cream cheese frosting', image: 'https://m.media-amazon.com/images/I/81T1EsB0lzL._AC_UL320_.jpg', identifiers: ['Cake'], price: '16.99' },
  { category: 'Cookie', name: 'Chocolate Chip Cookie', description: 'Classic chocolate chip cookies', image: 'https://m.media-amazon.com/images/I/71PSGkYX-vL._AC_UL320_.jpg', identifiers: ['Cookie'], price: '4.99' },
  { category: 'Cookie', name: 'Oatmeal Raisin Cookie', description: 'Oatmeal raisin cookies', image: 'https://m.media-amazon.com/images/I/51uko-KKkjL._AC_UL320_.jpg', identifiers: ['Cookie'], price: '4.99' },
  { category: 'Cookie', name: 'Sugar Cookie', description: 'Sweet sugar cookies', image: 'https://m.media-amazon.com/images/I/81FY1alN2eS._AC_UL320_.jpg', identifiers: ['Cookie'], price: '4.99' },
  { category: 'Bread', name: 'Ciabatta', description: 'Rustic Italian ciabatta', image: 'https://m.media-amazon.com/images/I/81Se8AZohiL._AC_UL320_.jpg', identifiers: ['Bread'], price: '3.49' },
  { category: 'Pastry', name: 'Cinnamon Rolls', description: 'Fresh cinnamon rolls', image: 'https://m.media-amazon.com/images/I/81ZSPLNq-qL._AC_UL320_.jpg', identifiers: ['Pastry'], price: '4.99' },
  { category: 'Pastry', name: 'Eclair', description: 'Chocolate-covered eclair', image: 'https://m.media-amazon.com/images/I/51ZeVHh+zyL._AC_UL320_.jpg', identifiers: ['Pastry'], price: '3.99' },
  { category: 'Cake', name: 'Lemon Cake', description: 'Sweet lemon cake', image: 'https://m.media-amazon.com/images/I/61udvOAobUL._AC_UL320_.jpg', identifiers: ['Cake'], price: '14.99' },
  { category: 'Cookie', name: 'Peanut Butter Cookie', description: 'Peanut butter cookies', image: 'https://m.media-amazon.com/images/I/61jtH-IWPWL._AC_UL320_.jpg', identifiers: ['Cookie'], price: '4.99' },
  { category: 'Bread', name: 'Multigrain Bread', description: 'Healthy multigrain bread', image: 'https://m.media-amazon.com/images/I/51aOITw0zlL._AC_UL320_.jpg', identifiers: ['Bread'], price: '3.99' },
  { category: 'Pastry', name: 'Apple Pie', description: 'Classic apple pie', image: 'https://m.media-amazon.com/images/I/71BvK0U87VL._AC_UL320_.jpg', identifiers: ['Pastry'], price: '9.99' },
  { category: 'Pastry', name: 'Brownie', description: 'Rich chocolate brownies', image: 'https://m.media-amazon.com/images/I/918VNPOZUeL._AC_UL320_.jpg', identifiers: ['Pastry'], price: '4.49' },
  { category: 'Bread', name: 'Focaccia', description: 'Italian herb focaccia', image: 'https://m.media-amazon.com/images/I/917MmxV0nKL._AC_UL320_.jpg', identifiers: ['Bread'], price: '5.49' },
  { category: 'Cake', name: 'Red Velvet Cake', description: 'Velvety red velvet cake', image: 'https://m.media-amazon.com/images/I/71xGwprlVhL._AC_UL320_.jpg', identifiers: ['Cake'], price: '17.99' },
  { category: 'Cookie', name: 'Snickerdoodle', description: 'Cinnamon sugar snickerdoodle cookies', image: 'https://m.media-amazon.com/images/I/51Esy-amIrL._AC_UL320_.jpg', identifiers: ['Cookie'], price: '4.99' },
  { category: 'Bread', name: 'Rye Bread', description: 'Hearty rye bread', image: 'https://m.media-amazon.com/images/I/81T+7Qm+vwL._AC_UL320_.jpg', identifiers: ['Bread'], price: '3.49' },
  { category: 'Pastry', name: 'Macaron', description: 'Colorful French macarons', image: 'https://m.media-amazon.com/images/I/71n+Idqo9XL._AC_UL320_.jpg', identifiers: ['Pastry'], price: '8.99' },
  { category: 'Cake', name: 'Strawberry Shortcake', description: 'Fresh strawberry shortcake', image: 'https://m.media-amazon.com/images/I/41aNJF0C1LL._AC_UL320_.jpg', identifiers: ['Cake'], price: '16.99' },
  { category: 'Cookie', name: 'Macadamia Nut Cookie', description: 'White chocolate macadamia nut cookies', image: 'https://m.media-amazon.com/images/I/317xvtpDaeL._AC_UL320_.jpg', identifiers: ['Cookie'], price: '4.99' },
  { category: 'Bread', name: 'Pita Bread', description: 'Soft pita bread', image: 'https://m.media-amazon.com/images/I/513gDZTlHZL._AC_UL320_.jpg', identifiers: ['Bread'], price: '2.99' },
  { category: 'Pastry', name: 'Baklava', description: 'Sweet and flaky baklava', image: 'https://m.media-amazon.com/images/I/31uC5AaEBnL._SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Pastry'], price: '7.99' },
];

const sortedBakeryProducts = bakeryProducts.sort((a, b) => a.category.localeCompare(b.category));

const BakeryProducts = ({addToCart}) => {
  return (
   
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Bakery Products</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {sortedBakeryProducts.map((product) => (
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
                <button className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm m-2" onClick={() => addToCart(product) }>Add to Cart</button>
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
export default BakeryProducts;