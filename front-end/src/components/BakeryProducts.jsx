import React from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';
import useSortedProducts from '../hooks/useSortedProducts';

export const bakeryProducts = [
  { id: 3001 , category: 'Bread', name: 'Whole Wheat Bread', description: 'Freshly baked whole wheat bread', image: 'https://m.media-amazon.com/images/I/71M8DFNTKML._SX679_.jpg', identifiers: ['Bread'], price: '2.99', availability: 10 },
  { id: 3002 , category: 'Bread', name: 'Sourdough Bread', description: 'Classic sourdough bread', image: 'https://m.media-amazon.com/images/I/71hD4WFfDiL._AC_UL320_.jpg', identifiers: ['Bread'], price: '3.99', availability: 10 },
  { id: 3003 , category: 'Bread', name: 'Baguette', description: 'Crispy French baguette', image: 'https://m.media-amazon.com/images/I/51ALvqJIISL._AC_UL320_.jpg', identifiers: ['Bread'], price: '1.99', availability: 10 },
  { id: 3004 , category: 'Pastry', name: 'Croissants', description: 'Buttery croissants', image: 'https://m.media-amazon.com/images/I/81mrfCvXXNS._AC_UL320_.jpg', identifiers: ['Pastry'], price: '5.99', availability: 10 },
  { id: 3005 , category: 'Pastry', name: 'Assorted Mini Danish', description: 'Fruit-filled Danish pastries', image: 'https://m.media-amazon.com/images/I/81YOrqOA3hL._AC_UL320_.jpg', identifiers: ['Pastry'], price: '4.99', availability: 10 },
  { id: 3006 , category: 'Pastry', name: 'Muffins', description: 'Blueberry muffins', image: 'https://m.media-amazon.com/images/I/61kIPc4Ik1L._AC_UL320_.jpg', identifiers: ['Pastry'], price: '4.99', availability: 10 },
  { id: 3007 , category: 'Cake', name: 'Chocolate Cake', description: 'Rich chocolate cake', image: 'https://m.media-amazon.com/images/I/71YpnARJDxL._AC_UL320_.jpg', identifiers: ['Cake'], price: '15.99', availability: 10 },
  { id: 3008 , category: 'Cake', name: 'Cheesecake', description: 'Creamy New York cheesecake', image: 'https://m.media-amazon.com/images/I/61X4p9PshYL._AC_UL320_.jpg', identifiers: ['Cake'], price: '18.99', availability: 10 },
  { id: 3009 , category: 'Cake', name: 'Carrot Cake', description: 'Moist carrot cake with cream cheese frosting', image: 'https://m.media-amazon.com/images/I/81T1EsB0lzL._AC_UL320_.jpg', identifiers: ['Cake'], price: '16.99', availability: 10 },
  { id: 3010, category: 'Cookie', name: 'Chocolate Chip Cookie', description: 'Classic chocolate chip cookies', image: 'https://m.media-amazon.com/images/I/71PSGkYX-vL._AC_UL320_.jpg', identifiers: ['Cookie'], price: '4.99', availability: 10 },
  { id: 3011, category: 'Cookie', name: 'Oatmeal Raisin Cookie', description: 'Oatmeal raisin cookies', image: 'https://m.media-amazon.com/images/I/51uko-KKkjL._AC_UL320_.jpg', identifiers: ['Cookie'], price: '4.99', availability: 10 },
  { id: 3012, category: 'Cookie', name: 'Sugar Cookie', description: 'Sweet sugar cookies', image: 'https://m.media-amazon.com/images/I/81FY1alN2eS._AC_UL320_.jpg', identifiers: ['Cookie'], price: '4.99', availability: 10 },
  { id: 3013, category: 'Bread', name: 'Ciabatta', description: 'Rustic Italian ciabatta', image: 'https://m.media-amazon.com/images/I/81Se8AZohiL._AC_UL320_.jpg', identifiers: ['Bread'], price: '3.99', availability: 10 },
  { id: 3014, category: 'Pastry', name: 'Cinnamon Rolls', description: 'Fresh cinnamon rolls', image: 'https://m.media-amazon.com/images/I/81ZSPLNq-qL._AC_UL320_.jpg', identifiers: ['Pastry'], price: '4.99', availability: 10 },
  { id: 3015, category: 'Pastry', name: 'Eclair', description: 'Chocolate-covered eclair', image: 'https://m.media-amazon.com/images/I/51ZeVHh+zyL._AC_UL320_.jpg', identifiers: ['Pastry'], price: '3.99', availability: 10 },
  { id: 3016, category: 'Cake', name: 'Lemon Cake', description: 'Sweet lemon cake', image: 'https://m.media-amazon.com/images/I/61udvOAobUL._AC_UL320_.jpg', identifiers: ['Cake'], price: '14.99', availability: 10 },
  { id: 3017, category: 'Cookie', name: 'Peanut Butter Cookie', description: 'Peanut butter cookies', image: 'https://m.media-amazon.com/images/I/61jtH-IWPWL._AC_UL320_.jpg', identifiers: ['Cookie'], price: '4.99', availability: 10 },
  { id: 3018, category: 'Bread', name: 'Multigrain Bread', description: 'Healthy multigrain bread', image: 'https://m.media-amazon.com/images/I/51aOITw0zlL._AC_UL320_.jpg', identifiers: ['Bread'], price: '3.99', availability: 10 },
  { id: 3019, category: 'Pastry', name: 'Apple Pie', description: 'Classic apple pie', image: 'https://m.media-amazon.com/images/I/71BvK0U87VL._AC_UL320_.jpg', identifiers: ['Pastry'], price: '9.99', availability: 10 },
  { id: 3021, category: 'Pastry', name: 'Brownie', description: 'Rich chocolate brownies', image: 'https://m.media-amazon.com/images/I/918VNPOZUeL._AC_UL320_.jpg', identifiers: ['Pastry'], price: '4.99', availability: 10 },
  { id: 3022, category: 'Bread', name: 'Focaccia', description: 'Italian herb focaccia', image: 'https://m.media-amazon.com/images/I/917MmxV0nKL._AC_UL320_.jpg', identifiers: ['Bread'], price: '5.99', availability: 10 },
  { id: 3023, category: 'Cake', name: 'Red Velvet Cake', description: 'Velvety red velvet cake', image: 'https://m.media-amazon.com/images/I/71xGwprlVhL._AC_UL320_.jpg', identifiers: ['Cake'], price: '17.99', availability: 10 },
  { id: 3024, category: 'Cookie', name: 'Snickerdoodle', description: 'Cinnamon sugar snickerdoodle cookies', image: 'https://m.media-amazon.com/images/I/51Esy-amIrL._AC_UL320_.jpg', identifiers: ['Cookie'], price: '4.99', availability: 10 },
  { id: 3025, category: 'Bread', name: 'Rye Bread', description: 'Hearty rye bread', image: 'https://m.media-amazon.com/images/I/81T+7Qm+vwL._AC_UL320_.jpg', identifiers: ['Bread'], price: '3.99', availability: 10 },
  { id: 3026, category: 'Pastry', name: 'Macaron', description: 'Colorful French macarons', image: 'https://m.media-amazon.com/images/I/71n+Idqo9XL._AC_UL320_.jpg', identifiers: ['Pastry'], price: '8.99', availability: 10 },
  { id: 3027, category: 'Cake', name: 'Strawberry Shortcake', description: 'Fresh strawberry shortcake', image: 'https://m.media-amazon.com/images/I/41aNJF0C1LL._AC_UL320_.jpg', identifiers: ['Cake'], price: '16.99', availability: 10 },
  { id: 3028, category: 'Cookie', name: 'Macadamia Nut Cookie', description: 'White chocolate macadamia nut cookies', image: 'https://m.media-amazon.com/images/I/317xvtpDaeL._AC_UL320_.jpg', identifiers: ['Cookie'], price: '4.99', availability: 10 },
  { id: 3029, category: 'Bread', name: 'Pita Bread', description: 'Soft pita bread', image: 'https://m.media-amazon.com/images/I/513gDZTlHZL._AC_UL320_.jpg', identifiers: ['Bread'], price: '2.99', availability: 10 },
  { id: 3030, category: 'Pastry', name: 'Baklava', description: 'Sweet and flaky baklava', image: 'https://m.media-amazon.com/images/I/31uC5AaEBnL._SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Pastry'], price: '7.99', availability: 10 },
];

const BakeryProducts = ({ searchQuery, sortType }) => {
  const { sortedProducts } = useSortedProducts(bakeryProducts, searchQuery, sortType);

  return (
    <div className="container mx-auto py-8 px-4 bg-green-200">
      <Header title="Bakery & Bread" bgImage={bgHero} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BakeryProducts;