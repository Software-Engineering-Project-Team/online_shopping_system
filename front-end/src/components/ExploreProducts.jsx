import React, { useState } from 'react';
import Slider from 'react-slick';
import { Link, useNavigate } from 'react-router-dom';
import allProductsIcon from '../assets/Categories/allProducts.png';
import newIcon from '../assets/Categories/new.png';
import onSaleIcon from '../assets/Categories/onSale.png';
import dairyIcon from '../assets/Categories/dairy.png';
import produceIcon from '../assets/Categories/produce.png';
import meatIcon from '../assets/Categories/meat.png';
import deliIcon from '../assets/Categories/deli.png';
import frozenIcon from '../assets/Categories/frozen.png';
import bakeryIcon from '../assets/Categories/bakery.png';
import snacksIcon from '../assets/Categories/snacks.png';
import pantryIcon from '../assets/Categories/pantry.png';
import breakfastIcon from '../assets/Categories/breakfast.png';
import beveragesIcon from '../assets/Categories/beverages.png';
import alcoholIcon from '../assets/Categories/alcohol.png';
import babyIcon from '../assets/Categories/baby.png';
import petIcon from '../assets/Categories/pet.png';
import householdIcon from '../assets/Categories/household.png';
import personalCareIcon from '../assets/Categories/personalCare.png';
import fanFavoritesIcon from '../assets/Categories/fanFavorites.png';
import seasonalIcon from '../assets/Categories/seasonal.png';
import bbqIcon from '../assets/Categories/bbq.png';
import healthyLivingIcon from '../assets/Categories/healthyLiving.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const categories = [
  { name: 'See All Products', description: 'Browse our entire product range', image: allProductsIcon, bgColor: 'bg-green-100', link: '/all-products', isTextOnly: true },
  { name: 'New', description: 'Recently added products', image: newIcon, bgColor: '#FFFFFF', link: '/new' },
  { name: 'On Sale', description: 'Products currently on sale', image: onSaleIcon, bgColor: '#FFFFFF', link: '/on-sale' },
  { name: 'Dairy & Eggs', description: 'Milk, cheese, eggs, and more', image: dairyIcon, bgColor: '#FFFFFF', link: '/dairy' },
  { name: 'Fresh Produce', description: 'Fresh fruits and vegetables', image: produceIcon, bgColor: '#FFFFFF', link: '/produce' },
  { name: 'Fresh Meat & Seafood', description: 'Fresh and frozen meats and seafood', image: meatIcon, bgColor: '#FFFFFF', link: '/meat' },
  { name: 'Deli', description: 'Deli meats, cheeses, and prepared foods', image: deliIcon, bgColor: '#FFFFFF', link: '/deli' },
  { name: 'Frozen Foods', description: 'Frozen meals, vegetables, and desserts', image: frozenIcon, bgColor: '#FFFFFF', link: '/frozen' },
  { name: 'Bakery & Bread', description: 'Bread, pastries, and baked goods', image: bakeryIcon, bgColor: '#FFFFFF', link: '/bakery' },
  { name: 'Snacks', description: 'Chips, cookies, and more', image: snacksIcon, bgColor: '#FFFFFF', link: '/snacks' },
  { name: 'Pantry Essentials', description: 'Canned goods, grains, pasta, and more', image: pantryIcon, bgColor: '#FFFFFF', link: '/pantry' },
  { name: 'Breakfast & Cereals', description: 'Breakfast cereals and morning meals', image: breakfastIcon, bgColor: '#FFFFFF', link: '/breakfast' },
  { name: 'Beverages', description: 'Soft drinks, juices, water, and more', image: beveragesIcon, bgColor: '#FFFFFF', link: '/beverages' },
  { name: 'Alcohol', description: 'Wine, beer, and liquor', image: alcoholIcon, bgColor: '#FFFFFF', link: '/alcohol' },
  { name: 'Baby Items', description: 'Baby food, diapers, and kids\' snacks', image: babyIcon, bgColor: '#FFFFFF', link: '/baby' },
  { name: 'Pet Supplies', description: 'Pet food, toys, and more', image: petIcon, bgColor: '#FFFFFF', link: '/pet' },
  { name: 'Household Essentials', description: 'Cleaning supplies, paper goods, and more', image: householdIcon, bgColor: '#FFFFFF', link: '/household' },
  { name: 'Personal Care', description: 'Personal care, hygiene, and more', image: personalCareIcon, bgColor: '#FFFFFF', link: '/personal-care' },
  { name: 'Fan Favorites', description: 'Popular items among customers', image: fanFavoritesIcon, bgColor: '#FFFFFF', link: '/fan-favorites' },
  { name: 'Seasonal Products', description: 'Temporary selections for seasonal items', image: seasonalIcon, bgColor: '#FFFFFF', link: '/seasonal' },
  { name: 'BBQ', description: 'Items for outdoor grilling and picnics', image: bbqIcon, bgColor: '#FFFFFF', link: '/bbq' },
  { name: 'Healthy Living', description: 'Organic, gluten-free, and more', image: healthyLivingIcon, bgColor: '#FFFFFF', link: '/healthy-living' },
];

const ExploreProducts = () => {
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const navigate = useNavigate();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToScroll: 6,
    slidesToShow: 6
  };

  const handleMouseDown = (event) => {
    setStartX(event.clientX);
    setStartY(event.clientY);
  };

  const handleMouseUp = (event, link) => {
    const endX = event.clientX;
    const endY = event.clientY;
    const distanceX = Math.abs(endX - startX);
    const distanceY = Math.abs(endY - startY);

    if (distanceX < 5 && distanceY < 5) {
      navigate(link);
    }
  };

  return (
    <div className="explore-products p-10 bg-white rounded-lg shadow-lg my-10">
      <style>
        {`
          .slick-dots li button:before {
            color: #30C976; 
          }
          
          .slick-dots li.slick-active button:before {
            color: #30C976; 
          }
        `}
      </style>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Shop by Category</h2>
      </div>
      <div className="slider-container">
        <Slider {...sliderSettings}>
          {categories.map((category) => (
            <div key={category.name} className="px-2">
              <div
                className="category-card p-3 border rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                style={{ backgroundColor: category.bgColor }}
                onMouseDown={handleMouseDown}
                onMouseUp={(event) => handleMouseUp(event, category.link)}
              >
                <img src={category.image} alt={category.name} className="w-30 h-24 mx-auto mb-auto object-cover"/>
                <div className="category-name text-xl font-semibold mb-auto">{category.name}</div>
                <div className="category-description text-sm text-gray-500">{category.description}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ExploreProducts;