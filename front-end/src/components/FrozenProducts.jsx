import React from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';

const frozenProducts = [
  { category: 'Vegetables', name: 'Frozen Peas', description: 'Freshly frozen green peas', image: 'https://m.media-amazon.com/images/I/51hjmVF3jgL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '2.99' },
  { category: 'Vegetables', name: 'Frozen Corn', description: 'Sweet frozen corn', image: 'https://m.media-amazon.com/images/I/71k+HvvoRGL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '2.99' },
  { category: 'Vegetables', name: 'Frozen Spinach', description: 'Chopped frozen spinach', image: 'https://m.media-amazon.com/images/I/61ZcG1X+FQL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '2.99' },
  { category: 'Vegetables', name: 'Frozen Broccoli', description: 'Frozen broccoli florets', image: 'https://m.media-amazon.com/images/I/61gtmBHipUL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '2.99' },
  { category: 'Fruits', name: 'Frozen Strawberries & Bananas', description: 'Sliced frozen fruit', image: 'https://m.media-amazon.com/images/I/61rJJLr+FUL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '3.99' },
  { category: 'Fruits', name: 'Frozen Blueberries', description: 'Whole frozen blueberries', image: 'https://m.media-amazon.com/images/I/51seX3JvzML._AC_UL320_.jpg', identifiers: ['Fruits'], price: '3.99' },
  { category: 'Fruits', name: 'Frozen Mango', description: 'Diced frozen mango', image: 'https://m.media-amazon.com/images/I/51Qym2xl-zL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '4.99' },
  { category: 'Meals', name: 'Frozen Pizza', description: 'Pepperoni frozen pizza', image: 'https://m.media-amazon.com/images/I/91ubP-YuiDL._AC_UL320_.jpg', identifiers: ['Meals'], price: '5.99' },
  { category: 'Meals', name: 'Frozen Lasagna', description: 'Cheese and meat frozen lasagna', image: 'https://m.media-amazon.com/images/I/81XTcWNoEcL._AC_UL320_.jpg', identifiers: ['Meals'], price: '7.99' },
  { category: 'Meals', name: 'Frozen Burritos', description: 'Beef and bean frozen burritos', image: 'https://m.media-amazon.com/images/I/81AOPmtTiAL._AC_UL320_.jpg', identifiers: ['Meals'], price: '6.99' },
  { category: 'Desserts', name: 'Vanilla Ice Cream', description: 'Classic vanilla ice cream', image: 'https://m.media-amazon.com/images/I/81Bu-7D3KXL._AC_UL320_.jpg', identifiers: ['Ice Cream'], price: '4.99' },
  { category: 'Desserts', name: 'Chocolate Ice Cream', description: 'Rich chocolate ice cream', image: 'https://m.media-amazon.com/images/I/818PHqCqaTL._AC_UL320_.jpg', identifiers: ['Ice Cream'], price: '4.99' },,
  { category: 'Desserts', name: 'Frozen Pie', description: 'Apple frozen pie', image: 'https://m.media-amazon.com/images/I/81iw9+sxZDL._AC_UL320_.jpg', identifiers: ['Desserts'], price: '5.99' },
  { category: 'Snacks', name: 'Frozen French Fries', description: 'Crispy frozen French fries', image: 'https://m.media-amazon.com/images/I/516Uhk0HLdL._AC_UL320_.jpg', identifiers: ['Snacks'], price: '3.99' },
  { category: 'Frozen Meat', name: 'Frozen Chicken Nuggets', description: 'Frozen chicken nuggets', image: 'https://m.media-amazon.com/images/I/91KEAhXfGnS._AC_UL320_.jpg', identifiers: ['Frozen'], price: '11.99' },
  { category: 'Vegetables', name: 'Frozen Mixed Vegetables', description: 'Mixed frozen vegetables', image: 'https://m.media-amazon.com/images/I/61ZaXxXtcHL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '3.99' },
  { category: 'Fruits', name: 'Frozen Raspberries', description: 'Whole frozen raspberries', image: 'https://m.media-amazon.com/images/I/61W4S6KPLFL._AC_UL320_.jpg', identifiers: ['Fruits', 'Organic'], price: '4.99' },
  { category: 'Meals', name: 'Frozen Mac and Cheese', description: 'Creamy frozen mac and cheese', image: 'https://m.media-amazon.com/images/I/81msp4JgWWL._AC_UL320_.jpg', identifiers: ['Meals'], price: '4.99' },
  { category: 'Desserts', name: 'Frozen Cheesecake', description: 'New York-style frozen cheesecake', image: 'https://m.media-amazon.com/images/I/8104vWKFFfL._AC_UL320_.jpg', identifiers: ['Desserts'], price: '6.99' },
  { category: 'Snacks', name: 'Frozen Mozzarella Sticks', description: 'Breaded frozen mozzarella sticks', image: 'https://m.media-amazon.com/images/I/61fp4YUDEAL._AC_UL320_.jpg', identifiers: ['Snacks'], price: '5.99' },
  { category: 'Vegetables', name: 'Frozen Cauliflower', description: 'Frozen cauliflower florets', image: 'https://m.media-amazon.com/images/I/51QWPDcc++L._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '2.99' },
  { category: 'Fruits', name: 'Frozen Pineapple', description: 'Frozen pineapple chunks', image: 'https://m.media-amazon.com/images/I/51dVRCLWqoL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '4.99' },
  { category: 'Meals', name: 'Frozen Meatloaf', description: 'Frozen meatloaf with gravy', image: 'https://m.media-amazon.com/images/I/81WGzIfbjLL._AC_UL320_.jpg', identifiers: ['Meals'], price: '7.99' },
  { category: 'Snacks', name: 'Frozen Taquitos', description: 'Chicken frozen taquitos', image: 'https://m.media-amazon.com/images/I/71rfK0vfTcS._AC_UL320_.jpg', identifiers: ['Snacks'], price: '6.99' },
  { category: 'Vegetables', name: 'Frozen Green Beans', description: 'Frozen cut green beans', image: 'https://m.media-amazon.com/images/I/61JiEi5SraL._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '2.99' },
  { category: 'Fruits', name: 'Frozen Blackberries', description: 'Whole frozen blackberries', image: 'https://m.media-amazon.com/images/I/61+gkcMDKNL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '4.99' },
  { category: 'Meals', name: 'Frozen Chicken Pot Pie', description: 'Frozen chicken pot pie', image: 'https://m.media-amazon.com/images/I/91jKK+al1xL._AC_UL320_.jpg', identifiers: ['Meals'], price: '5.99' },
  { category: 'Desserts', name: 'Frozen Cake', description: 'frozen pound cake', image: 'https://m.media-amazon.com/images/I/91pPdSe34UL._AC_UL320_.jpg', identifiers: ['Desserts'], price: '5.99' },
];

const sortedFrozenProducts = frozenProducts.sort((a, b) => a.category.localeCompare(b.category));

const FrozenProducts = () => {
  return (
    <div className="container mx-auto py-8 px-4 bg-green-200">
      <Header title="Frozen Foods" bgImage={bgHero} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedFrozenProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FrozenProducts;