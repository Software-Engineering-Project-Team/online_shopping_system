import React, { useState, useEffect } from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';
import useSortedProducts from '../hooks/useSortedProducts';

export const beveragesProducts = [
  { id: 5001, category: 'Juices', name: 'Orange Juice', description: 'Freshly squeezed orange juice', image: 'https://m.media-amazon.com/images/I/41MyDiMyd0L._SX342_SY445_.jpg', identifiers: ['Juices', 'Organic'], price: '3.99', availability: 10 },
  { id: 5002, category: 'Juices', name: 'Apple Juice', description: 'Crisp apple juice', image: 'https://m.media-amazon.com/images/I/71xfIbrGWfL._AC_UL320_.jpg', identifiers: ['Juices', 'Organic'], price: '2.99', availability: 10 },
  { id: 5003, category: 'Juices', name: 'Grape Juice', description: 'Sweet grape juice', image: 'https://m.media-amazon.com/images/I/71B7Ax2045L._AC_UL320_.jpg', identifiers: ['Juices'], price: '3.99', availability: 10 },
  { id: 5004, category: 'Juices', name: 'Cranberry Juice', description: 'Tart cranberry juice', image: 'https://m.media-amazon.com/images/I/719qt0ILbVL._AC_UL320_.jpg', identifiers: ['Juices'], price: '3.99', availability: 10 },
  { id: 5005, category: 'Tea', name: 'Black Tea', description: 'Sweet black tea', image: 'https://m.media-amazon.com/images/I/71gf01ghAWL._AC_UL320_.jpg', identifiers: ['Tea'], price: '4.99', availability: 10 },
  { id: 5006, category: 'Tea', name: 'Green Tea', description: 'Healthy green tea', image: 'https://m.media-amazon.com/images/I/719AMyv6j5L._AC_UL320_.jpg', identifiers: ['Tea'], price: '4.99', availability: 10 },
  { id: 5007, category: 'Tea', name: 'Herbal Tea', description: 'Calming herbal tea bags', image: 'https://m.media-amazon.com/images/I/81D84tWacwL._AC_UL320_.jpg', identifiers: ['Tea'], price: '5.99', availability: 10 },
  { id: 5008, category: 'Coffee', name: 'Cold brew Coffee', description: 'Cold brew coffee', image: 'https://m.media-amazon.com/images/I/71Rix7rci0L._AC_UL320_.jpg', identifiers: ['Coffee'], price: '7.99', availability: 10 },
  { id: 5009, category: 'Coffee', name: 'Instant Coffee', description: 'Quick instant coffee', image: 'https://m.media-amazon.com/images/I/71NVa8kdBAL._AC_UL320_.jpg', identifiers: ['Coffee'], price: '6.99', availability: 10 },
  { id: 5010, category: 'Coffee', name: 'Espresso', description: 'Strong espresso coffee', image: 'https://m.media-amazon.com/images/I/61fiqC31tiL._AC_UL320_.jpg', identifiers: ['Coffee'], price: '8.99', availability: 10 },
  { id: 5011, category: 'Soda', name: 'Cola', description: 'Classic cola soda', image: 'https://m.media-amazon.com/images/I/81tSHmXkZJL._AC_UL320_.jpg', identifiers: ['Soda'], price: '1.99', availability: 10 },
  { id: 5012, category: 'Soda', name: 'Lemon-Lime Soda', description: 'Refreshing lemon-lime soda', image: 'https://m.media-amazon.com/images/I/71gFH03iYyL._AC_UL320_.jpg', identifiers: ['Soda'], price: '1.99', availability: 10 },
  { id: 5013, category: 'Soda', name: 'Root Beer', description: 'Creamy root beer soda', image: 'https://m.media-amazon.com/images/I/71bu6J1U0PL._AC_UL320_.jpg', identifiers: ['Soda'], price: '1.99', availability: 10 },
  { id: 5014, category: 'Water', name: 'Mineral Water', description: 'Sparkling mineral water', image: 'https://m.media-amazon.com/images/I/61YdOSLHkKL._AC_UL320_.jpg', identifiers: ['Water'], price: '1.99', availability: 10 },
  { id: 5015, category: 'Water', name: 'Spring Water', description: 'Pure spring water', image: 'https://m.media-amazon.com/images/I/51zKtdRMQPL._SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Water'], price: '1.99', availability: 10 },
  { id: 5016, category: 'Water', name: 'Flavored Water', description: 'Fruit flavored water', image: 'https://m.media-amazon.com/images/I/81vn+kpb3AL._AC_UL320_.jpg', identifiers: ['Water'], price: '2.99', availability: 10 },
  { id: 5017, category: 'Sports Drinks', name: 'Electrolyte Drink', description: 'Hydrating electrolyte drink', image: 'https://m.media-amazon.com/images/I/91QQX-tQ6iL._AC_UL320_.jpg', identifiers: ['Sports Drinks'], price: '2.99', availability: 10 },
  { id: 5018, category: 'Sports Drinks', name: 'Energy Drink', description: 'High energy drink', image: 'https://m.media-amazon.com/images/I/71E70Ytt7FL._AC_UL320_.jpg', identifiers: ['Sports Drinks'], price: '2.99', availability: 10 },
  { id: 5019, category: 'Sports Drinks', name: 'Protein Shake', description: 'Protein-packed shake', image: 'https://m.media-amazon.com/images/I/71ehXi7XalL._AC_UL320_.jpg', identifiers: ['Sports Drinks'], price: '3.99', availability: 10 },
  { id: 5020, category: 'Smoothies', name: 'Strawberry Smoothie', description: 'Fresh strawberry smoothie', image: 'https://m.media-amazon.com/images/I/71VrW6+w9rL._AC_UL320_.jpg', identifiers: ['Smoothies'], price: '4.99', availability: 10 },
  { id: 5021, category: 'Smoothies', name: 'Mango Smoothie', description: 'Tropical mango smoothie', image: 'https://m.media-amazon.com/images/I/71742cpdw-L._AC_UL320_.jpg', identifiers: ['Smoothies'], price: '4.99', availability: 10 },
  { id: 5022, category: 'Smoothies', name: 'Green Smoothie', description: 'Healthy green smoothie', image: 'https://m.media-amazon.com/images/I/71PaE4GMMyL._AC_UL320_.jpg', identifiers: ['Smoothies'], price: '5.99', availability: 10 },
];

export const newBeveragesProducts = [
  { id: 5023, category: 'Juices', name: 'Pomegranate Juice', description: 'Fresh pomegranate juice', image: 'https://m.media-amazon.com/images/I/51P54Mr1o+L._AC_UL320_.jpg', identifiers: ['Juices'], price: '4.99', availability: 10 },
  { id: 5024, category: 'Soft Drinks', name: 'Root Beer', description: 'Classic root beer', image: 'https://m.media-amazon.com/images/I/81ZlLH-TBLL._AC_UL320_.jpg', identifiers: ['Soft Drinks'], price: '1.99', availability: 10 }
];

const BeveragesProducts = ({ setSearchQuery, searchQuery, sortType }) => {
  const { sortedProducts } = useSortedProducts(beveragesProducts, searchQuery, sortType);

  useEffect(() => {
    setSearchQuery('');
  }, []);

  return (
    <div className="container mx-auto py-8 px-4 bg-green-200">
      <Header title="Beverages" bgImage={bgHero} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BeveragesProducts;