import React, { useState, useEffect } from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';
import useSortedProducts from '../hooks/useSortedProducts';

export const frozenProducts = [
  { id: 10001, category: 'Vegetables', name: 'Frozen Peas', description: 'Freshly frozen green peas', image: 'https://m.media-amazon.com/images/I/51hjmVF3jgL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '2.99', availability: 10 },
  { id: 10002, category: 'Vegetables', name: 'Frozen Corn', description: 'Sweet frozen corn', image: 'https://m.media-amazon.com/images/I/71k+HvvoRGL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '2.99', availability: 10 },
  { id: 10003, category: 'Vegetables', name: 'Frozen Spinach', description: 'Chopped frozen spinach', image: 'https://m.media-amazon.com/images/I/61ZcG1X+FQL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '2.99', availability: 10 },
  { id: 10004, category: 'Vegetables', name: 'Frozen Broccoli', description: 'Frozen broccoli florets', image: 'https://m.media-amazon.com/images/I/61gtmBHipUL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '2.99', availability: 10 },
  { id: 10005, category: 'Fruits', name: 'Frozen Strawberries & Bananas', description: 'Sliced frozen fruit', image: 'https://m.media-amazon.com/images/I/61rJJLr+FUL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '3.99', availability: 10 },
  { id: 10006, category: 'Fruits', name: 'Frozen Blueberries', description: 'Whole frozen blueberries', image: 'https://m.media-amazon.com/images/I/51seX3JvzML._AC_UL320_.jpg', identifiers: ['Fruits'], price: '3.99', availability: 10 },
  { id: 10007, category: 'Fruits', name: 'Frozen Mango', description: 'Diced frozen mango', image: 'https://m.media-amazon.com/images/I/51Qym2xl-zL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '4.99', availability: 10 },
  { id: 10008, category: 'Meals', name: 'Frozen Pizza', description: 'Pepperoni frozen pizza', image: 'https://m.media-amazon.com/images/I/91ubP-YuiDL._AC_UL320_.jpg', identifiers: ['Meals'], price: '5.99', availability: 10 },
  { id: 10009, category: 'Meals', name: 'Frozen Lasagna', description: 'Cheese and meat frozen lasagna', image: 'https://m.media-amazon.com/images/I/81XTcWNoEcL._AC_UL320_.jpg', identifiers: ['Meals'], price: '7.99', availability: 10 },
  { id: 10010, category: 'Meals', name: 'Frozen Burritos', description: 'Beef and bean frozen burritos', image: 'https://m.media-amazon.com/images/I/81AOPmtTiAL._AC_UL320_.jpg', identifiers: ['Meals'], price: '6.99', availability: 10 },
  { id: 10011, category: 'Desserts', name: 'Vanilla Ice Cream', description: 'Classic vanilla ice cream', image: 'https://m.media-amazon.com/images/I/81Bu-7D3KXL._AC_UL320_.jpg', identifiers: ['Ice Cream'], price: '4.99', availability: 10 },
  { id: 10012, category: 'Desserts', name: 'Chocolate Ice Cream', description: 'Rich chocolate ice cream', image: 'https://m.media-amazon.com/images/I/818PHqCqaTL._AC_UL320_.jpg', identifiers: ['Ice Cream'], price: '4.99', availability: 10 },
  { id: 10013, category: 'Desserts', name: 'Frozen Pie', description: 'Apple frozen pie', image: 'https://m.media-amazon.com/images/I/81iw9+sxZDL._AC_UL320_.jpg', identifiers: ['Desserts'], price: '5.99', availability: 10 },
  { id: 10014, category: 'Snacks', name: 'Frozen French Fries', description: 'Crispy frozen French fries', image: 'https://m.media-amazon.com/images/I/516Uhk0HLdL._AC_UL320_.jpg', identifiers: ['Snacks'], price: '3.99', availability: 10 },
  { id: 10015, category: 'Frozen Meat', name: 'Frozen Chicken Nuggets', description: 'Frozen chicken nuggets', image: 'https://m.media-amazon.com/images/I/91KEAhXfGnS._AC_UL320_.jpg', identifiers: ['Frozen'], price: '11.99', availability: 10 },
  { id: 10016, category: 'Vegetables', name: 'Frozen Mixed Vegetables', description: 'Mixed frozen vegetables', image: 'https://m.media-amazon.com/images/I/61ZaXxXtcHL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '3.99', availability: 10 },
  { id: 10017, category: 'Fruits', name: 'Frozen Raspberries', description: 'Whole frozen raspberries', image: 'https://m.media-amazon.com/images/I/61W4S6KPLFL._AC_UL320_.jpg', identifiers: ['Fruits', 'Organic'], price: '4.99', availability: 10 },
  { id: 10018, category: 'Meals', name: 'Frozen Mac and Cheese', description: 'Creamy frozen mac and cheese', image: 'https://m.media-amazon.com/images/I/81msp4JgWWL._AC_UL320_.jpg', identifiers: ['Meals'], price: '4.99', availability: 10 },
  { id: 10019, category: 'Desserts', name: 'Frozen Cheesecake', description: 'New York-style frozen cheesecake', image: 'https://m.media-amazon.com/images/I/8104vWKFFfL._AC_UL320_.jpg', identifiers: ['Desserts'], price: '6.99', availability: 10 },
  { id: 10020, category: 'Snacks', name: 'Frozen Mozzarella Sticks', description: 'Breaded frozen mozzarella sticks', image: 'https://m.media-amazon.com/images/I/61fp4YUDEAL._AC_UL320_.jpg', identifiers: ['Snacks'], price: '5.99', availability: 10 },
  { id: 10021, category: 'Vegetables', name: 'Frozen Cauliflower', description: 'Frozen cauliflower florets', image: 'https://m.media-amazon.com/images/I/51QWPDcc++L._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '2.99', availability: 10 },
  { id: 10022, category: 'Fruits', name: 'Frozen Pineapple', description: 'Frozen pineapple chunks', image: 'https://m.media-amazon.com/images/I/51dVRCLWqoL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '4.99', availability: 10 },
  { id: 10023, category: 'Meals', name: 'Frozen Meatloaf', description: 'Frozen meatloaf with gravy', image: 'https://m.media-amazon.com/images/I/81WGzIfbjLL._AC_UL320_.jpg', identifiers: ['Meals'], price: '7.99', availability: 10 },
  { id: 10024, category: 'Snacks', name: 'Frozen Taquitos', description: 'Chicken frozen taquitos', image: 'https://m.media-amazon.com/images/I/71rfK0vfTcS._AC_UL320_.jpg', identifiers: ['Snacks'], price: '6.99', availability: 10 },
  { id: 10025, category: 'Vegetables', name: 'Frozen Green Beans', description: 'Frozen cut green beans', image: 'https://m.media-amazon.com/images/I/61JiEi5SraL._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '2.99', availability: 10 },
  { id: 10026, category: 'Fruits', name: 'Frozen Blackberries', description: 'Whole frozen blackberries', image: 'https://m.media-amazon.com/images/I/61+gkcMDKNL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '4.99', availability: 10 },
  { id: 10027, category: 'Meals', name: 'Frozen Chicken Pot Pie', description: 'Frozen chicken pot pie', image: 'https://m.media-amazon.com/images/I/91jKK+al1xL._AC_UL320_.jpg', identifiers: ['Meals'], price: '5.99', availability: 10 },
  { id: 10028, category: 'Desserts', name: 'Frozen Cake', description: 'Frozen pound cake', image: 'https://m.media-amazon.com/images/I/91pPdSe34UL._AC_UL320_.jpg', identifiers: ['Desserts'], price: '5.99', availability: 10 },
];

export const newFrozenProducts = [
  { id: 10029, category: 'Meals', name: 'Frozen Lasagna', description: 'Lasagna Italiano', image: 'https://m.media-amazon.com/images/I/81zg-saTXaL._AC_UL320_.jpg', identifiers: ['Meals'], price: '12.99', availability: 10 },
  { id: 10030, category: 'Vegetables', name: 'Frozen Veggies', description: 'Frozen stir-fry blend', image: 'https://m.media-amazon.com/images/I/51pO3UxflXL._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '2.99', availability: 10 }
];

const FrozenProducts = ({ setSearchQuery, searchQuery, sortType }) => {
  const { sortedProducts } = useSortedProducts(frozenProducts, searchQuery, sortType);

  useEffect(() => {
    setSearchQuery('');
  }, []);


  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Frozen Products</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {sortedFrozenProducts.map((product) => (
          <div key={product.name} className="card bg-base-100 w-72 shadow-xl">
            <figure className="h-48 flex items-center justify-center bg-white">
              <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
            </figure>
            <div className="card-body flex flex-col justify-between">
              <div>
                <h2 className="card-title flex justify-center mb-4">{product.name}</h2>
                <p className="card-description flex justify-center">{product.description}</p>
              </div>
              <div className="card-actions flex flex-row items-center">
                <button className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm m-2"  onClick={() => addToCart(product) }>Add to Cart</button>
                <div className="flex flex-col gap-1 ml-2">
                  {product.identifiers.map((identifier) => (
                    <div key={identifier} className="badge badge-outline">{identifier}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FrozenProducts;