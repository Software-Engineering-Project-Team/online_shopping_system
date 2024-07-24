import React from 'react';
import { allProducts } from './Stock';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';
import useSortedProducts from '../hooks/useSortedProducts';

const SearchResults = ({ searchQuery, sortType, setSortType }) => {
  const { sortedProducts } = useSortedProducts(allProducts, searchQuery, sortType);

  return (
    <div className="container mx-auto py-8 px-4 bg-green-200">
      <Header title={`Search Results for "${searchQuery}"`} bgImage={bgHero} />
      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="mr-2">Sort by:</label>
          <select 
            value={sortType} 
            onChange={(e) => setSortType(e.target.value)}
            className="input input-bordered w-full md:w-auto"
          >
            <option value="">None</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="availability">Availability</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;