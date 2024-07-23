import React from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';
import useSortedProducts from '../hooks/useSortedProducts';

export const householdProducts = [
  { id: 12001, category: 'Cleaning Supplies', name: 'All-Purpose Cleaner', description: 'Multipurpose cleaner', image: 'https://m.media-amazon.com/images/I/71xU56FcKiL._AC_UL320_.jpg', identifiers: ['Cleaning Supplies'], price: '3.99', availability: 10 },
  { id: 12002, category: 'Cleaning Supplies', name: 'Disinfectant Spray', description: 'Kills 99.9% of germs', image: 'https://m.media-amazon.com/images/I/81qfp6wD4YL._AC_UL320_.jpg', identifiers: ['Cleaning Supplies'], price: '14.99', availability: 10 },
  { id: 12003, category: 'Cleaning Supplies', name: 'Glass Cleaner', description: 'Streak-free shine', image: 'https://m.media-amazon.com/images/I/71+CsG1Y2RL._AC_UL320_.jpg', identifiers: ['Cleaning Supplies'], price: '2.99', availability: 10 },
  { id: 12004, category: 'Laundry', name: 'Laundry Detergent', description: 'Liquid laundry detergent', image: 'https://m.media-amazon.com/images/I/71YC69VHFBL._AC_UL320_.jpg', identifiers: ['Laundry'], price: '13.99', availability: 10 },
  { id: 12005, category: 'Laundry', name: 'Fabric Softener', description: 'Liquid fabric softener', image: 'https://m.media-amazon.com/images/I/81gBmOvz9DL._AC_UL320_.jpg', identifiers: ['Laundry'], price: '11.99', availability: 10 },
  { id: 12006, category: 'Laundry', name: 'Stain Remover', description: 'Removes tough stains', image: 'https://m.media-amazon.com/images/I/71g5IE9HWOL._AC_UL320_.jpg', identifiers: ['Laundry'], price: '3.99', availability: 10 },
  { id: 12007, category: 'Paper Goods', name: 'Paper Towels', description: 'Absorbent paper towels', image: 'https://m.media-amazon.com/images/I/81WQ2kVdyzL._AC_UL320_.jpg', identifiers: ['Paper Goods'], price: '4.99', availability: 10 },
  { id: 12008, category: 'Paper Goods', name: 'Toilet Paper', description: 'Soft and strong toilet paper', image: 'https://m.media-amazon.com/images/I/81nd7vEzWpL._AC_UL320_.jpg', identifiers: ['Paper Goods'], price: '7.99', availability: 10 },
  { id: 12009, category: 'Trash Bags', name: 'Kitchen Trash Bags', description: 'Durable kitchen trash bags', image: 'https://m.media-amazon.com/images/I/81T8s32YwgL._AC_UL320_.jpg', identifiers: ['Trash Bags'], price: '4.99', availability: 10 },
  { id: 12010, category: 'Trash Bags', name: 'Outdoor Trash Bags', description: 'Heavy-duty outdoor trash bags', image: 'https://m.media-amazon.com/images/I/71R9LKEkQVL._AC_UL320_.jpg', identifiers: ['Trash Bags'], price: '6.99', availability: 10 },
  { id: 12011, category: 'Cleaning Tools', name: 'Broom and Dustpan', description: 'Sweeping set', image: 'https://m.media-amazon.com/images/I/71Jzw4oNJcL._AC_UL320_.jpg', identifiers: ['Cleaning Tools'], price: '8.99', availability: 10 },
  { id: 12012, category: 'Cleaning Tools', name: 'Mop and Bucket', description: 'Floor cleaning set', image: 'https://m.media-amazon.com/images/I/71bh9E0aZWL._AC_UL320_.jpg', identifiers: ['Cleaning Tools'], price: '12.99', availability: 10 },
  { id: 12013, category: 'Cleaning Tools', name: 'Scrub Brush', description: 'Heavy-duty scrub brush', image: 'https://m.media-amazon.com/images/I/61lL36WhLsL._AC_UL320_.jpg', identifiers: ['Cleaning Tools'], price: '3.99', availability: 10 },
  { id: 12014, category: 'Air Fresheners', name: 'Air Freshener Spray', description: 'Eliminates odors', image: 'https://m.media-amazon.com/images/I/71IlUutBmIL._AC_UL320_.jpg', identifiers: ['Air Fresheners'], price: '4.99', availability: 10 },
  { id: 12015, category: 'Air Fresheners', name: 'Plug-in Air Freshener', description: 'Long-lasting fragrance', image: 'https://m.media-amazon.com/images/I/81bsWoFe5RL._AC_UL320_.jpg', identifiers: ['Air Fresheners'], price: '5.99', availability: 10 },
  { id: 12016, category: 'Dishwashing', name: 'Dish Soap', description: 'Liquid dish soap', image: 'https://m.media-amazon.com/images/I/71AstDZaFvL._AC_UL320_.jpg', identifiers: ['Dishwashing'], price: '2.99', availability: 10 },
  { id: 12017, category: 'Dishwashing', name: 'Dishwasher Detergent', description: 'Dishwasher pods', image: 'https://m.media-amazon.com/images/I/81lrKCj3V3L._AC_UL320_.jpg', identifiers: ['Dishwashing'], price: '8.99', availability: 10 },
  { id: 12018, category: 'Dishwashing', name: 'Dish Scrubber', description: 'Scrubber for dishes', image: 'https://m.media-amazon.com/images/I/61FwwwyuyML._AC_UL320_.jpg', identifiers: ['Dishwashing'], price: '3.99', availability: 10 },
  { id: 12019, category: 'Pest Control', name: 'Insect Repellent', description: 'Repels insects', image: 'https://m.media-amazon.com/images/I/61Uh7gT5XiL.__AC_SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Pest Control'], price: '6.99', availability: 10 },
  { id: 12020, category: 'Pest Control', name: 'Ant Traps', description: 'Ant control traps', image: 'https://m.media-amazon.com/images/I/81VZeCy2b8L._AC_UL320_.jpg', identifiers: ['Pest Control'], price: '4.99', availability: 10 },
  { id: 12021, category: 'Light Bulbs', name: 'LED Light Bulbs', description: 'Energy-efficient bulbs', image: 'https://m.media-amazon.com/images/I/51WsUiGJU3L._AC_UL320_.jpg', identifiers: ['Light Bulbs'], price: '9.99', availability: 10 },
  { id: 12022, category: 'Light Bulbs', name: 'CFL Light Bulbs', description: 'Compact fluorescent bulbs', image: 'https://m.media-amazon.com/images/I/61Sa363kcgL._AC_UL320_.jpg', identifiers: ['Light Bulbs'], price: '7.99', availability: 10 },
  { id: 12023, category: 'Batteries', name: 'AA Batteries', description: 'Pack of AA batteries', image: 'https://m.media-amazon.com/images/I/712VgtWexFL._AC_UL320_.jpg', identifiers: ['Batteries'], price: '5.99', availability: 10 },
  { id: 12024, category: 'Batteries', name: 'AAA Batteries', description: 'Pack of AAA batteries', image: 'https://m.media-amazon.com/images/I/71EWTyn-hEL._AC_UL320_.jpg', identifiers: ['Batteries'], price: '5.99', availability: 10 },
  { id: 12025, category: 'Storage', name: 'Plastic Storage Bins', description: 'Set of storage bins', image: 'https://m.media-amazon.com/images/I/71UlaBWmOwL._AC_UL320_.jpg', identifiers: ['Storage'], price: '14.99', availability: 10 },
  { id: 12026, category: 'Storage', name: 'Vacuum Storage Bags', description: 'Space-saving storage bags', image: 'https://m.media-amazon.com/images/I/81zwgsKrnPL._AC_UL320_.jpg', identifiers: ['Storage'], price: '12.99', availability: 10 },
  { id: 12027, category: 'Storage', name: 'Under-Bed Storage', description: 'Under-bed storage containers', image: 'https://m.media-amazon.com/images/I/91fjiBShAkL._AC_UL320_.jpg', identifiers: ['Storage'], price: '10.99', availability: 10 },
  { id: 12028, category: 'Household Essentials', name: 'Aluminum Foil', description: 'Durable aluminum foil', image: 'https://m.media-amazon.com/images/I/61eGxmppqVL._AC_UL320_.jpg', identifiers: ['Household Essentials'], price: '2.99', availability: 10 },
  { id: 12029, category: 'Household Essentials', name: 'Plastic Wrap', description: 'Cling plastic wrap', image: 'https://m.media-amazon.com/images/I/71ISqzFOwML._AC_UL320_.jpg', identifiers: ['Household Essentials'], price: '2.99', availability: 10 },
  { id: 12030, category: 'Household Essentials', name: 'Sandwich Bags', description: 'Reusable sandwich bags', image: 'https://m.media-amazon.com/images/I/81Ii8dv4haL._AC_UL320_.jpg', identifiers: ['Household Essentials'], price: '3.99', availability: 10 },
];

