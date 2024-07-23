import { useState, useEffect } from 'react';

const useSortedProducts = (products, searchQuery, sortType) => {
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchQuery) || 
      product.description.toLowerCase().includes(searchQuery) ||
      product.identifiers.some(identifier => identifier.toLowerCase().includes(searchQuery))
    );

    const sorted = filteredProducts
      .filter(product => product.availability > 0)
      .sort((a, b) => {
        if (sortType === 'price') {
          return parseFloat(a.price) - parseFloat(b.price);
        } else if (sortType === 'availability') {
          return b.availability - a.availability;
        } else {
          return a.category.localeCompare(b.category);
        }
      });

    setSortedProducts(sorted);
  }, [products, searchQuery, sortType]);

  return { sortedProducts };
};

export default useSortedProducts;