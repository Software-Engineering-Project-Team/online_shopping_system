import React, { useState, useEffect } from 'react';
import { allProducts } from './Stock';
import { Link, useNavigate } from 'react-router-dom';

const SearchBar = ({ setSearchQuery }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputValue.length > 0) {
      const query = inputValue.toLowerCase();
      const filtered = allProducts.filter(product =>
        product && 
        (product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.identifiers.some(identifier => identifier.toLowerCase().includes(query)))
      );

      const sortedFiltered = filtered.sort((a, b) => {
        if (a.name.toLowerCase().startsWith(query) && !b.name.toLowerCase().startsWith(query)) {
          return -1;
        } else if (!a.name.toLowerCase().startsWith(query) && b.name.toLowerCase().startsWith(query)) {
          return 1;
        }
        return a.name.localeCompare(b.name);
      });

      const uniqueFiltered = sortedFiltered.reduce((acc, current) => {
        const x = acc.find(item => item.name === current.name);
        if (!x) {
          return acc.concat([current]);
        }
        return acc;
      }, []);

      setFilteredProducts(uniqueFiltered.slice(0, 6));
    } else {
      setFilteredProducts([]);
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleProductClick = (productName) => {
    setSearchQuery(productName);
    navigate('/search');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchQuery(inputValue);
    navigate('/search');
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Products..."
          value={inputValue}
          onChange={handleInputChange}
          className="input input-bordered w-full md:w-auto bg-[#30C976] rounded-none bg-opacity-10"
        />
      </form>
      {inputValue && (
        <div className="absolute bg-white shadow-md rounded-md mt-2 w-full z-50 max-h-60 overflow-y-auto">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.name)}
              className="block p-2 hover:bg-gray-200 cursor-pointer"
            >
              {product.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;