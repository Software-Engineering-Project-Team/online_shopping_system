import React from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';

const seasonalProducts = [
  { category: 'Summer', name: 'Sunscreen', description: 'SPF 50 broad spectrum sunscreen', image: 'https://m.media-amazon.com/images/I/71MxyR2Z3rL._AC_UL320_.jpg', identifiers: ['Summer'], price: '9.99' },
  { category: 'Summer', name: 'Beach Towel', description: 'Large, absorbent beach towel', image: 'https://m.media-amazon.com/images/I/51qvSeY3BfL._AC_UL320_.jpg', identifiers: ['Summer'], price: '12.99' },
  { category: 'Summer', name: 'Swimwear', description: 'Stylish swimwear', image: 'https://m.media-amazon.com/images/I/81xf4cyGj6L._MCnd_AC_UL320_.jpg', identifiers: ['Summer'], price: '24.99' },
  { category: 'Summer', name: 'Sunglasses', description: 'UV protection sunglasses', image: 'https://m.media-amazon.com/images/I/71Kt8-zxVSL._AC_UL320_.jpg', identifiers: ['Summer'], price: '14.99' },
  { category: 'Summer', name: 'Flip Flops', description: 'Comfortable flip flops', image: 'https://m.media-amazon.com/images/I/81RSry60TeL._AC_UL320_.jpg', identifiers: ['Summer'], price: '8.99' },
  { category: 'Summer', name: 'Cooler', description: 'Portable cooler', image: 'https://m.media-amazon.com/images/I/51Mibu0VqjL._AC_UL320_.jpg', identifiers: ['Summer'], price: '29.99' },
  { category: 'Summer', name: 'Grill', description: 'Outdoor barbecue grill', image: 'https://m.media-amazon.com/images/I/714p4Q7IGSS._AC_UL320_.jpg', identifiers: ['Summer'], price: '89.99' },
  { category: 'Summer', name: 'Insect Repellent', description: 'Natural insect repellent', image: 'https://m.media-amazon.com/images/I/715mMU1JSKL._AC_UL320_.jpg', identifiers: ['Summer'], price: '6.99' },
  { category: 'Summer', name: 'Water Bottle', description: 'Insulated water bottle', image: 'https://m.media-amazon.com/images/I/51B+nuDyyOL._AC_UL320_.jpg', identifiers: ['Summer'], price: '19.99' },
  { category: 'Summer', name: 'Hat', description: 'Wide-brim sun hat', image: 'https://m.media-amazon.com/images/I/61-3aBPdvoL._AC_UL320_.jpg', identifiers: ['Summer'], price: '15.99' },
  { category: 'Summer', name: 'Picnic Blanket', description: 'Waterproof picnic blanket', image: 'https://m.media-amazon.com/images/I/71J7fNQPOIL._AC_UL320_.jpg', identifiers: ['Summer'], price: '22.99' },
  { category: 'Summer', name: 'Outdoor Games', description: 'Fun outdoor games set', image: 'https://m.media-amazon.com/images/I/7149hgoGCxL._AC_UL320_.jpg', identifiers: ['Summer'], price: '34.99' },
  { category: 'Summer', name: 'Pool Float', description: 'Inflatable pool float', image: 'https://m.media-amazon.com/images/I/81o1FlIFlPL._AC_UL320_.jpg', identifiers: ['Summer'], price: '17.99' },
  { category: 'Summer', name: 'Beach Umbrella', description: 'Large beach umbrella', image: 'https://m.media-amazon.com/images/I/61r4syBjNnL._AC_UL320_.jpg', identifiers: ['Summer'], price: '29.99' },
  { category: 'Summer', name: 'Swim Goggles', description: 'Anti-fog swim goggles', image: 'https://m.media-amazon.com/images/I/717aharCSRL._AC_UL320_.jpg', identifiers: ['Summer'], price: '12.99' },
  { category: 'Summer', name: 'Ice Cream Maker', description: 'Home ice cream maker', image: 'https://m.media-amazon.com/images/I/81FTfYOPHJL._AC_UL320_.jpg', identifiers: ['Summer'], price: '39.99' },
  { category: 'Summer', name: 'Lawn Chair', description: 'Foldable lawn chair', image: 'https://m.media-amazon.com/images/I/7189MrbcNXL._AC_UL320_.jpg', identifiers: ['Summer'], price: '24.99' },
  { category: 'Summer', name: 'Garden Tools', description: 'Set of garden tools', image: 'https://m.media-amazon.com/images/I/71at0tbd6LL._AC_UL320_.jpg', identifiers: ['Summer'], price: '27.99' },
  { category: 'Summer', name: 'Sunblock', description: 'High SPF sunblock', image: 'https://m.media-amazon.com/images/I/61lzuZ+XeDS._AC_UL320_.jpg', identifiers: ['Summer'], price: '10.99' },
  { category: 'Summer', name: 'Portable Fan', description: 'Rechargeable portable fan', image: 'https://m.media-amazon.com/images/I/51o4dM3Nv+L._AC_SY300_SX300_.jpg', identifiers: ['Summer'], price: '19.99' },
];

const sortedSeasonalProducts = seasonalProducts.sort((a, b) => a.category.localeCompare(b.category));

const SeasonalProducts = () => {
  return (
    <div className="container mx-auto py-8 px-4 bg-green-200">
      <Header title="Seasonal Products" bgImage={bgHero} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedSeasonalProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SeasonalProducts;