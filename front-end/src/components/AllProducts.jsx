import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from './ExploreProducts';

const AllProducts = () => {
  const filteredCategories = categories.filter(category => category.name !== 'See All Products');

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">All Categories</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {filteredCategories.map((category) => (
          <Link to={category.link} key={category.name} className="w-28 h-36">
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full h-full flex flex-col items-center justify-between px-1 py-6">
              <img src={category.image} alt={category.name} className="w-15 h-16 object-cover" />
              <h3 className="text-sm font-semibold mt-2 text-center">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;