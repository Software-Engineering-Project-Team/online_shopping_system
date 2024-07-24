import React, { useState, useEffect } from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';
import useSortedProducts from '../hooks/useSortedProducts';

export const bbqProducts = [
  { id: 4001, category: 'Grills', name: 'Charcoal Grill', description: 'Classic charcoal grill', image: 'https://m.media-amazon.com/images/I/61kq1jksFQL._AC_UL320_.jpg', identifiers: ['Grills'], price: '89.99', availability: 10 },
  { id: 4002, category: 'Grills', name: 'Gas Grill', description: 'Propane gas grill', image: 'https://m.media-amazon.com/images/I/71RRy1WEPBL._AC_UL320_.jpg', identifiers: ['Grills'], price: '199.99', availability: 10 },
  { id: 4003, category: 'Grills', name: 'Electric Grill', description: 'Electric indoor/outdoor grill', image: 'https://m.media-amazon.com/images/I/71IDxb7zeML._AC_UL320_.jpg', identifiers: ['Grills'], price: '129.99', availability: 10 },
  { id: 4004, category: 'Accessories', name: 'Grill Cover', description: 'Weather-resistant grill cover', image: 'https://m.media-amazon.com/images/I/71LiO1SychL._AC_UL320_.jpg', identifiers: ['Accessories'], price: '29.99', availability: 10 },
  { id: 4005, category: 'Accessories', name: 'Grill Brush', description: 'Stainless steel grill brush', image: 'https://m.media-amazon.com/images/I/51KEp2hAbQL._AC_UL320_.jpg', identifiers: ['Accessories'], price: '9.99', availability: 10 },
  { id: 4006, category: 'Accessories', name: 'BBQ Tools Set', description: 'Complete BBQ tools set', image: 'https://m.media-amazon.com/images/I/91Yovcla0+L._AC_UL320_.jpg', identifiers: ['Accessories'], price: '39.99', availability: 10 },
  { id: 4007, category: 'Accessories', name: 'Grill Tongs', description: 'Heavy-duty grill tongs', image: 'https://m.media-amazon.com/images/I/51GGgAsh3iL._AC_UL320_.jpg', identifiers: ['Accessories'], price: '12.99', availability: 10 },
  { id: 4008, category: 'Accessories', name: 'Grill Mat', description: 'Non-stick grill mat', image: 'https://m.media-amazon.com/images/I/71oJ3t5w2uL._AC_UL320_.jpg', identifiers: ['Accessories'], price: '14.99', availability: 10 },
  { id: 4009, category: 'Accessories', name: 'Grill Basket', description: 'Vegetable grill basket', image: 'https://m.media-amazon.com/images/I/910RzlfXg+L._AC_UL320_.jpg', identifiers: ['Accessories'], price: '19.99', availability: 10 },
  { id: 4010, category: 'Fuel', name: 'Charcoal Briquettes', description: 'Premium charcoal briquettes', image: 'https://m.media-amazon.com/images/I/71ofELLCs-S._AC_UL320_.jpg', identifiers: ['Fuel'], price: '15.99', availability: 10 },
  { id: 4011, category: 'Fuel', name: 'Propane Tank', description: 'Standard propane tank', image: 'https://m.media-amazon.com/images/I/611vEz0u62L._AC_UL320_.jpg', identifiers: ['Fuel'], price: '49.99', availability: 10 },
  { id: 4012, category: 'Fuel', name: 'Smoking Chips', description: 'Hickory smoking chips', image: 'https://m.media-amazon.com/images/I/711ZuNpOfsL._AC_UL320_.jpg', identifiers: ['Fuel'], price: '7.99', availability: 10 },
  { id: 4013, category: 'Fuel', name: 'Lighter Fluid', description: 'Charcoal lighter fluid', image: 'https://m.media-amazon.com/images/I/71bGVQsBHuL._AC_UL320_.jpg', identifiers: ['Fuel'], price: '4.99', availability: 10 },
  { id: 4014, category: 'Sauces', name: 'BBQ Sauce', description: 'Classic BBQ sauce', image: 'https://m.media-amazon.com/images/I/61nk8fCk4VL._AC_UL320_.jpg', identifiers: ['Sauces'], price: '4.99', availability: 10 },
  { id: 4015, category: 'Sauces', name: 'Hot Sauce', description: 'Spicy hot sauce', image: 'https://m.media-amazon.com/images/I/51kJstdjgYL._AC_UL320_.jpg', identifiers: ['Sauces'], price: '3.99', availability: 10 },
  { id: 4016, category: 'Sauces', name: 'Marinade', description: 'Savory marinade', image: 'https://m.media-amazon.com/images/I/81gG79GKa2L._AC_UL320_.jpg', identifiers: ['Sauces'], price: '5.99', availability: 10 },
  { id: 4017, category: 'Sauces', name: 'Steak Sauce', description: 'Rich steak sauce', image: 'https://m.media-amazon.com/images/I/71F+iJ1WEsL._AC_UL320_.jpg', identifiers: ['Sauces'], price: '4.99', availability: 10 },
  { id: 4018, category: 'Seasonings', name: 'BBQ Rub', description: 'Smoky BBQ rub', image: 'https://m.media-amazon.com/images/I/71gacsOiDrL._AC_UL320_.jpg', identifiers: ['Seasonings'], price: '6.99', availability: 10 },
  { id: 4019, category: 'Seasonings', name: 'Steak Seasoning', description: 'Bold steak seasoning', image: 'https://m.media-amazon.com/images/I/91I-Aoe3KRL._AC_UL320_.jpg', identifiers: ['Seasonings'], price: '5.99', availability: 10 },
  { id: 4020, category: 'Seasonings', name: 'Chicken Seasoning', description: 'Herb chicken seasoning', image: 'https://m.media-amazon.com/images/I/91bRukEsjiL._AC_UL320_.jpg', identifiers: ['Seasonings'], price: '4.99', availability: 10 },
  { id: 4021, category: 'Cookware', name: 'Cast Iron Skillet', description: 'Pre-seasoned cast iron skillet', image: 'https://m.media-amazon.com/images/I/81ZbyjXVvzL._AC_UL320_.jpg', identifiers: ['Cookware'], price: '29.99', availability: 10 },
  { id: 4022, category: 'Cookware', name: 'Grill Pan', description: 'Non-stick grill pan', image: 'https://m.media-amazon.com/images/I/71zycJ34zIL._AC_UL320_.jpg', identifiers: ['Cookware'], price: '24.99', availability: 10 },
  { id: 4023, category: 'Cookware', name: 'Griddle', description: 'Reversible grill and griddle', image: 'https://m.media-amazon.com/images/I/81TwQoZnnFL._AC_UL320_.jpg', identifiers: ['Cookware'], price: '39.99', availability: 10 },
];

export const newBBQProducts = [
  { id: 4024, category: 'Grills', name: 'Portable Gas Grill', description: 'Compact portable gas grill', image: 'https://m.media-amazon.com/images/I/51Ru0L1OoGL._AC_UL320_.jpg', identifiers: ['Grills'], price: '59.99', availability: 10 },
  { id: 4025, category: 'Sauces', name: 'BBQ Sauce', description: 'Spicy BBQ sauce', image: 'https://m.media-amazon.com/images/I/71w+mwXwsUL._AC_UL320_.jpg', identifiers: ['Sauces'], price: '5.99', availability: 10 }
];

const BBQProducts = ({ setSearchQuery, searchQuery, sortType }) => {
  const { sortedProducts } = useSortedProducts(bbqProducts, searchQuery, sortType);

  useEffect(() => {
    setSearchQuery('');
  }, []);

  return (
    <div className="container mx-auto py-8 px-4 bg-green-200">
      <Header title="BBQ" bgImage={bgHero} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BBQProducts;