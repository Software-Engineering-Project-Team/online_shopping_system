import React, { useState, useEffect } from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';
import useSortedProducts from '../hooks/useSortedProducts';
import SortOptions from './SortOptions';

export const petProducts = [
  { id: 16001 , category: 'Food', name: 'Dog Food', description: 'Nutritious dog food', image: 'https://m.media-amazon.com/images/I/71vhcBK2RvL._AC_UL320_.jpg', identifiers: ['Food'], price: '29.99', availability: 10 },
  { id: 16002 , category: 'Food', name: 'Cat Food', description: 'Pet Healthy cat food', image: 'https://m.media-amazon.com/images/I/71XQBaCqxYL._AC_UL320_.jpg', identifiers: ['Food'], price: '24.99', availability: 10 },
  { id: 16003 , category: 'Food', name: 'Bird Food', description: 'Premium bird food', image: 'https://m.media-amazon.com/images/I/8175qHC327L._AC_UL320_.jpg', identifiers: ['Food'], price: '9.99', availability: 10 },
  { id: 16004 , category: 'Food', name: 'Fish Food', description: 'Balanced fish food', image: 'https://m.media-amazon.com/images/I/816seI4pnJL._AC_UL320_.jpg', identifiers: ['Food'], price: '5.99', availability: 10 },
  { id: 16005 , category: 'Food', name: 'Rabbit Food', description: 'Nutritious rabbit food', image: 'https://m.media-amazon.com/images/I/81ohQeFdtnL._AC_UL320_.jpg', identifiers: ['Food'], price: '14.99', availability: 10 },
  { id: 16006 , category: 'Treats', name: 'Dog Treats', description: 'Delicious dog treats', image: 'https://m.media-amazon.com/images/I/81424BjzYrL._AC_UL320_.jpg', identifiers: ['Treats'], price: '7.99', availability: 10 },
  { id: 16007 , category: 'Treats', name: 'Cat Treats', description: 'Tasty cat treats', image: 'https://m.media-amazon.com/images/I/81i7VGMRPVL._AC_UL320_.jpg', identifiers: ['Treats'], price: '6.99', availability: 10 },
  { id: 16008 , category: 'Treats', name: 'Bird Treats', description: 'Flavorful bird treats', image: 'https://m.media-amazon.com/images/I/71Nfg4rRY9L._AC_UL320_.jpg', identifiers: ['Treats'], price: '4.99', availability: 10 },
  { id: 16009 , category: 'Treats', name: 'Fish Treats', description: 'Nutritious fish treats', image: 'https://m.media-amazon.com/images/I/71m6h6fkpIL._AC_UL320_.jpg', identifiers: ['Treats'], price: '3.99', availability: 10 },
  { id: 16010 , category: 'Treats', name: 'Rabbit Treats', description: 'Pet rabbit treats', image: 'https://m.media-amazon.com/images/I/81eehEUcrtL._AC_UL320_.jpg', identifiers: ['Treats'], price: '5.99', availability: 10 },
  { id: 16011 , category: 'Toys', name: 'Dog Toy', description: 'Chewable dog toy', image: 'https://m.media-amazon.com/images/I/51xZagVf1VL._AC_UL320_.jpg', identifiers: ['Toys'], price: '9.99', availability: 10 },
  { id: 16012 , category: 'Toys', name: 'Cat Toy', description: 'Interactive cat toy', image: 'https://m.media-amazon.com/images/I/615Ccf+wziL._AC_UL320_.jpg', identifiers: ['Toys'], price: '8.99', availability: 10 },
  { id: 16013 , category: 'Toys', name: 'Bird Toy', description: 'Colorful bird toy', image: 'https://m.media-amazon.com/images/I/71fqKszwGRL._AC_UL320_.jpg', identifiers: ['Toys'], price: '6.99', availability: 10 },
  { id: 16014 , category: 'Toys', name: 'Fish Toy', description: 'Floating fish toy', image: 'https://m.media-amazon.com/images/I/817acR-FOaL._AC_UL320_.jpg', identifiers: ['Toys'], price: '4.99', availability: 10 },
  { id: 16015 , category: 'Toys', name: 'Rabbit Toy', description: 'Bouncing rabbit toy', image: 'https://m.media-amazon.com/images/I/51eFSGNnvKL._AC_UL320_.jpg', identifiers: ['Toys'], price: '7.99', availability: 10 },
  { id: 16016 , category: 'Accessories', name: 'Dog Collar', description: 'Adjustable dog collar', image: 'https://m.media-amazon.com/images/I/91uoXCKBIRL._AC_UL320_.jpg', identifiers: ['Accessories'], price: '12.99', availability: 10 },
  { id: 16017 , category: 'Accessories', name: 'Cat Collar', description: 'Breakaway cat collar', image: 'https://m.media-amazon.com/images/I/718brl07fKL._AC_SR146,118_QL70_.jpg', identifiers: ['Accessories'], price: '9.99', availability: 10 },
  { id: 16018 , category: 'Accessories', name: 'Bird Cage', description: 'Spacious bird cage', image: 'https://m.media-amazon.com/images/I/81i44HpwkUL._AC_UL320_.jpg', identifiers: ['Accessories'], price: '49.99', availability: 10 },
  { id: 16019 , category: 'Accessories', name: 'Fish Tank', description: 'Glass fish tank', image: 'https://m.media-amazon.com/images/I/81nrJUF5ErL._AC_UL320_.jpg', identifiers: ['Accessories'], price: '59.99', availability: 10 },
  { id: 16020 , category: 'Accessories', name: 'Rabbit Hutch', description: 'Outdoor rabbit hutch', image: 'https://m.media-amazon.com/images/I/71j5C6XL7PL._AC_UL320_.jpg', identifiers: ['Accessories'], price: '89.99', availability: 10 },
  { id: 16021 , category: 'Pet Health', name: 'Dog Shampoo', description: 'Gentle dog shampoo', image: 'https://m.media-amazon.com/images/I/71R6qzbwB0L._AC_UL320_.jpg', identifiers: ['Pet Health'], price: '8.99', availability: 10 },
  { id: 16022 , category: 'Pet Health', name: 'Cat Shampoo', description: 'Moisturizing cat shampoo', image: 'https://m.media-amazon.com/images/I/71G7VKvmiML._AC_UL320_.jpg', identifiers: ['Pet Health'], price: '7.99', availability: 10 },
  { id: 16023 , category: 'Pet Health', name: 'Bird Vitamins', description: 'Essential bird vitamins', image: 'https://m.media-amazon.com/images/I/61UDvRKuZ7L._AC_UL320_.jpg', identifiers: ['Pet Health'], price: '5.99', availability: 10 },
  { id: 16024 , category: 'Pet Health', name: 'Fish Medicine', description: 'Fish disease treatment', image: 'https://m.media-amazon.com/images/I/61qGzolAwyL._AC_UL320_.jpg', identifiers: ['Pet Health'], price: '6.99', availability: 10 },
  { id: 16025 , category: 'Pet Health', name: 'Rabbit Supplements', description: 'Nutritional rabbit supplements', image: 'https://m.media-amazon.com/images/I/714LxWflhuL._AC_UL320_.jpg', identifiers: ['Pet Health'], price: '9.99', availability: 10 },
  { id: 16026 , category: 'Bedding', name: 'Dog Bed', description: 'Comfortable dog bed', image: 'https://m.media-amazon.com/images/I/71UECqrKYNL._AC_UL320_.jpg', identifiers: ['Bedding'], price: '29.99', availability: 10 },
  { id: 16027 , category: 'Bedding', name: 'Cat Bed', description: 'Cozy cat bed', image: 'https://m.media-amazon.com/images/I/81N9zhDDEmL._AC_UL320_.jpg', identifiers: ['Bedding'], price: '24.99', availability: 10 },
  { id: 16028 , category: 'Bedding', name: 'Bird Nest', description: 'Soft bird nest', image: 'https://m.media-amazon.com/images/I/A1K9gbbSyqL._AC_UL320_.jpg', identifiers: ['Bedding'], price: '14.99', availability: 10 },
  { id: 16029 , category: 'Bedding', name: 'Fish Gravel', description: 'Decorative fish tank gravel', image: 'https://m.media-amazon.com/images/I/71To5hBxdkL._AC_UL320_.jpg', identifiers: ['Bedding'], price: '5.99', availability: 10 },
  { id: 16030 , category: 'Bedding', name: 'Rabbit Bedding', description: 'Soft rabbit bedding', image: 'https://m.media-amazon.com/images/I/91EUpHN4zPL._AC_UL320_.jpg', identifiers: ['Bedding'], price: '10.99', availability: 10 },
];

export const newPetProducts = [
  { id: 16031, category: 'Toys', name: 'Stain & Odor Eliminator', description: 'Pet Odor Eliminator for Home', image: 'https://m.media-amazon.com/images/I/61pzPQSDW4L._AC_UL320_.jpg', identifiers: ['Toys'], price: '5.99', availability: 10 },
  { id: 16032, category: 'Food', name: 'Dog waste bags', description: 'Dog waste bags for cleanup', image: 'https://m.media-amazon.com/images/I/71VS+j2jAZL._AC_UL320_.jpg', identifiers: ['Food'], price: '8.99', availability: 10 }
];

const PetProducts = ({ setSearchQuery, searchQuery, sortType, setSortType }) => {
  const { sortedProducts } = useSortedProducts(petProducts, searchQuery, sortType);

  useEffect(() => {
    setSearchQuery('');
  }, []);
  return (
    <div className="container mx-auto py-8 px-4 bg-green-200">
      <Header title="Pet Supplies" bgImage={bgHero} />
      <SortOptions sortType={sortType} setSortType={setSortType} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PetProducts;