const HouseholdProducts = ({ searchQuery, sortType }) => {
  const { sortedProducts } = useSortedProducts(householdProducts, searchQuery, sortType);

const householdProducts = [
  { category: 'Cleaning Supplies', name: 'All-Purpose Cleaner', description: 'Multipurpose cleaner', image: 'https://m.media-amazon.com/images/I/71xU56FcKiL._AC_UL320_.jpg', identifiers: ['Cleaning Supplies'], price: '3.99' },
  { category: 'Cleaning Supplies', name: 'Disinfectant Spray', description: 'Kills 99.9% of germs', image: 'https://m.media-amazon.com/images/I/81qfp6wD4YL._AC_UL320_.jpg', identifiers: ['Cleaning Supplies'], price: '14.99' },
  { category: 'Cleaning Supplies', name: 'Glass Cleaner', description: 'Streak-free shine', image: 'https://m.media-amazon.com/images/I/71+CsG1Y2RL._AC_UL320_.jpg', identifiers: ['Cleaning Supplies'], price: '2.99' },
  { category: 'Laundry', name: 'Laundry Detergent', description: 'Liquid laundry detergent', image: 'https://m.media-amazon.com/images/I/71YC69VHFBL._AC_UL320_.jpg', identifiers: ['Laundry'], price: '13.99' },
  { category: 'Laundry', name: 'Fabric Softener', description: 'Liquid fabric softener', image: 'https://m.media-amazon.com/images/I/81gBmOvz9DL._AC_UL320_.jpg', identifiers: ['Laundry'], price: '11.99' },
  { category: 'Laundry', name: 'Stain Remover', description: 'Removes tough stains', image: 'https://m.media-amazon.com/images/I/71g5IE9HWOL._AC_UL320_.jpg', identifiers: ['Laundry'], price: '3.99' },
  { category: 'Paper Goods', name: 'Paper Towels', description: 'Absorbent paper towels', image: 'https://m.media-amazon.com/images/I/81WQ2kVdyzL._AC_UL320_.jpg', identifiers: ['Paper Goods'], price: '4.99' },
  { category: 'Paper Goods', name: 'Toilet Paper', description: 'Soft and strong toilet paper', image: 'https://m.media-amazon.com/images/I/81nd7vEzWpL._AC_UL320_.jpg', identifiers: ['Paper Goods'], price: '7.99' },
  { category: 'Trash Bags', name: 'Kitchen Trash Bags', description: 'Durable kitchen trash bags', image: 'https://m.media-amazon.com/images/I/81T8s32YwgL._AC_UL320_.jpg', identifiers: ['Trash Bags'], price: '4.49' },
  { category: 'Trash Bags', name: 'Outdoor Trash Bags', description: 'Heavy-duty outdoor trash bags', image: 'https://m.media-amazon.com/images/I/71R9LKEkQVL._AC_UL320_.jpg', identifiers: ['Trash Bags'], price: '6.49' },
  { category: 'Cleaning Tools', name: 'Broom and Dustpan', description: 'Sweeping set', image: 'https://m.media-amazon.com/images/I/71Jzw4oNJcL._AC_UL320_.jpg', identifiers: ['Cleaning Tools'], price: '8.99' },
  { category: 'Cleaning Tools', name: 'Mop and Bucket', description: 'Floor cleaning set', image: 'https://m.media-amazon.com/images/I/71bh9E0aZWL._AC_UL320_.jpg', identifiers: ['Cleaning Tools'], price: '12.99' },
  { category: 'Cleaning Tools', name: 'Scrub Brush', description: 'Heavy-duty scrub brush', image: 'https://m.media-amazon.com/images/I/61lL36WhLsL._AC_UL320_.jpg', identifiers: ['Cleaning Tools'], price: '3.49' },
  { category: 'Air Fresheners', name: 'Air Freshener Spray', description: 'Eliminates odors', image: 'https://m.media-amazon.com/images/I/71IlUutBmIL._AC_UL320_.jpg', identifiers: ['Air Fresheners'], price: '4.99' },
  { category: 'Air Fresheners', name: 'Plug-in Air Freshener', description: 'Long-lasting fragrance', image: 'https://m.media-amazon.com/images/I/81bsWoFe5RL._AC_UL320_.jpg', identifiers: ['Air Fresheners'], price: '5.99' },
  { category: 'Dishwashing', name: 'Dish Soap', description: 'Liquid dish soap', image: 'https://m.media-amazon.com/images/I/71AstDZaFvL._AC_UL320_.jpg', identifiers: ['Dishwashing'], price: '2.49' },
  { category: 'Dishwashing', name: 'Dishwasher Detergent', description: 'Dishwasher pods', image: 'https://m.media-amazon.com/images/I/81lrKCj3V3L._AC_UL320_.jpg', identifiers: ['Dishwashing'], price: '8.99' },
  { category: 'Dishwashing', name: 'Dish Scrubber', description: 'Scrubber for dishes', image: 'https://m.media-amazon.com/images/I/61FwwwyuyML._AC_UL320_.jpg', identifiers: ['Dishwashing'], price: '3.99' },
  { category: 'Pest Control', name: 'Insect Repellent', description: 'Repels insects', image: 'https://m.media-amazon.com/images/I/61Uh7gT5XiL.__AC_SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Pest Control'], price: '6.99' },
  { category: 'Pest Control', name: 'Ant Traps', description: 'Ant control traps', image: 'https://m.media-amazon.com/images/I/81VZeCy2b8L._AC_UL320_.jpg', identifiers: ['Pest Control'], price: '4.99' },
  { category: 'Light Bulbs', name: 'LED Light Bulbs', description: 'Energy-efficient bulbs', image: 'https://m.media-amazon.com/images/I/51WsUiGJU3L._AC_UL320_.jpg', identifiers: ['Light Bulbs'], price: '9.99' },
  { category: 'Light Bulbs', name: 'CFL Light Bulbs', description: 'Compact fluorescent bulbs', image: 'https://m.media-amazon.com/images/I/61Sa363kcgL._AC_UL320_.jpg', identifiers: ['Light Bulbs'], price: '7.99' },
  { category: 'Batteries', name: 'AA Batteries', description: 'Pack of AA batteries', image: 'https://m.media-amazon.com/images/I/712VgtWexFL._AC_UL320_.jpg', identifiers: ['Batteries'], price: '5.99' },
  { category: 'Batteries', name: 'AAA Batteries', description: 'Pack of AAA batteries', image: 'https://m.media-amazon.com/images/I/71EWTyn-hEL._AC_UL320_.jpg', identifiers: ['Batteries'], price: '5.99' },
  { category: 'Storage', name: 'Plastic Storage Bins', description: 'Set of storage bins', image: 'https://m.media-amazon.com/images/I/71UlaBWmOwL._AC_UL320_.jpg', identifiers: ['Storage'], price: '14.99' },
  { category: 'Storage', name: 'Vacuum Storage Bags', description: 'Space-saving storage bags', image: 'https://m.media-amazon.com/images/I/81zwgsKrnPL._AC_UL320_.jpg', identifiers: ['Storage'], price: '12.99' },
  { category: 'Storage', name: 'Under-Bed Storage', description: 'Under-bed storage containers', image: 'https://m.media-amazon.com/images/I/91fjiBShAkL._AC_UL320_.jpg', identifiers: ['Storage'], price: '10.99' },
  { category: 'Household Essentials', name: 'Aluminum Foil', description: 'Durable aluminum foil', image: 'https://m.media-amazon.com/images/I/61eGxmppqVL._AC_UL320_.jpg', identifiers: ['Household Essentials'], price: '2.99' },
  { category: 'Household Essentials', name: 'Plastic Wrap', description: 'Cling plastic wrap', image: 'https://m.media-amazon.com/images/I/71ISqzFOwML._AC_UL320_.jpg', identifiers: ['Household Essentials'], price: '2.49' },
  { category: 'Household Essentials', name: 'Sandwich Bags', description: 'Reusable sandwich bags', image: 'https://m.media-amazon.com/images/I/81Ii8dv4haL._AC_UL320_.jpg', identifiers: ['Household Essentials'], price: '3.49' },
];

const sortedHouseholdProducts = householdProducts.sort((a, b) => a.category.localeCompare(b.category));

const HouseholdProducts = ({addToCart}) => {
  return (
   
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Household Products</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {sortedHouseholdProducts.map((product) => (
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
                <button className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm m-2" onClick={() => addToCart(product) }>Add to Cart</button>
                <div className="flex flex-col gap-1 ml-2">
                  {product.identifiers.map((identifier) => (
                    <div key={identifier} className="badge badge-outline">{identifier}</div>
                  ))}
                </div>
                {/* Price will be displayed later */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseholdProducts;