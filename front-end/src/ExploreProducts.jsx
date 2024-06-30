import React, { useState } from 'react';
import Slider from 'react-slick';
import peach from './assets/peach.png';
import strawberries from './assets/strawberries.png';
import apples from './assets/apples.png';
import oranges from './assets/oranges.png';
import potatoes from './assets/potatoes.png';
import carrots from './assets/carrots.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  { name: 'Peach', itemCount: 20, image: peach, bgColor: '#F57E0F1A', type: 'Fruits and Vegetables' },
  { name: 'Strawberries', itemCount: 20, image: strawberries, bgColor: '#E800001A', type: 'Fruits and Vegetables' },
  { name: 'Apples', itemCount: 20, image: apples, bgColor: '#A800001A', type: 'Fruits and Vegetables' },
  { name: 'Oranges', itemCount: 20, image: oranges, bgColor: '#CC62001A', type: 'Fruits and Vegetables' },
  { name: 'Potatoes', itemCount: 20, image: potatoes, bgColor: '#6832001A', type: 'Fruits and Vegetables' },
  { name: 'Carrots', itemCount: 20, image: carrots, bgColor: '#C446001A', type: 'Fruits and Vegetables' },
];

const filters = ['All', 'Fruits and Vegetables', 'Dairy', 'Meat'];

const ExploreProducts = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredCategories = selectedFilter === 'All' ? categories : categories.filter(category => category.type === selectedFilter);

  const sliderSettings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="explore-products p-10 bg-white rounded-lg shadow-lg my-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Explore Products</h2>
        <div className="filters flex">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`mx-2 px-4 py-2 border-none rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors ${selectedFilter === filter ? 'text-green-600 font-semibold' : ''}`}
              onClick={() => setSelectedFilter(filter)}
              aria-label={`Filter by ${filter}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="slider-container">
        <Slider {...sliderSettings}>
          {filteredCategories.map((category) => (
            <div key={category.name} className="px-2">
              <div
                className="category-card p-6 border rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                style={{ backgroundColor: category.bgColor }}
              >
                <img src={category.image} alt={category.name} className="w-24 h-24 mx-auto mb-4 object-cover rounded-full"/>
                <div className="category-name text-xl font-semibold mb-2">{category.name}</div>
                <div className="item-count text-md text-gray-500">{category.itemCount} items</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ExploreProducts;