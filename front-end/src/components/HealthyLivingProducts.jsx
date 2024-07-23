import React from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';
import useSortedProducts from '../hooks/useSortedProducts';

export const healthyLivingProducts = [
  { id: 11001, category: 'Snacks', name: 'Trail Mix', description: 'Healthy trail mix with nuts and dried fruits', image: 'https://m.media-amazon.com/images/I/81fUUbRBysL._AC_UL320_.jpg', identifiers: ['Snacks', 'Healthy'], price: '5.99', availability: 10 },
  { id: 11002, category: 'Snacks', name: 'Kale Chips', description: 'Crispy kale chips', image: 'https://m.media-amazon.com/images/I/81zCkqGlWZL._AC_UL320_.jpg', identifiers: ['Snacks', 'Healthy'], price: '4.99', availability: 10 },
  { id: 11003, category: 'Snacks', name: 'Rice Cakes', description: 'Light and crunchy rice cakes', image: 'https://m.media-amazon.com/images/I/51AVtlXx94L._AC_UL320_.jpg', identifiers: ['Snacks', 'Healthy'], price: '3.99', availability: 10 },
  { id: 11004, category: 'Snacks', name: 'Dried Fruit', description: 'Mixed dried fruits', image: 'https://m.media-amazon.com/images/I/71gDpAbWWEL._AC_UL320_.jpg', identifiers: ['Snacks', 'Healthy'], price: '6.99', availability: 10 },
  { id: 11005, category: 'Snacks', name: 'Protein Bars', description: 'High-protein bars', image: 'https://m.media-amazon.com/images/I/91pH964K1VL._AC_UL320_.jpg', identifiers: ['Snacks', 'Healthy'], price: '12.99', availability: 10 },
  { id: 11006, category: 'Beverages', name: 'Green Tea', description: 'Organic green tea bags', image: 'https://m.media-amazon.com/images/I/71QMuYu3YrL._AC_UL320_.jpg', identifiers: ['Beverages', 'Organic'], price: '4.99', availability: 10 },
  { id: 11007, category: 'Beverages', name: 'Coconut Water', description: 'Natural coconut water', image: 'https://m.media-amazon.com/images/I/81Gbei6WpXL._AC_UL320_.jpg', identifiers: ['Beverages', 'Healthy'], price: '2.99', availability: 10 },
  { id: 11008, category: 'Beverages', name: 'Almond Milk', description: 'Unsweetened almond milk', image: 'https://m.media-amazon.com/images/I/71+Z0E9pOtL._AC_UL320_.jpg', identifiers: ['Beverages', 'Organic'], price: '3.99', availability: 10 },
  { id: 11009, category: 'Beverages', name: 'Herbal Tea', description: 'Calming herbal tea', image: 'https://m.media-amazon.com/images/I/A1RYciJ8EsL._AC_UL320_.jpg', identifiers: ['Beverages', 'Healthy'], price: '5.99', availability: 10 },
  { id: 11010, category: 'Beverages', name: 'Detox Juice', description: 'Cold-pressed detox juice', image: 'https://m.media-amazon.com/images/I/71PRRXjH23L._AC_UL320_.jpg', identifiers: ['Beverages', 'Healthy'], price: '4.99', availability: 10 },
  { id: 11011, category: 'Pantry', name: 'Quinoa', description: 'Organic quinoa', image: 'https://m.media-amazon.com/images/I/81yXzWK7MOL._AC_UL320_.jpg', identifiers: ['Pantry', 'Organic'], price: '7.99', availability: 10 },
  { id: 11012, category: 'Pantry', name: 'Chia Seeds', description: 'Organic chia seeds', image: 'https://m.media-amazon.com/images/I/815BHykcasL._AC_UL320_.jpg', identifiers: ['Pantry', 'Organic'], price: '6.99', availability: 10 },
  { id: 11013, category: 'Pantry', name: 'Brown Rice', description: 'Whole grain brown rice', image: 'https://m.media-amazon.com/images/I/71dPEOMW09L._AC_UL320_.jpg', identifiers: ['Pantry', 'Organic'], price: '2.99', availability: 10 },
  { id: 11014, category: 'Pantry', name: 'Lentils', description: 'Organic lentils', image: 'https://m.media-amazon.com/images/I/51Y8XwY6BGL._AC_UL320_.jpg', identifiers: ['Pantry', 'Organic'], price: '3.99', availability: 10 },
  { id: 11015, category: 'Pantry', name: 'Oats', description: 'Rolled oats for breakfast', image: 'https://m.media-amazon.com/images/I/61+27eCZ34L._AC_UL320_.jpg', identifiers: ['Pantry', 'Organic'], price: '2.99', availability: 10 },
  { id: 11016, category: 'Pantry', name: 'Flax Seeds', description: 'Organic flax seeds', image: 'https://m.media-amazon.com/images/I/81NROljRDeL._AC_UL320_.jpg', identifiers: ['Pantry', 'Organic'], price: '4.99', availability: 10 },
  { id: 11017, category: 'Supplements', name: 'Multivitamins', description: 'Daily multivitamin supplement', image: 'https://m.media-amazon.com/images/I/71AJ8F0VHiL._AC_UL320_.jpg', identifiers: ['Supplements', 'Healthy'], price: '14.99', availability: 10 },
  { id: 11018, category: 'Supplements', name: 'Probiotics', description: 'Digestive health probiotics', image: 'https://m.media-amazon.com/images/I/71dBIt-qb7S._AC_UL320_.jpg', identifiers: ['Supplements', 'Healthy'], price: '19.99', availability: 10 },
  { id: 11019, category: 'Supplements', name: 'Omega-3', description: 'Fish oil omega-3 supplement', image: 'https://m.media-amazon.com/images/I/717t5kiyBHL._AC_UL320_.jpg', identifiers: ['Supplements', 'Healthy'], price: '12.99', availability: 10 },
  { id: 11020, category: 'Supplements', name: 'Vitamin D', description: 'Vitamin D supplement', image: 'https://m.media-amazon.com/images/I/61jqZAYzajL._AC_UL320_.jpg', identifiers: ['Supplements', 'Healthy'], price: '9.99', availability: 10 },
  { id: 11021, category: 'Personal Care', name: 'Organic Toothpaste', description: 'Fluoride-free organic toothpaste', image: 'https://m.media-amazon.com/images/I/81HL3Ypy6QS._AC_UL320_.jpg', identifiers: ['Personal Care', 'Organic'], price: '6.99', availability: 10 },
  { id: 11022, category: 'Personal Care', name: 'Natural Deodorant', description: 'Aluminum-free natural deodorant', image: 'https://m.media-amazon.com/images/I/81i3FlJcayL._AC_UL320_.jpg', identifiers: ['Personal Care', 'Healthy'], price: '7.99', availability: 10 },
  { id: 11023, category: 'Personal Care', name: 'Sulfate-Free Shampoo', description: 'Gentle sulfate-free shampoo', image: 'https://m.media-amazon.com/images/I/81NPZAy3MpL._AC_UL320_.jpg', identifiers: ['Personal Care', 'Healthy'], price: '8.99', availability: 10 },
  { id: 11024, category: 'Personal Care', name: 'Organic Cotton Swabs', description: 'Biodegradable cotton swabs', image: 'https://m.media-amazon.com/images/I/71pPetxSC-L._AC_UL320_.jpg', identifiers: ['Personal Care', 'Organic'], price: '3.99', availability: 10 },
  { id: 11025, category: 'Personal Care', name: 'Essential Oils', description: 'Pure essential oils set', image: 'https://m.media-amazon.com/images/I/711ra4RYE3L._AC_UL320_.jpg', identifiers: ['Personal Care', 'Healthy'], price: '19.99', availability: 10 },
  { id: 11026, category: 'Household', name: 'Eco-Friendly Cleaning Spray', description: 'Non-toxic cleaning spray', image: 'https://m.media-amazon.com/images/I/81HUTP4ZnXL._AC_UL320_.jpg', identifiers: ['Household', 'Healthy'], price: '4.99', availability: 10 },
  { id: 11027, category: 'Household', name: 'Recycled Paper Towels', description: 'Paper towels made from recycled paper', image: 'https://m.media-amazon.com/images/I/817+QIY+Y9L._AC_UL320_.jpg', identifiers: ['Household', 'Organic'], price: '5.99', availability: 10 },
  { id: 11028, category: 'Household', name: 'Bamboo Toothbrushes', description: 'Set of biodegradable bamboo toothbrushes', image: 'https://m.media-amazon.com/images/I/71kmB+8kz5L._AC_UL320_.jpg', identifiers: ['Household', 'Organic'], price: '8.99', availability: 10 },
  { id: 11029, category: 'Household', name: 'Reusable Grocery Bags', description: 'Set of reusable shopping bags', image: 'https://m.media-amazon.com/images/I/81mpThGHwaL._AC_SX425_.jpg', identifiers: ['Household', 'Organic'], price: '9.99', availability: 10 },
  { id: 11030, category: 'Household', name: 'Natural Air Freshener', description: 'Essential oil-based air freshener', image: 'https://m.media-amazon.com/images/I/51nN49Usm0L._AC_UL320_.jpg', identifiers: ['Household', 'Healthy'], price: '6.99', availability: 10 },
];

const HealthyLivingProducts = ({ searchQuery, sortType }) => {
  const { sortedProducts } = useSortedProducts(healthyLivingProducts, searchQuery, sortType);

  return (
    <div className="container mx-auto py-8 px-4 bg-green-200">
      <Header title="Healthy Living" bgImage={bgHero} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HealthyLivingProducts;