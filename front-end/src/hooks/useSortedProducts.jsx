import { useState, useEffect } from 'react';

const useSortedProducts = (products, searchQuery, sortType) => {
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(query) || 
      product.description.toLowerCase().includes(query) ||
      product.identifiers.some(identifier => identifier.toLowerCase().includes(query))
    );

    // Remove duplicates based on the product name
    const uniqueProducts = filteredProducts.reduce((acc, current) => {
      const x = acc.find(item => item.name === current.name);
      if (!x) {
        return acc.concat([current]);
      }
      return acc;
    }, []);

    const sorted = uniqueProducts
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