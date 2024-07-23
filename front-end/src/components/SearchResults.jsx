import React from 'react';
import { allProducts } from './Stock';

const SearchResults = ({ searchQuery, sortType }) => {
  const query = searchQuery ? searchQuery.toLowerCase() : '';

  const filteredProducts = allProducts.filter(product =>
    product &&
    (product.name.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query) ||
    product.identifiers.some(identifier => identifier.toLowerCase().includes(query)))
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortType === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortType === 'price') {
      return a.price - b.price;
    }
    return 0;
  });

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Search Results for "{searchQuery}"</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {sortedProducts.map(product => (
          <div key={product.id} className="w-28 h-36">
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full h-full flex flex-col items-center justify-between px-1 py-6">
              <img src={product.image} alt={product.name} className="w-15 h-16 object-cover" />
              <h3 className="text-sm font-semibold mt-2 text-center">{product.name}</h3>
              <p className="text-sm text-center">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;