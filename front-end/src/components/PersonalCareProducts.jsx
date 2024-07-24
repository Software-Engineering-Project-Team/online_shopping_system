import React, { useState, useEffect } from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';
import useSortedProducts from '../hooks/useSortedProducts';
import SortOptions from './SortOptions';

export const personalCareProducts = [
  { id: 15001 , category: 'Skin Care', name: 'Face Moisturizer', description: 'Hydrating face moisturizer', image: 'https://m.media-amazon.com/images/I/71J0BtuYB2L._AC_UL320_.jpg', identifiers: ['Skin Care'], price: '12.99', availability: 10 },
  { id: 15002 , category: 'Skin Care', name: 'Sunscreen', description: 'SPF 50 broad spectrum sunscreen', image: 'https://m.media-amazon.com/images/I/71MxyR2Z3rL._AC_UL320_.jpg', identifiers: ['Skin Care'], price: '9.99', availability: 10 },
  { id: 15003 , category: 'Skin Care', name: 'Facial Cleanser', description: 'Gentle facial cleanser', image: 'https://m.media-amazon.com/images/I/51DbQev1thL._AC_UL320_.jpg', identifiers: ['Skin Care'], price: '7.99', availability: 10 },
  { id: 15004 , category: 'Hair Care', name: 'Shampoo', description: 'Revitalizing shampoo', image: 'https://m.media-amazon.com/images/I/71zGJY4WIZL._AC_UL320_.jpg', identifiers: ['Hair Care'], price: '15.99', availability: 10 },
  { id: 15005 , category: 'Hair Care', name: 'Conditioner', description: 'Moisturizing conditioner', image: 'https://m.media-amazon.com/images/I/71rwB+oJCML._AC_UL320_.jpg', identifiers: ['Hair Care'], price: '15.99', availability: 10 },
  { id: 15006 , category: 'Hair Care', name: 'Hair Mask', description: 'Deep conditioning hair mask', image: 'https://m.media-amazon.com/images/I/71HB8ShCY5L._AC_UL320_.jpg', identifiers: ['Hair Care'], price: '8.99', availability: 10 },
  { id: 15007 , category: 'Oral Care', name: 'Toothpaste', description: 'Whitening toothpaste', image: 'https://m.media-amazon.com/images/I/71Md-W5PL9L._AC_UL320_.jpg', identifiers: ['Oral Care'], price: '8.99', availability: 10 },
  { id: 15008 , category: 'Oral Care', name: 'Mouthwash', description: 'Antiseptic mouthwash', image: 'https://m.media-amazon.com/images/I/71thmUB3D2L._AC_UL320_.jpg', identifiers: ['Oral Care'], price: '4.99', availability: 10 },
  { id: 15009 , category: 'Oral Care', name: 'Toothbrush', description: 'Soft bristle toothbrush', image: 'https://m.media-amazon.com/images/I/718-gEmFtyL._AC_UL320_.jpg', identifiers: ['Oral Care'], price: '2.99', availability: 10 },
  { id: 15010 , category: 'Body Care', name: 'Body Wash', description: 'Refreshing body wash', image: 'https://m.media-amazon.com/images/I/71fizOWwhFL._AC_UL320_.jpg', identifiers: ['Body Care'], price: '6.99', availability: 10 },
  { id: 15011 , category: 'Body Care', name: 'Body Lotion', description: 'Moisturizing body lotion', image: 'https://m.media-amazon.com/images/I/51fDijePdrL._AC_UL320_.jpg', identifiers: ['Body Care'], price: '7.99', availability: 10 },
  { id: 15012 , category: 'Body Care', name: 'Deodorant', description: 'Long-lasting deodorant', image: 'https://m.media-amazon.com/images/I/71MuFcwFU7L._AC_UL320_.jpg', identifiers: ['Body Care'], price: '4.99', availability: 10 },
  { id: 15013 , category: 'Personal Hygiene', name: 'Hand Sanitizer', description: 'Antibacterial hand sanitizer', image: 'https://m.media-amazon.com/images/I/61EgHmO6QTL._AC_UL320_.jpg', identifiers: ['Personal Hygiene'], price: '3.99', availability: 10 },
  { id: 15014 , category: 'Personal Hygiene', name: 'Feminine Wash', description: 'Gentle feminine wash', image: 'https://m.media-amazon.com/images/I/71fguFObkpL._AC_UL320_.jpg', identifiers: ['Personal Hygiene'], price: '5.99', availability: 10 },
  { id: 15015 , category: 'Personal Hygiene', name: 'Cotton Swabs', description: 'Soft cotton swabs', image: 'https://m.media-amazon.com/images/I/612HeyYXOnL._AC_UL320_.jpg', identifiers: ['Personal Hygiene'], price: '2.99', availability: 10 },
  { id: 15016 , category: 'Shaving', name: 'Razor', description: 'Comfortable shaving razor', image: 'https://m.media-amazon.com/images/I/71jHjOI7aRS._AC_UL320_.jpg', identifiers: ['Shaving'], price: '8.99', availability: 10 },
  { id: 15017 , category: 'Shaving', name: 'Shaving Cream', description: 'Smooth shaving cream', image: 'https://m.media-amazon.com/images/I/71dlTUwdxlL._AC_UL320_.jpg', identifiers: ['Shaving'], price: '4.99', availability: 10 },
  { id: 15018 , category: 'Shaving', name: 'Aftershave', description: 'Soothing aftershave', image: 'https://m.media-amazon.com/images/I/81LAx7Fos9L._AC_UL320_.jpg', identifiers: ['Shaving'], price: '6.99', availability: 10 },
  { id: 15019 , category: 'Bath', name: 'Bath Salts', description: 'Relaxing bath salts', image: 'https://m.media-amazon.com/images/I/71+-1BWT2SL._AC_UL320_.jpg', identifiers: ['Bath'], price: '9.99', availability: 10 },
  { id: 15020 , category: 'Bath', name: 'Bath Bombs', description: 'Fragrant bath bombs', image: 'https://m.media-amazon.com/images/I/81pfGyBQkqL._AC_UL320_.jpg', identifiers: ['Bath'], price: '12.99', availability: 10 },
  { id: 15021 , category: 'First Aid', name: 'Band-Aids', description: 'Adhesive bandages', image: 'https://m.media-amazon.com/images/I/81dhunrbp+L._AC_UL320_.jpg', identifiers: ['First Aid'], price: '3.99', availability: 10 },
  { id: 15022 , category: 'First Aid', name: 'Antibiotic Ointment', description: 'Triple antibiotic ointment', image: 'https://m.media-amazon.com/images/I/81bNV1SmNFL._AC_UL320_.jpg', identifiers: ['First Aid'], price: '4.99', availability: 10 },
  { id: 15023 , category: 'First Aid', name: 'Pain Reliever', description: 'Ibuprofen tablets', image: 'https://m.media-amazon.com/images/I/81wwLGJF4RL._AC_UL320_.jpg', identifiers: ['First Aid'], price: '5.99', availability: 10 },
  { id: 15024 , category: 'Makeup', name: 'Foundation', description: 'Liquid foundation', image: 'https://m.media-amazon.com/images/I/51Er8v-sr9L._AC_UL320_.jpg', identifiers: ['Makeup'], price: '14.99', availability: 10 },
  { id: 15025 , category: 'Makeup', name: 'Mascara', description: 'Volumizing mascara', image: 'https://m.media-amazon.com/images/I/61MK3zMOWQL._AC_UL320_.jpg', identifiers: ['Makeup'], price: '9.99', availability: 10 },
  { id: 15026 , category: 'Makeup', name: 'Lipstick', description: 'Matte lipstick', image: 'https://m.media-amazon.com/images/I/71VLJZfXa3L._AC_UL320_.jpg', identifiers: ['Makeup'], price: '7.99', availability: 10 },
  { id: 15027 , category: 'Hair Care', name: 'Hair Gel', description: 'Strong hold hair gel', image: 'https://m.media-amazon.com/images/I/617LTC7+eCL._AC_UL320_.jpg', identifiers: ['Hair Care'], price: '5.99', availability: 10 },
  { id: 15028 , category: 'Hair Care', name: 'Hair Spray', description: 'Extra hold hair spray', image: 'https://m.media-amazon.com/images/I/717BxUfXNfL._AC_UL320_.jpg', identifiers: ['Hair Care'], price: '6.99', availability: 10 },
  { id: 15029 , category: 'Hair Care', name: 'Hair Oil', description: 'Nourishing hair oil', image: 'https://m.media-amazon.com/images/I/71kgf-y5D9L._AC_UL320_.jpg', identifiers: ['Hair Care'], price: '7.99', availability: 10 },
  { id: 15030 , category: 'Skin Care', name: 'Body Scrub', description: 'Exfoliating body scrub', image: 'https://m.media-amazon.com/images/I/81hSMhzB1ML._AC_UL320_.jpg', identifiers: ['Skin Care'], price: '11.99', availability: 10 },
];

export const newPersonalCareProducts = [
  { id: 15031, category: 'Hair Care', name: 'Shampoo', description: 'Organic shampoo', image: 'https://m.media-amazon.com/images/I/61YSg1spuxL._AC_UL320_.jpg', identifiers: ['Hair Care'], price: '9.99', availability: 10 },
  { id: 15032, category: 'Skin Care', name: 'Tongue Scrapers', description: 'Steel tongue scrapers for adults', image: 'https://m.media-amazon.com/images/I/81iVh2nCYrL._AC_UL320_.jpg', identifiers: ['Skin Care'], price: '7.99', availability: 10 }
];

const PersonalCareProducts = ({ setSearchQuery, searchQuery, sortType, setSortType }) => {
  const { sortedProducts } = useSortedProducts(personalCareProducts, searchQuery, sortType);

  useEffect(() => {
    setSearchQuery('');
  }, []);
  return (
    <div className="container mx-auto py-8 px-4 bg-green-200">
      <Header title="Personal Care" bgImage={bgHero} />
      <SortOptions sortType={sortType} setSortType={setSortType} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PersonalCareProducts;