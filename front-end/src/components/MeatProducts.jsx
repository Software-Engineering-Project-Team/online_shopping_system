import React, { useState, useEffect } from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';
import useSortedProducts from '../hooks/useSortedProducts';
import SortOptions from './SortOptions';

export const meatProducts = [
  { id: 13001, category: 'Fresh Meat', name: 'Chicken Breast', description: 'Boneless, skinless chicken breast', image: 'https://m.media-amazon.com/images/I/81XBEnBV+QL._AC_UL320_.jpg', identifiers: ['Fresh'], price: '3.99', availability: 10 },
  { id: 13002, category: 'Fresh Meat', name: 'Ground Beef 85/15', description: 'Fresh ground beef', image: 'https://m.media-amazon.com/images/I/81mN1+XzldL._AC_UL320_.jpg', identifiers: ['Fresh'], price: '5.99', availability: 10 },
  { id: 13003, category: 'Fresh Meat', name: 'Ground Beef 90/10', description: 'Fresh ground beef', image: 'https://m.media-amazon.com/images/I/81AZdusR0VL._AC_UL320_.jpg', identifiers: ['Fresh'], price: '6.99', availability: 10 },
  { id: 13004, category: 'Fresh Meat', name: 'Pork Chops', description: 'Center-cut pork chops', image: 'https://m.media-amazon.com/images/I/51gT2q1iIfL._AC_UL320_.jpg', identifiers: ['Fresh'], price: '4.99', availability: 10 },
  { id: 13005, category: 'Fresh Meat', name: 'Lamb Chops', description: 'Tender lamb chops', image: 'https://m.media-amazon.com/images/I/61aAw6dh0sL._AC_UL320_.jpg', identifiers: ['Fresh'], price: '9.99', availability: 10 },
  { id: 13006, category: 'Frozen Meat', name: 'Frozen Chicken Wings', description: 'Frozen chicken wings', image: 'https://m.media-amazon.com/images/I/81dcLlZUcoL._AC_UL320_.jpg', identifiers: ['Frozen'], price: '4.99', availability: 10 },
  { id: 13007, category: 'Frozen Meat', name: 'Frozen Beef Patties', description: 'Frozen beef patties', image: 'https://m.media-amazon.com/images/I/81AUOIswNoL._AC_UL320_.jpg', identifiers: ['Frozen'], price: '3.99', availability: 10 },
  { id: 13008, category: 'Frozen Meat', name: 'Frozen Pork Ribs', description: 'Frozen pork ribs', image: 'https://m.media-amazon.com/images/I/61lYExVKpIL._AC_UL320_.jpg', identifiers: ['Frozen'], price: '4.99', availability: 10 },
  { id: 13009, category: 'Seafood', name: 'Salmon Fillets', description: 'Fresh salmon fillets', image: 'https://m.media-amazon.com/images/I/51l3V5KgNWL._AC_UL320_.jpg', identifiers: ['Fresh', 'Seafood'], price: '9.99', availability: 10 },
  { id: 13010, category: 'Seafood', name: 'Shrimp', description: 'Fresh shrimp', image: 'https://m.media-amazon.com/images/I/61LWUClUFUL._AC_UL320_.jpg', identifiers: ['Fresh', 'Seafood'], price: '12.99', availability: 10 },
  { id: 13011, category: 'Seafood', name: 'Frozen Tilapia', description: 'Frozen tilapia fillets', image: 'https://m.media-amazon.com/images/I/51drSsFPY6L._AC_UL320_.jpg', identifiers: ['Frozen', 'Seafood'], price: '5.99', availability: 10 },
  { id: 13012, category: 'Seafood', name: 'Frozen Scallops', description: 'Frozen scallops', image: 'https://m.media-amazon.com/images/I/61Bfnr3nEML._AC_UL320_.jpg', identifiers: ['Frozen', 'Seafood'], price: '14.99', availability: 10 },
  { id: 13013, category: 'Fresh Meat', name: 'Ribeye Steak', description: 'Juicy ribeye steak', image: 'https://m.media-amazon.com/images/I/31L7TDGnPaL._SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Fresh'], price: '15.99', availability: 10 },
  { id: 13014, category: 'Fresh Meat', name: 'Turkey Breast', description: 'Fresh turkey breast', image: 'https://m.media-amazon.com/images/I/51OggI8M1BL._AC_UL320_.jpg', identifiers: ['Fresh'], price: '6.99', availability: 10 },
  { id: 13015, category: 'Frozen Meat', name: 'Frozen Meatballs', description: 'Frozen beef meatballs', image: 'https://m.media-amazon.com/images/I/51uoPo8QzZL._AC_UL320_.jpg', identifiers: ['Frozen'], price: '5.99', availability: 10 },
  { id: 13016, category: 'Frozen Meat', name: 'Frozen Turkey Burgers', description: 'Frozen turkey burgers', image: 'https://m.media-amazon.com/images/I/71beJ6gz0zL._AC_UL320_.jpg', identifiers: ['Frozen', 'Organic'], price: '7.99', availability: 10 },
  { id: 13017, category: 'Seafood', name: 'Fresh Cod', description: 'Fresh cod fillets', image: 'https://m.media-amazon.com/images/I/51S13-rgY-L._AC_UL320_.jpg', identifiers: ['Fresh', 'Seafood'], price: '8.99', availability: 10 },
  { id: 13018, category: 'Seafood', name: 'Frozen Crab', description: 'Frozen crab legs & claws', image: 'https://m.media-amazon.com/images/I/71E1SPlBU9S._AC_UL320_.jpg', identifiers: ['Frozen', 'Seafood'], price: '19.99', availability: 10 },
  { id: 13019, category: 'Fresh Meat', name: 'Duck Breast', description: 'Fresh duck breast', image: 'https://m.media-amazon.com/images/I/71P9NRlTBkL._AC_UL320_.jpg', identifiers: ['Fresh'], price: '10.99', availability: 10 },
  { id: 13020, category: 'Frozen Meat', name: 'Frozen Sausages', description: 'Frozen sausages', image: 'https://m.media-amazon.com/images/I/818h-FBJ-IL._AC_UL320_.jpg', identifiers: ['Frozen'], price: '4.99', availability: 10 },
  { id: 13021, category: 'Seafood', name: 'Frozen Mussels', description: 'Frozen cooked mussel meat', image: 'https://m.media-amazon.com/images/I/61mxhdygV0L._SX679_.jpg', identifiers: ['Frozen', 'Seafood'], price: '6.99', availability: 10 },
  { id: 13022, category: 'Frozen Meat', name: 'Frozen Lamb Shanks', description: 'Frozen lamb shanks', image: 'https://m.media-amazon.com/images/I/418b8rhftnL._SY300_SX300_QL70_FMwebp_.jpg', identifiers: ['Frozen'], price: '7.99', availability: 10 },
  { id: 13023, category: 'Fresh Meat', name: 'Pork Belly', description: 'Fresh pork belly', image: 'https://m.media-amazon.com/images/I/61j94usmJeL._AC_UL320_.jpg', identifiers: ['Fresh'], price: '4.99', availability: 10 },
  { id: 13024, category: 'Seafood', name: 'Frozen Lobster Tails', description: 'Frozen lobster tails', image: 'https://m.media-amazon.com/images/I/91RAOeoopqL._AC_UL320_.jpg', identifiers: ['Frozen', 'Seafood'], price: '29.99', availability: 10 },
  { id: 13025, category: 'Fresh Meat', name: 'Beef Brisket', description: 'Fresh beef brisket', image: 'https://m.media-amazon.com/images/I/61+9SL3a4ML._AC_UL320_.jpg', identifiers: ['Fresh'], price: '7.99', availability: 10 },
];

export const newMeatProducts = [
  { id: 13026, category: 'Fresh Meat', name: 'Lamb Rib Chops', description: 'Lamb chops', image: 'https://m.media-amazon.com/images/I/81PBhtytHIL._AC_UL320_.jpg', identifiers: ['Fresh'], price: '14.99', availability: 10 },
  { id: 13027, category: 'Fresh Meat', name: 'Kielbasa', description: 'Beef Kielbasa', image: 'https://m.media-amazon.com/images/I/61DqDQS5a0L._AC_UL320_.jpg', identifiers: ['Fresh'], price: '4.99', availability: 10 }
];

const MeatProducts = ({ setSearchQuery, searchQuery, sortType, setSortType }) => {
  const { sortedProducts } = useSortedProducts(meatProducts, searchQuery, sortType);

  useEffect(() => {
    setSearchQuery('');
  }, []);

  return (
    <div className="container mx-auto py-8 px-4 bg-green-200">
      <Header title="Meat & Seafood" bgImage={bgHero} />
      <SortOptions sortType={sortType} setSortType={setSortType} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MeatProducts;