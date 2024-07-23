import React, { useState, useEffect } from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';
import { newAlcoholProducts } from './AlcoholProducts';
import { newBakeryProducts } from './BakeryProducts';
import { newBabyProducts } from './BabyProducts';
import { newBeveragesProducts } from './BeveragesProducts';
import { newBreakfastProducts } from './BreakfastProducts';
import { newDairyProducts } from './DairyProducts';
import { newDeliProducts } from './DeliProducts';
import { newFrozenProducts } from './FrozenProducts';
import { newHealthyLivingProducts } from './HealthyLivingProducts';
import { newHouseholdProducts } from './HouseholdProducts';
import { newMeatProducts } from './MeatProducts';
import { newPantryProducts } from './PantryProducts';
import { newPersonalCareProducts } from './PersonalCareProducts';
import { newPetProducts } from './PetProducts';
import { newProduceProducts } from './ProduceProducts';
import { newSnacksProducts } from './SnacksProducts';
import { newSeasonalProducts } from './SeasonalProducts';
import { newBBQProducts } from './BBQProducts';
import useSortedProducts from '../hooks/useSortedProducts';

const NewProducts = ({ setSearchQuery, searchQuery, sortType }) => {
  const allNewProducts = [
    ...newAlcoholProducts,
    ...newBakeryProducts,
    ...newBabyProducts,
    ...newBeveragesProducts,
    ...newBreakfastProducts,
    ...newDairyProducts,
    ...newDeliProducts,
    ...newFrozenProducts,
    ...newHealthyLivingProducts,
    ...newHouseholdProducts,
    ...newMeatProducts,
    ...newPantryProducts,
    ...newPersonalCareProducts,
    ...newPetProducts,
    ...newProduceProducts,
    ...newSnacksProducts,
    ...newSeasonalProducts,
    ...newBBQProducts,
  ];

  const { sortedProducts } = useSortedProducts(allNewProducts, searchQuery, sortType);

  useEffect(() => {
    setSearchQuery('');
  }, []);

  return (
    <div className="container mx-auto py-8 px-4 bg-green-200">
      <Header title="Recently Added" bgImage={bgHero} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;