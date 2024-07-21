import React from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';

const deliProducts = [
  { category: 'Cold Cuts', name: 'Turkey Breast', description: 'Oven-roasted turkey breast', image: 'https://m.media-amazon.com/images/I/61I2vyZ1AcL._AC_UL320_.jpg', identifiers: ['Cold Cuts'], price: '7.99' },
  { category: 'Cold Cuts', name: 'Ham', description: 'Black Forest ham', image: 'https://m.media-amazon.com/images/I/51f7T-1EerL._SX679_.jpg', identifiers: ['Cold Cuts'], price: '6.99' },
  { category: 'Cold Cuts', name: 'Roast Beef', description: 'Thinly sliced roast beef', image: 'https://m.media-amazon.com/images/I/61lhN2m9dwL._AC_UL320_.jpg', identifiers: ['Cold Cuts'], price: '8.99' },
  { category: 'Cheese', name: 'Swiss Cheese', description: 'Creamy Swiss cheese', image: 'https://m.media-amazon.com/images/I/71KPaFJG02L._AC_UL320_.jpg', identifiers: ['Cheese'], price: '5.99' },
  { category: 'Cheese', name: 'Provolone Cheese', description: 'Sharp Provolone cheese', image: 'https://m.media-amazon.com/images/I/51REMTb-ulL._AC_UL320_.jpg', identifiers: ['Cheese'], price: '6.49' },
  { category: 'Prepared Foods', name: 'Chicken Salad', description: 'Homemade chicken salad', image: 'https://m.media-amazon.com/images/I/7124-Z-ySJL._AC_UL320_.jpg', identifiers: ['Prepared Foods'], price: '4.99' },
  { category: 'Prepared Foods', name: 'Chef Salad', description: 'Chef salad', image: 'https://m.media-amazon.com/images/I/71b+GcW3umL._AC_UL320_.jpg', identifiers: ['Prepared Foods'], price: '3.99' },
  { category: 'Cold Cuts', name: 'Salami', description: 'Italian salami', image: 'https://m.media-amazon.com/images/I/915EWUpgffL._AC_UL320_.jpg', identifiers: ['Cold Cuts'], price: '9.99' },
  { category: 'Cold Cuts', name: 'Bologna', description: 'Classic bologna', image: 'https://m.media-amazon.com/images/I/617nxM6E2uL._AC_UL320_.jpg', identifiers: ['Cold Cuts'], price: '4.99' },
  { category: 'Cheese', name: 'Cheddar Cheese', description: 'Sharp Cheddar cheese', image: 'https://m.media-amazon.com/images/I/51LdXKbtEyL._AC_UL320_.jpg', identifiers: ['Cheese'], price: '6.99' },
  { category: 'Prepared Foods', name: 'Coleslaw', description: 'Coleslaw Mix', image: 'https://m.media-amazon.com/images/I/61MQGApX-rL._AC_UL320_.jpg', identifiers: ['Prepared Foods'], price: '2.99' },
  { category: 'Prepared Foods', name: 'Cobb Salad', description: 'Classic Cobb salad', image: 'https://m.media-amazon.com/images/I/715mhQonTGL._AC_UL320_.jpg', identifiers: ['Prepared Foods'], price: '3.49' },
  { category: 'Cold Cuts', name: 'Pepperoni', description: 'Spicy pepperoni', image: 'https://m.media-amazon.com/images/I/81nW+JKonOL._AC_UL320_.jpg', identifiers: ['Cold Cuts'], price: '8.49' },
  { category: 'Cold Cuts', name: 'Prosciutto', description: 'Italian Prosciutto', image: 'https://m.media-amazon.com/images/I/81f96Et8LAL._AC_UL320_.jpg', identifiers: ['Cold Cuts'], price: '14.99' },
  { category: 'Cheese', name: 'Mozzarella Cheese', description: 'Fresh Mozzarella cheese', image: 'https://m.media-amazon.com/images/I/51r1my2XrCL._AC_UL320_.jpg', identifiers: ['Cheese'], price: '5.49' },
  { category: 'Cheese', name: 'Havarti Cheese', description: 'Creamy Havarti cheese', image: 'https://m.media-amazon.com/images/I/51PDqp-p+FL._AC_UL320_.jpg', identifiers: ['Cheese'], price: '6.49' },
  { category: 'Prepared Foods', name: 'Potato Salad', description: 'Classic potato salad', image: 'https://m.media-amazon.com/images/I/51G6i4GaK7L._AC_UL320_.jpg', identifiers: ['Prepared Foods'], price: '2.99' },
  { category: 'Prepared Foods', name: 'Deviled Eggs', description: 'Delicious deviled eggs', image: 'https://m.media-amazon.com/images/I/51wD8GV8owL._AC_UL320_.jpg', identifiers: ['Prepared Foods'], price: '4.99' },
  { category: 'Cheese', name: 'Blue Cheese', description: 'Crumbly Blue cheese', image: 'https://m.media-amazon.com/images/I/51knwuPoq-L._AC_UL320_.jpg', identifiers: ['Cheese'], price: '7.49' },
  { category: 'Cheese', name: 'Gouda Cheese', description: 'Smoked Gouda cheese', image: 'https://m.media-amazon.com/images/I/51kwi3K0GfL._AC_UL320_.jpg', identifiers: ['Cheese'], price: '8.99' },
  { category: 'Cold Cuts', name: 'Pastrami', description: 'Juicy pastrami', image: 'https://m.media-amazon.com/images/I/618YKnZ11sS._AC_UL320_.jpg', identifiers: ['Cold Cuts'], price: '10.99' },
  { category: 'Prepared Foods', name: 'Stuffed Grape Leaves', description: 'Mediterranean stuffed grape leaves', image: 'https://m.media-amazon.com/images/I/91QPnOKEGjL._AC_UL320_.jpg', identifiers: ['Prepared Foods'], price: '6.99' },
  { category: 'Cold Cuts', name: 'Corned Beef', description: 'Classic corned beef', image: 'https://m.media-amazon.com/images/I/81xiwSija7L._AC_UL320_.jpg', identifiers: ['Cold Cuts'], price: '9.99' },
  { category: 'Cheese', name: 'Brie Cheese', description: 'Creamy Brie cheese', image: 'https://m.media-amazon.com/images/I/71e8z6jeo5L._AC_UL320_.jpg', identifiers: ['Cheese'], price: '10.99' },
  { category: 'Prepared Foods', name: 'Chicken Wings', description: 'Buffalo chicken wings', image: 'https://m.media-amazon.com/images/I/514T7btisCL._AC_UL320_.jpg', identifiers: ['Prepared Foods'], price: '7.99' },
  { category: 'Cold Cuts', name: 'Mortadella', description: 'Italian Mortadella', image: 'https://m.media-amazon.com/images/I/71syLOLl5OL._AC_UL320_.jpg', identifiers: ['Cold Cuts'], price: '8.99' },
  { category: 'Cheese', name: 'Feta Cheese', description: 'Crumbly Feta cheese', image: 'https://m.media-amazon.com/images/I/71nf0MtF0fL._AC_UL320_.jpg', identifiers: ['Cheese'], price: '6.49' },
  { category: 'Prepared Foods', name: 'Chicken Tenders', description: 'Crispy chicken tenders', image: 'https://m.media-amazon.com/images/I/61MNLD4jTUL._AC_UL320_.jpg', identifiers: ['Prepared Foods'], price: '5.99' },
];
const sortedDeliProducts = deliProducts.sort((a, b) => a.category.localeCompare(b.category));

const DeliProducts = () => {
  return (
    <div className="container mx-auto py-8 px-4 bg-green-200">
      <Header title="Deli" bgImage={bgHero} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedDeliProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default DeliProducts;