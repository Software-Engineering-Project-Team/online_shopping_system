import React, { useState, useEffect } from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';
import useSortedProducts from '../hooks/useSortedProducts';

export const produceProducts = [
  { id: 17001 , category: 'Fruits', name: 'Apple', description: 'Fresh and crisp apples', image: 'https://m.media-amazon.com/images/I/71PxRvQMaoL._AC_UL320_.jpg', identifiers: ['Fruits', 'Organic'], price: '1.99', availability: 10 },
  { id: 17002 , category: 'Fruits', name: 'Banana', description: 'Sweet and ripe bananas', image: 'https://m.media-amazon.com/images/I/61aLynLf2GL._AC_UL320_.jpg', identifiers: ['Fruits', 'Organic'], price: '0.99', availability: 10 },
  { id: 17003 , category: 'Vegetables', name: 'Carrot', description: 'Organic carrots', image: 'https://m.media-amazon.com/images/I/81mNjtcGUhL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '1.99', availability: 10 },
  { id: 17004 , category: 'Vegetables', name: 'Broccoli', description: 'Fresh broccoli florets', image: 'https://m.media-amazon.com/images/I/81okuNWBV5L._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '1.99', availability: 10 },
  { id: 17005 , category: 'Fruits', name: 'Orange', description: 'Juicy oranges', image: 'https://m.media-amazon.com/images/I/71ohLOFjl0L._AC_UL320_.jpg', identifiers: ['Fruits', 'Organic'], price: '1.99', availability: 10 },
  { id: 17006 , category: 'Vegetables', name: 'Spinach', description: 'Fresh organic spinach', image: 'https://m.media-amazon.com/images/I/61RvmCudEcL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '2.99', availability: 10 },
  { id: 17007 , category: 'Fruits', name: 'Strawberries', description: 'Sweet strawberries', image: 'https://m.media-amazon.com/images/I/8143FLAy6GL._AC_UL320_.jpg', identifiers: ['Fruits', 'Organic'], price: '3.99', availability: 10 },
  { id: 17008 , category: 'Vegetables', name: 'Tomatoes', description: 'Ripe tomatoes', image: 'https://m.media-amazon.com/images/I/81avkS31xRL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '2.99', availability: 10 },
  { id: 17009 , category: 'Fruits', name: 'Grapes', description: 'Juicy green grapes', image: 'https://m.media-amazon.com/images/I/81u0bnmfTdL._AC_UL320_.jpg', identifiers: ['Fruits', 'Organic'], price: '2.99', availability: 10 },
  { id: 17010 , category: 'Vegetables', name: 'Lettuce', description: 'Fresh romaine lettuce', image: 'https://m.media-amazon.com/images/I/51g0cEcytrL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '1.99', availability: 10 },
  { id: 17011 , category: 'Fruits', name: 'Blueberries', description: 'Fresh blueberries', image: 'https://m.media-amazon.com/images/I/81T6S7qRDsL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '4.99', availability: 10 },
  { id: 17012 , category: 'Vegetables', name: 'Bell Peppers', description: 'Organic mixed bell peppers', image: 'https://m.media-amazon.com/images/I/41GX6fP9t8L._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '3.99', availability: 10 },
  { id: 17013 , category: 'Fruits', name: 'Mango', description: 'Sweet and juicy mangoes', image: 'https://m.media-amazon.com/images/I/81quGLspRAL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '1.99', availability: 10 },
  { id: 17014 , category: 'Vegetables', name: 'Cucumber', description: 'Fresh cucumbers', image: 'https://m.media-amazon.com/images/I/71hxuisJhRL._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '0.99', availability: 10 },
  { id: 17015 , category: 'Fruits', name: 'Pineapple', description: 'Sweet and tangy pineapple', image: 'https://m.media-amazon.com/images/I/41u9Fj425WL._SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Fruits'], price: '2.99', availability: 10 },
  { id: 17016 , category: 'Vegetables', name: 'Zucchini', description: 'Organic zucchini', image: 'https://m.media-amazon.com/images/I/31bPNRjtLbS._SY300_SX300_QL70_FMwebp_.jpg', identifiers: ['Vegetables', 'Organic'], price: '1.99', availability: 10 },
  { id: 17017 , category: 'Fruits', name: 'Watermelon', description: 'Refreshing watermelon', image: 'https://m.media-amazon.com/images/I/51fAOYUQHlL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '5.99', availability: 10 },
  { id: 17018 , category: 'Vegetables', name: 'Kale', description: 'Fresh organic kale', image: 'https://m.media-amazon.com/images/I/61Av-PPnnUL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '2.99', availability: 10 },
  { id: 17019 , category: 'Fruits', name: 'Peach', description: 'Sweet and juicy peaches', image: 'https://m.media-amazon.com/images/I/811d00dE-AL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '2.99', availability: 10 },
  { id: 17020 , category: 'Vegetables', name: 'Gold Potato', description: 'Fresh potatoes', image: 'https://m.media-amazon.com/images/I/51EItxbkEyS._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '0.99', availability: 10 },
  { id: 17021 , category: 'Vegetables', name: 'Russet Potato', description: 'Fresh potatoes', image: 'https://m.media-amazon.com/images/I/71nYyftNNeL._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '0.99', availability: 10 },
  { id: 17022 , category: 'Fruits', name: 'Lemon', description: 'Fresh lemons', image: 'https://m.media-amazon.com/images/I/710O+MVcd6L._AC_UL320_.jpg', identifiers: ['Fruits'], price: '0.99', availability: 10 },
  { id: 17023 , category: 'Vegetables', name: 'Onion', description: 'Fresh onions', image: 'https://m.media-amazon.com/images/I/71785Jrt80L._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '0.99', availability: 10 },
  { id: 17024 , category: 'Fruits', name: 'Kiwi', description: 'Fresh kiwi', image: 'https://m.media-amazon.com/images/I/81gZRgXT50L._AC_UL320_.jpg', identifiers: ['Fruits'], price: '0.99', availability: 10 },
  { id: 17025 , category: 'Vegetables', name: 'Garlic', description: 'Fresh garlic', image: 'https://m.media-amazon.com/images/I/71KpWVcGo5L._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '3.99', availability: 10 },
  { id: 17026 , category: 'Fruits', name: 'Cherry', description: 'Fresh cherries', image: 'https://m.media-amazon.com/images/I/81HGBCKVClL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '3.99', availability: 10 },
  { id: 17027 , category: 'Vegetables', name: 'Mushrooms', description: 'Organic mushrooms', image: 'https://m.media-amazon.com/images/I/61oBk8h4jPL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '4.99', availability: 10 },
  { id: 17028 , category: 'Fruits', name: 'Raspberry', description: 'Fresh raspberries', image: 'https://m.media-amazon.com/images/I/71CJQWqAxFL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '4.99', availability: 10 },
  { id: 17029 , category: 'Vegetables', name: 'Asparagus', description: 'Fresh asparagus', image: 'https://m.media-amazon.com/images/I/71rpY2GtFHL._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '2.99', availability: 10 },
];

export const newProduceProducts = [
  { id: 17030, category: 'Fruits', name: 'Avacado', description: 'Fresh and ripe Avacado', image: 'https://m.media-amazon.com/images/I/81LKLCmdAQL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '1.99', availability: 10 },
  { id: 17031, category: 'Vegetables', name: 'Blackberries', description: 'Fresh blackberries', image: 'https://m.media-amazon.com/images/I/71Ia-osdbkL._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '2.99', availability: 10 }
];

const ProduceProducts = ({ setSearchQuery, searchQuery, sortType }) => {
  const { sortedProducts } = useSortedProducts(produceProducts, searchQuery, sortType);

  useEffect(() => {
    setSearchQuery('');
  }, []);
  return (
    <div className="container mx-auto py-8 px-4 bg-green-200">
      <Header title="Fresh Produce" bgImage={bgHero} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProduceProducts;