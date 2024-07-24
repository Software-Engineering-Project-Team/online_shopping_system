import React, { useState, useEffect } from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';
import useSortedProducts from '../hooks/useSortedProducts';

export const babyProducts = [
  { id: 2001 , category: 'Diapers', name: 'Disposable Diapers', description: 'Comfortable disposable diapers', image: 'https://m.media-amazon.com/images/I/81W5nbUlrlL._AC_UL320_.jpg', identifiers: ['Diapers'], price: '19.99', availability: 10 },
  { id: 2002 , category: 'Diapers', name: 'Cloth Diapers', description: 'Reusable cloth diapers', image: 'https://m.media-amazon.com/images/I/8107-AcT83L._AC_UL320_.jpg', identifiers: ['Diapers'], price: '24.99', availability: 10 },
  { id: 2003 , category: 'Wipes', name: 'Baby Wipes', description: 'Soft and gentle baby wipes', image: 'https://m.media-amazon.com/images/I/51cDeB3qklL._AC_UL320_.jpg', identifiers: ['Wipes'], price: '5.99', availability: 10 },
  { id: 2004 , category: 'Formula', name: 'Infant Formula', description: 'Nutritional infant formula', image: 'https://m.media-amazon.com/images/I/61stXruZhHL._AC_UL320_.jpg', identifiers: ['Formula'], price: '29.99', availability: 10 },
  { id: 2005 , category: 'Formula', name: 'Organic Infant Formula', description: 'Organic nutritional infant formula', image: 'https://m.media-amazon.com/images/I/71xMtU3IA7L._AC_UL320_.jpg', identifiers: ['Formula', 'Organic'], price: '34.99', availability: 10 },
  { id: 2006 , category: 'Baby Food', name: 'Pureed Vegetables', description: 'Organic pureed vegetable baby food', image: 'https://m.media-amazon.com/images/I/71nP-hrx8sL._AC_UL320_.jpg', identifiers: ['Baby Food', 'Organic'], price: '3.99', availability: 10 },
  { id: 2007 , category: 'Baby Food', name: 'Fruit Puree', description: 'Organic fruit puree baby food', image: 'https://m.media-amazon.com/images/I/81exRFNzETL._AC_UL320_.jpg', identifiers: ['Baby Food', 'Organic'], price: '3.99', availability: 10 },
  { id: 2008 , category: 'Baby Food', name: 'Cereal', description: 'Baby cereal with iron', image: 'https://m.media-amazon.com/images/I/61QpRaDeMbL._AC_UL320_.jpg', identifiers: ['Baby Food'], price: '2.99', availability: 10 },
  { id: 2009 , category: 'Bath', name: 'Baby Shampoo', description: 'Tear-free baby shampoo', image: 'https://m.media-amazon.com/images/I/61IVm3hm2SL._AC_UL320_.jpg', identifiers: ['Bath'], price: '4.99', availability: 10 },
  { id: 2010 , category: 'Bath', name: 'Baby Wash', description: 'Gentle baby wash', image: 'https://m.media-amazon.com/images/I/61zjYfKv9zL._AC_UL320_.jpg', identifiers: ['Bath'], price: '5.99', availability: 10 },
  { id: 2011 , category: 'Bath', name: 'Baby Lotion', description: 'Moisturizing baby lotion', image: 'https://m.media-amazon.com/images/I/61JGsKO908L._AC_UL320_.jpg', identifiers: ['Bath'], price: '4.99', availability: 10 },
  { id: 2012 , category: 'Clothing', name: 'Onesies', description: 'Soft cotton onesies', image: 'https://m.media-amazon.com/images/I/71rscjuvRkL._AC_UL320_.jpg', identifiers: ['Clothing'], price: '14.99', availability: 10 },
  { id: 2013 , category: 'Clothing', name: 'Baby Socks', description: 'Warm and cozy baby socks', image: 'https://m.media-amazon.com/images/I/71pD7f2Sz7L._AC_UL320_.jpg', identifiers: ['Clothing'], price: '6.99', availability: 10 },
  { id: 2014 , category: 'Clothing', name: 'Baby Hats', description: 'Cute baby hats', image: 'https://m.media-amazon.com/images/I/71I0ubZQYGL._AC_UL320_.jpg', identifiers: ['Clothing'], price: '9.99', availability: 10 },
  { id: 2015 , category: 'Accessories', name: 'Pacifiers', description: 'Soothing baby pacifiers', image: 'https://m.media-amazon.com/images/I/71sjx7V+dAL._AC_UL320_.jpg', identifiers: ['Accessories'], price: '4.99', availability: 10 },
  { id: 2016 , category: 'Accessories', name: 'Baby Bottles', description: 'Anti-colic baby bottles', image: 'https://m.media-amazon.com/images/I/716Er5kxtkS._AC_UL320_.jpg', identifiers: ['Accessories'], price: '11.99', availability: 10 },
  { id: 2017 , category: 'Accessories', name: 'Teethers', description: 'Safe and soothing baby teethers', image: 'https://m.media-amazon.com/images/I/71HR1CNMdpL._AC_UL320_.jpg', identifiers: ['Accessories'], price: '7.99', availability: 10 },
  { id: 2018 , category: 'Accessories', name: 'Baby Blankets', description: 'Soft baby blankets', image: 'https://m.media-amazon.com/images/I/81wHo0Cef3L._AC_UL320_.jpg', identifiers: ['Accessories'], price: '19.99', availability: 10 },
  { id: 2019 , category: 'Health', name: 'Thermometer', description: 'Digital baby thermometer', image: 'https://m.media-amazon.com/images/I/61ac6gzzqML._AC_UL320_.jpg', identifiers: ['Health'], price: '9.99', availability: 10 },
  { id: 2020 , category: 'Health', name: 'Nasal Aspirator', description: 'Baby nasal aspirator', image: 'https://m.media-amazon.com/images/I/61OyTXUVVcL._AC_UL320_.jpg', identifiers: ['Health'], price: '6.99', availability: 10 },
  { id: 2021 , category: 'Health', name: 'Baby Monitor', description: 'Digital baby monitor', image: 'https://m.media-amazon.com/images/I/61QEntSevyL._AC_UL320_.jpg', identifiers: ['Health'], price: '49.99', availability: 10 },
  { id: 2022 , category: 'Toys', name: 'Stuffed Animals', description: 'Soft and cuddly stuffed animals', image: 'https://m.media-amazon.com/images/I/712nuGYshBL._AC_UL320_.jpg', identifiers: ['Toys'], price: '12.99', availability: 10 },
  { id: 2023 , category: 'Toys', name: 'Rattles', description: 'Colorful baby rattles', image: 'https://m.media-amazon.com/images/I/71T-bHkhcDL._AC_UL320_.jpg', identifiers: ['Toys'], price: '6.99', availability: 10 },
  { id: 2024 , category: 'Toys', name: 'Activity Gym', description: 'Interactive baby activity gym', image: 'https://m.media-amazon.com/images/I/71TxEvS1TpL._AC_UL320_.jpg', identifiers: ['Toys'], price: '39.99', availability: 10 },
  { id: 2025 , category: 'Safety', name: 'Outlet Covers', description: 'Babyproof outlet covers', image: 'https://m.media-amazon.com/images/I/71jEywC3IGL._AC_UL320_.jpg', identifiers: ['Safety'], price: '5.99', availability: 10 },
  { id: 2026 , category: 'Safety', name: 'Cabinet Locks', description: 'Child safety cabinet locks', image: 'https://m.media-amazon.com/images/I/71ZczEw6opL._AC_UL320_.jpg', identifiers: ['Safety'], price: '8.99', availability: 10 },
  { id: 2027 , category: 'Furniture', name: 'Crib', description: 'Sturdy baby crib', image: 'https://m.media-amazon.com/images/I/81j89Cnc4rL._AC_UL320_.jpg', identifiers: ['Furniture'], price: '149.99', availability: 10 },
  { id: 2028 , category: 'Furniture', name: 'High Chair', description: 'Adjustable baby high chair', image: 'https://m.media-amazon.com/images/I/61b0cpfILEL._AC_UL320_.jpg', identifiers: ['Furniture'], price: '99.99', availability: 10 },
];

export const newBabyProducts = [
  { id: 2029, category: 'Toys', name: 'Stacking Rings', description: 'Colorful stacking rings', image: 'https://m.media-amazon.com/images/I/61o4QiMW3JL._AC_UL320_.jpg', identifiers: ['Toys'], price: '7.99', availability: 10 },
  { id: 2030, category: 'Clothing', name: 'Baby Booties', description: 'Soft cotton baby booties', image: 'https://m.media-amazon.com/images/I/71vbFRnOiyL._AC_UL320_.jpg', identifiers: ['Clothing'], price: '6.99', availability: 10 }
];

const BabyProducts = ({ setSearchQuery, searchQuery, sortType }) => {
  const { sortedProducts } = useSortedProducts(babyProducts, searchQuery, sortType);

  useEffect(() => {
    setSearchQuery('');
  }, []);

  return (
    <div className="container mx-auto py-8 px-4 bg-green-200">
      <Header title="Baby Items" bgImage={bgHero} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BabyProducts;