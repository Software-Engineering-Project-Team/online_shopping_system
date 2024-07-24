import React from 'react';

const SortOptions = ({ sortType, setSortType }) => (
  <div className="flex justify-between items-center mb-4">
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
);

export default SortOptions;