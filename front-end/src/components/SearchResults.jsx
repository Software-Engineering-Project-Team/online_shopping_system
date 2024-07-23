import React from 'react';
import { allProducts } from './Stock';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';
import useSortedProducts from '../hooks/useSortedProducts';

const SearchResults = ({ searchQuery, sortType }) => {
  const { sortedProducts } = useSortedProducts(allProducts, searchQuery, sortType);

  return (
    <div className="container mx-auto py-8 px-4 bg-green-200">
      <Header title={`Search Results for "${searchQuery}"`} bgImage={bgHero} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;