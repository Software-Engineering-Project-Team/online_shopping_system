import React, { useState, useEffect } from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';
import useSortedProducts from '../hooks/useSortedProducts';

export const seasonalProducts = [
  { id: 18001, category: 'Summer', name: 'Sunscreen', description: 'SPF 50 broad spectrum sunscreen', image: 'https://m.media-amazon.com/images/I/71MxyR2Z3rL._AC_UL320_.jpg', identifiers: ['Summer'], price: '9.99', availability: 10 },
  { id: 18002, category: 'Summer', name: 'Beach Towel', description: 'Large, absorbent beach towel', image: 'https://m.media-amazon.com/images/I/51qvSeY3BfL._AC_UL320_.jpg', identifiers: ['Summer'], price: '12.99', availability: 10 },
  { id: 18003, category: 'Summer', name: 'Swimwear', description: 'Stylish swimwear', image: 'https://m.media-amazon.com/images/I/81xf4cyGj6L._MCnd_AC_UL320_.jpg', identifiers: ['Summer'], price: '24.99', availability: 10 },
  { id: 18004, category: 'Summer', name: 'Sunglasses', description: 'UV protection sunglasses', image: 'https://m.media-amazon.com/images/I/71Kt8-zxVSL._AC_UL320_.jpg', identifiers: ['Summer'], price: '14.99', availability: 10 },
  { id: 18005, category: 'Summer', name: 'Flip Flops', description: 'Comfortable flip flops', image: 'https://m.media-amazon.com/images/I/81RSry60TeL._AC_UL320_.jpg', identifiers: ['Summer'], price: '8.99', availability: 10 },
  { id: 18006, category: 'Summer', name: 'Cooler', description: 'Portable cooler', image: 'https://m.media-amazon.com/images/I/51Mibu0VqjL._AC_UL320_.jpg', identifiers: ['Summer'], price: '29.99', availability: 10 },
  { id: 18007, category: 'Summer', name: 'Grill', description: 'Outdoor barbecue grill', image: 'https://m.media-amazon.com/images/I/714p4Q7IGSS._AC_UL320_.jpg', identifiers: ['Summer'], price: '89.99', availability: 10 },
  { id: 18008, category: 'Summer', name: 'Insect Repellent', description: 'Natural insect repellent', image: 'https://m.media-amazon.com/images/I/715mMU1JSKL._AC_UL320_.jpg', identifiers: ['Summer'], price: '6.99', availability: 10 },
  { id: 18009, category: 'Summer', name: 'Water Bottle', description: 'Insulated water bottle', image: 'https://m.media-amazon.com/images/I/51B+nuDyyOL._AC_UL320_.jpg', identifiers: ['Summer'], price: '19.99', availability: 10 },
  { id: 18010, category: 'Summer', name: 'Hat', description: 'Wide-brim sun hat', image: 'https://m.media-amazon.com/images/I/61-3aBPdvoL._AC_UL320_.jpg', identifiers: ['Summer'], price: '15.99', availability: 10 },
  { id: 18011, category: 'Summer', name: 'Picnic Blanket', description: 'Waterproof picnic blanket', image: 'https://m.media-amazon.com/images/I/71J7fNQPOIL._AC_UL320_.jpg', identifiers: ['Summer'], price: '22.99', availability: 10 },
  { id: 18012, category: 'Summer', name: 'Outdoor Games', description: 'Fun outdoor games set', image: 'https://m.media-amazon.com/images/I/7149hgoGCxL._AC_UL320_.jpg', identifiers: ['Summer'], price: '34.99', availability: 10 },
  { id: 18013, category: 'Summer', name: 'Pool Float', description: 'Inflatable pool float', image: 'https://m.media-amazon.com/images/I/81o1FlIFlPL._AC_UL320_.jpg', identifiers: ['Summer'], price: '17.99', availability: 10 },
  { id: 18014, category: 'Summer', name: 'Beach Umbrella', description: 'Large beach umbrella', image: 'https://m.media-amazon.com/images/I/61r4syBjNnL._AC_UL320_.jpg', identifiers: ['Summer'], price: '29.99', availability: 10 },
  { id: 18015, category: 'Summer', name: 'Swim Goggles', description: 'Anti-fog swim goggles', image: 'https://m.media-amazon.com/images/I/717aharCSRL._AC_UL320_.jpg', identifiers: ['Summer'], price: '12.99', availability: 10 },
  { id: 18016, category: 'Summer', name: 'Ice Cream Maker', description: 'Home ice cream maker', image: 'https://m.media-amazon.com/images/I/81FTfYOPHJL._AC_UL320_.jpg', identifiers: ['Summer'], price: '39.99', availability: 10 },
  { id: 18017, category: 'Summer', name: 'Lawn Chair', description: 'Foldable lawn chair', image: 'https://m.media-amazon.com/images/I/7189MrbcNXL._AC_UL320_.jpg', identifiers: ['Summer'], price: '24.99', availability: 10 },
  { id: 18018, category: 'Summer', name: 'Garden Tools', description: 'Set of garden tools', image: 'https://m.media-amazon.com/images/I/71at0tbd6LL._AC_UL320_.jpg', identifiers: ['Summer'], price: '27.99', availability: 10 },
  { id: 18019, category: 'Summer', name: 'Sunblock', description: 'High SPF sunblock', image: 'https://m.media-amazon.com/images/I/61lzuZ+XeDS._AC_UL320_.jpg', identifiers: ['Summer'], price: '10.99', availability: 10 },
  { id: 18020, category: 'Summer', name: 'Portable Fan', description: 'Rechargeable portable fan', image: 'https://m.media-amazon.com/images/I/51o4dM3Nv+L._AC_SY300_SX300_.jpg', identifiers: ['Summer'], price: '19.99', availability: 10 },
];

export const newSeasonalProducts = [
  { id: 18021, category: 'Summer', name: 'Party Supplies', description: 'Beach themed party supplies', image: 'https://m.media-amazon.com/images/I/81iVLvNoQQL._AC_UL320_.jpg', identifiers: ['Winter'], price: '24.99', availability: 10 },
  { id: 18022, category: 'Summer', name: 'Waterproof Speaker', description: 'Portable waterproof speaker', image: 'https://m.media-amazon.com/images/I/81LMfazlxZL._AC_UL320_.jpg', identifiers: ['Fall'], price: '5.99', availability: 10 }
];

const SeasonalProducts = ({ setSearchQuery, searchQuery, sortType }) => {
  const { sortedProducts } = useSortedProducts(seasonalProducts, searchQuery, sortType);

  useEffect(() => {
    setSearchQuery('');
  }, []);
  
  return (
    <div className="container mx-auto py-8 px-4 bg-green-200">
      <Header title="Seasonal Products" bgImage={bgHero} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SeasonalProducts;