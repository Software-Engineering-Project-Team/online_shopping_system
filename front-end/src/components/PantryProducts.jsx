import React, { useState, useEffect } from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';
import useSortedProducts from '../hooks/useSortedProducts';
import SortOptions from './SortOptions';

export const pantryProducts = [
  { id: 14001 , category: 'Pasta', name: 'Spaghetti', description: 'Classic Italian spaghetti', image: 'https://m.media-amazon.com/images/I/51bLvtKX5bL._AC_UL320_.jpg', identifiers: ['Pasta', 'Organic'], price: '1.99', availability: 10 },
  { id: 14002 , category: 'Pasta', name: 'Penne', description: 'Penne pasta', image: 'https://m.media-amazon.com/images/I/51SXWIlCPXL._AC_UL320_.jpg', identifiers: ['Pasta', 'Organic'], price: '1.99', availability: 10 },
  { id: 14003 , category: 'Pasta', name: 'Macaroni', description: 'Elbow macaroni pasta', image: 'https://m.media-amazon.com/images/I/51lRej9w7tL._AC_UL320_.jpg', identifiers: ['Pasta'], price: '1.99', availability: 10 },
  { id: 14004 , category: 'Rice', name: 'White Rice', description: 'Long grain white rice', image: 'https://m.media-amazon.com/images/I/71Iu2Odw-VS._AC_UL320_.jpg', identifiers: ['Rice'], price: '8.99', availability: 10 },
  { id: 14005 , category: 'Rice', name: 'Brown Rice', description: 'Whole grain brown rice', image: 'https://m.media-amazon.com/images/I/71dPEOMW09L._AC_UL320_.jpg', identifiers: ['Rice'], price: '2.99', availability: 10 },
  { id: 14006 , category: 'Rice', name: 'Basmati Rice', description: 'Aromatic basmati rice', image: 'https://m.media-amazon.com/images/I/61Aw0N9y7jL._AC_UL320_.jpg', identifiers: ['Rice'], price: '3.99', availability: 10 },
  { id: 14007 , category: 'Canned Goods', name: 'Tomato Sauce', description: 'Rich tomato sauce', image: 'https://m.media-amazon.com/images/I/81iWdrn0RWL._AC_UL320_.jpg', identifiers: ['Canned Goods', 'Organic'], price: '1.99', availability: 10 },
  { id: 14008 , category: 'Canned Goods', name: 'Black Beans', description: 'Organic black beans', image: 'https://m.media-amazon.com/images/I/51zT6SXgshL._AC_UL320_.jpg', identifiers: ['Canned Goods'], price: '1.99', availability: 10 },
  { id: 14009 , category: 'Canned Goods', name: 'Chickpeas/Garbanzo', description: 'Organic chickpeas/Garbanzo Beans', image: 'https://m.media-amazon.com/images/I/51Qa1Ft9MgL._AC_UL320_.jpg', identifiers: ['Canned Goods'], price: '1.99', availability: 10 },
  { id: 14010 , category: 'Baking', name: 'All-Purpose Flour', description: 'Versatile all-purpose flour', image: 'https://m.media-amazon.com/images/I/5105pRDKoNL._AC_UL320_.jpg', identifiers: ['Baking'], price: '2.99', availability: 10 },
  { id: 14011 , category: 'Baking', name: 'Sugar', description: 'Granulated white sugar', image: 'https://m.media-amazon.com/images/I/51KyGj22x1L._AC_UL320_.jpg', identifiers: ['Baking', 'Organic'], price: '1.99', availability: 10 },
  { id: 14012 , category: 'Baking', name: 'Baking Powder', description: 'Leavening agent for baking', image: 'https://m.media-amazon.com/images/I/51BEW4IJkdL._AC_UL320_.jpg', identifiers: ['Baking'], price: '1.99', availability: 10 },
  { id: 14013 , category: 'Oil', name: 'Olive Oil', description: 'Extra virgin olive oil', image: 'https://m.media-amazon.com/images/I/71R5t68XRqL._AC_UL320_.jpg', identifiers: ['Oil'], price: '7.99', availability: 10 },
  { id: 14014 , category: 'Oil', name: 'Canola Oil', description: 'Versatile canola oil', image: 'https://m.media-amazon.com/images/I/518hncyP27L._AC_UL320_.jpg', identifiers: ['Oil'], price: '4.99', availability: 10 },
  { id: 14015 , category: 'Oil', name: 'Coconut Oil', description: 'Organic coconut oil', image: 'https://m.media-amazon.com/images/I/510HSvpgN-L._AC_UL320_.jpg', identifiers: ['Oil', 'Organic'], price: '6.99', availability: 10 },
  { id: 14016 , category: 'Spices', name: 'Salt', description: 'Fine table salt', image: 'https://m.media-amazon.com/images/I/41iHKHxkKcL._AC_UL320_.jpg', identifiers: ['Spices'], price: '0.99', availability: 10 },
  { id: 14017 , category: 'Spices', name: 'Pepper', description: 'Ground black pepper', image: 'https://m.media-amazon.com/images/I/71jI6miUq5L._AC_UL320_.jpg', identifiers: ['Spices'], price: '2.99', availability: 10 },
  { id: 14018 , category: 'Spices', name: 'Paprika', description: 'Sweet paprika powder', image: 'https://m.media-amazon.com/images/I/415q8nh0B5L._SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Spices', 'Organic'], price: '3.99', availability: 10 },
  { id: 14019 , category: 'Spread', name: 'Peanut Butter', description: 'Creamy peanut butter', image: 'https://m.media-amazon.com/images/I/517LgmrkViL._AC_UL320_.jpg', identifiers: ['Spread'], price: '2.99', availability: 10 },
  { id: 14020 , category: 'Spread', name: 'Nutella', description: 'Chocolate hazelnut spread', image: 'https://m.media-amazon.com/images/I/71wAkcBRaTL._AC_UL320_.jpg', identifiers: ['Spread'], price: '3.99', availability: 10 },
  { id: 14021 , category: 'Breakfast', name: 'Oats', description: 'Rolled oats for breakfast', image: 'https://m.media-amazon.com/images/I/61+27eCZ34L._AC_UL320_.jpg', identifiers: ['Breakfast', 'Organic'], price: '2.99', availability: 10 },
  { id: 14022 , category: 'Breakfast', name: 'Pancake Mix', description: 'Fluffy pancake mix', image: 'https://m.media-amazon.com/images/I/51paPmEf5TL._AC_UL320_.jpg', identifiers: ['Breakfast'], price: '3.99', availability: 10 },
  { id: 14023 , category: 'Breakfast', name: 'Cereal', description: 'Crunchy breakfast cereal', image: 'https://m.media-amazon.com/images/I/81Mk1b019qL._AC_UL320_.jpg', identifiers: ['Breakfast'], price: '3.99', availability: 10 },
  { id: 14024 , category: 'Condiments', name: 'Ketchup', description: 'Tomato ketchup', image: 'https://m.media-amazon.com/images/I/716J0pLoyZL._AC_UL320_.jpg', identifiers: ['Condiments', 'Organic'], price: '1.99', availability: 10 },
  { id: 14025 , category: 'Condiments', name: 'Mustard', description: 'Yellow mustard', image: 'https://m.media-amazon.com/images/I/71iNDByzp8L._AC_UL320_.jpg', identifiers: ['Condiments', 'Organic'], price: '1.99', availability: 10 },
  { id: 14026 , category: 'Condiments', name: 'Mayonnaise', description: 'Creamy mayonnaise', image: 'https://m.media-amazon.com/images/I/41cEKQJTNaL._AC_UL320_.jpg', identifiers: ['Condiments', 'Organic'], price: '2.99', availability: 10 },
  { id: 14027 , category: 'Sauces', name: 'Soy Sauce', description: 'Salty soy sauce', image: 'https://m.media-amazon.com/images/I/812PFiPJUGL._AC_UL320_.jpg', identifiers: ['Sauces', 'Organic'], price: '2.99', availability: 10 },
  { id: 14028 , category: 'Sauces', name: 'Hot Sauce', description: 'Spicy hot sauce', image: 'https://m.media-amazon.com/images/I/41uSqx95cJL._SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Sauces'], price: '2.99', availability: 10 },
  { id: 14029 , category: 'Sauces', name: 'BBQ Sauce', description: 'Smoky barbecue sauce', image: 'https://m.media-amazon.com/images/I/71N5OBB35GL._AC_UL320_.jpg', identifiers: ['Sauces', 'Organic'], price: '3.99', availability: 10 },
  { id: 14030 , category: 'Pasta', name: 'Fusilli', description: 'Spiral-shaped fusilli pasta', image: 'https://m.media-amazon.com/images/I/510NkHG3wjL._AC_UL320_.jpg', identifiers: ['Pasta', 'Organic'], price: '1.99', availability: 10 },
];

export const newPantryProducts = [
  { id: 14031, category: 'Pasta', name: 'Shells', description: 'Organic pasta shells', image: 'https://m.media-amazon.com/images/I/51gJpUDMnbL._AC_UL320_.jpg', identifiers: ['Pasta'], price: '2.99', availability: 10 },
  { id: 14032, category: 'Canned Goods', name: 'Cranberry Sauce', description: 'Canned cranberry sauce', image: 'https://m.media-amazon.com/images/I/61O5oo07laL._AC_UL320_.jpg', identifiers: ['Canned Goods'], price: '1.99', availability: 10 }
];

const PantryProducts = ({ setSearchQuery, searchQuery, sortType, setSortType }) => {
  const { sortedProducts } = useSortedProducts(pantryProducts, searchQuery, sortType);

  useEffect(() => {
    setSearchQuery('');
  }, []);
  return (
    <div className="container mx-auto py-8 px-4 bg-green-200">
      <Header title="Pantry Essentials" bgImage={bgHero} />
      <SortOptions sortType={sortType} setSortType={setSortType} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PantryProducts;