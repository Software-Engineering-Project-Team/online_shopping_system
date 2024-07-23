import React from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';
import useSortedProducts from '../hooks/useSortedProducts';

export const snacksProducts = [
  { id: 19001, category: 'Chips', name: 'Potato Chips', description: 'Crispy salted potato chips', image: 'https://m.media-amazon.com/images/I/81tUUe3pIgS._AC_UL320_.jpg', identifiers: ['Chips'], price: '2.99', availability: 10 },
  { id: 19002, category: 'Chips', name: 'Tortilla Chips', description: 'Crunchy tortilla chips', image: 'https://m.media-amazon.com/images/I/6160Wl1+YRL._AC_UL320_.jpg', identifiers: ['Chips'], price: '3.99', availability: 10 },
  { id: 19003, category: 'Chips', name: 'Veggie Chips', description: 'Healthy vegetable chips', image: 'https://m.media-amazon.com/images/I/71WdqKrmlSL._AC_UL320_.jpg', identifiers: ['Chips'], price: '4.99', availability: 10 },
  { id: 19004, category: 'Candy', name: 'Chocolate Bar', description: 'Rich milk chocolate bar', image: 'https://m.media-amazon.com/images/I/411JURvNRCL._SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Candy'], price: '1.99', availability: 10 },
  { id: 19005, category: 'Candy', name: 'Gummy Bears', description: 'Sweet and chewy gummy bears', image: 'https://m.media-amazon.com/images/I/815GzyF5RnL._AC_UL320_.jpg', identifiers: ['Candy'], price: '1.99', availability: 10 },
  { id: 19006, category: 'Candy', name: 'Lollipop', description: 'Colorful fruit-flavored lollipops', image: 'https://m.media-amazon.com/images/I/71iecck5a7L._SX679_.jpg', identifiers: ['Candy'], price: '3.99', availability: 10 },
  { id: 19007, category: 'Nuts', name: 'Almonds', description: 'Roasted salted almonds', image: 'https://m.media-amazon.com/images/I/718pqLI-lRS._AC_UL320_.jpg', identifiers: ['Nuts'], price: '5.99', availability: 10 },
  { id: 19008, category: 'Nuts', name: 'Cashews', description: 'Salted roasted cashews', image: 'https://m.media-amazon.com/images/I/71xr8L41xcS._AC_UL320_.jpg', identifiers: ['Nuts'], price: '6.99', availability: 10 },
  { id: 19009, category: 'Nuts', name: 'Peanuts', description: 'Salted roasted peanuts', image: 'https://m.media-amazon.com/images/I/71SuHOhV55L._AC_UL320_.jpg', identifiers: ['Nuts'], price: '3.99', availability: 10 },
  { id: 19010, category: 'Crackers', name: 'Cheese Crackers', description: 'Cheddar cheese flavored crackers', image: 'https://m.media-amazon.com/images/I/816ERdo9fPL._AC_UL320_.jpg', identifiers: ['Crackers'], price: '3.99', availability: 10 },
  { id: 19011, category: 'Crackers', name: 'Saltine Crackers', description: 'Crispy saltine crackers', image: 'https://m.media-amazon.com/images/I/81SDrHhy18L._AC_UL320_.jpg', identifiers: ['Crackers'], price: '2.99', availability: 10 },
  { id: 19012, category: 'Crackers', name: 'Graham Crackers', description: 'Sweet honey graham crackers', image: 'https://m.media-amazon.com/images/I/81uuzlWpAFL._AC_UL320_.jpg', identifiers: ['Crackers'], price: '3.99', availability: 10 },
  { id: 19013, category: 'Bars', name: 'Granola Bars', description: 'Healthy granola bar variety', image: 'https://m.media-amazon.com/images/I/81zMG6BR8aL._AC_UL320_.jpg', identifiers: ['Bars'], price: '12.99', availability: 10 },
  { id: 19014, category: 'Bars', name: 'Protein Bar', description: 'High-protein bar', image: 'https://m.media-amazon.com/images/I/81ZT5n791OL._AC_UL320_.jpg', identifiers: ['Bars'], price: '12.99', availability: 10 },
  { id: 19015, category: 'Bars', name: 'Fruit Bar', description: 'Fruit and nut bar', image: 'https://m.media-amazon.com/images/I/51Rn6OgCsnL._AC_UL320_.jpg', identifiers: ['Bars'], price: '12.99', availability: 10 },
  { id: 19016, category: 'Popcorn', name: 'Butter Popcorn', description: 'Buttery microwave popcorn', image: 'https://m.media-amazon.com/images/I/81-Iu7Nd37L._AC_UL320_.jpg', identifiers: ['Popcorn'], price: '12.99', availability: 10 },
  { id: 19017, category: 'Popcorn', name: 'Cheese Popcorn', description: 'White Cheddar popcorn', image: 'https://m.media-amazon.com/images/I/8137T1-T7mL._AC_UL320_.jpg', identifiers: ['Popcorn'], price: '3.99', availability: 10 },
  { id: 19018, category: 'Popcorn', name: 'Caramel Popcorn', description: 'Sweet caramel popcorn', image: 'https://m.media-amazon.com/images/I/81Hp0YStZbL._AC_UL320_.jpg', identifiers: ['Popcorn'], price: '7.99', availability: 10 },
  { id: 19019, category: 'Jerky', name: 'Beef Jerky', description: 'Savory beef jerky', image: 'https://m.media-amazon.com/images/I/81PMYTxuoJL._AC_UL320_.jpg', identifiers: ['Jerky'], price: '6.99', availability: 10 },
  { id: 19020, category: 'Jerky', name: 'Turkey Jerky', description: 'Smoked turkey jerky', image: 'https://m.media-amazon.com/images/I/71QhLBrGt5L._AC_UL320_.jpg', identifiers: ['Jerky'], price: '6.99', availability: 10 },
  { id: 19021, category: 'Jerky', name: 'Chicken Jerky', description: 'Spicy chicken jerky', image: 'https://m.media-amazon.com/images/I/81UnpWzTpTL._SX679_.jpg', identifiers: ['Jerky'], price: '6.99', availability: 10 },
  { id: 19022, category: 'Dried Fruit', name: 'Dried Apricots', description: 'Sweet dried apricots', image: 'https://m.media-amazon.com/images/I/51RGBAYWPLL._AC_UL320_.jpg', identifiers: ['Dried Fruit'], price: '5.99', availability: 10 },
  { id: 19023, category: 'Dried Fruit', name: 'Dried Mango', description: 'Tangy dried mango slices', image: 'https://m.media-amazon.com/images/I/81UyakX9szL._AC_UL320_.jpg', identifiers: ['Dried Fruit'], price: '6.99', availability: 10 },
  { id: 19024, category: 'Dried Fruit', name: 'Dried Cranberries', description: 'Tart dried cranberries', image: 'https://m.media-amazon.com/images/I/81AvC6PYgEL._AC_UL320_.jpg', identifiers: ['Dried Fruit'], price: '4.99', availability: 10 },
  { id: 19025, category: 'Trail Mix', name: 'Classic Trail Mix', description: 'Mix of nuts, dried fruit, and chocolate', image: 'https://m.media-amazon.com/images/I/81fUUbRBysL._AC_UL320_.jpg', identifiers: ['Trail Mix'], price: '7.99', availability: 10 },
  { id: 19026, category: 'Trail Mix', name: 'Tropical Trail Mix', description: 'Mix of nuts, dried fruit, and coconut', image: 'https://m.media-amazon.com/images/I/817ZHoAsTcL._AC_UL320_.jpg', identifiers: ['Trail Mix'], price: '8.99', availability: 10 },
  { id: 19027, category: 'Trail Mix', name: 'Spicy Trail Mix', description: 'Spicy nuts and dried fruit mix', image: 'https://m.media-amazon.com/images/I/81AtLkmw+nL._AC_UL320_.jpg', identifiers: ['Trail Mix'], price: '7.99', availability: 10 },
];

const SnacksProducts = ({ searchQuery, sortType }) => {
  const { sortedProducts } = useSortedProducts(snacksProducts, searchQuery, sortType);


const snacksProducts = [
  { category: 'Chips', name: 'Potato Chips', description: 'Crispy salted potato chips', image: 'https://m.media-amazon.com/images/I/81tUUe3pIgS._AC_UL320_.jpg', identifiers: ['Chips'], price: '2.99' },
  { category: 'Chips', name: 'Tortilla Chips', description: 'Crunchy tortilla chips', image: 'https://m.media-amazon.com/images/I/6160Wl1+YRL._AC_UL320_.jpg', identifiers: ['Chips'], price: '3.49' },
  { category: 'Chips', name: 'Veggie Chips', description: 'Healthy vegetable chips', image: 'https://m.media-amazon.com/images/I/71WdqKrmlSL._AC_UL320_.jpg', identifiers: ['Chips'], price: '4.49' },
  { category: 'Candy', name: 'Chocolate Bar', description: 'Rich milk chocolate bar', image: 'https://m.media-amazon.com/images/I/411JURvNRCL._SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Candy'], price: '1.99' },
  { category: 'Candy', name: 'Gummy Bears', description: 'Sweet and chewy gummy bears', image: 'https://m.media-amazon.com/images/I/815GzyF5RnL._AC_UL320_.jpg', identifiers: ['Candy'], price: '1.49' },
  { category: 'Candy', name: 'Lollipop', description: 'Colorful fruit-flavored lollipops', image: 'https://m.media-amazon.com/images/I/71iecck5a7L._SX679_.jpg', identifiers: ['Candy'], price: '3.99' },
  { category: 'Nuts', name: 'Almonds', description: 'Roasted salted almonds', image: 'https://m.media-amazon.com/images/I/718pqLI-lRS._AC_UL320_.jpg', identifiers: ['Nuts'], price: '5.99' },
  { category: 'Nuts', name: 'Cashews', description: 'salted roasted cashews', image: 'https://m.media-amazon.com/images/I/71xr8L41xcS._AC_UL320_.jpg', identifiers: ['Nuts'], price: '6.99' },
  { category: 'Nuts', name: 'Peanuts', description: 'salted roasted peanuts', image: 'https://m.media-amazon.com/images/I/71SuHOhV55L._AC_UL320_.jpg', identifiers: ['Nuts'], price: '3.99' },
  { category: 'Crackers', name: 'Cheese Crackers', description: 'Cheddar cheese flavored crackers', image: 'https://m.media-amazon.com/images/I/816ERdo9fPL._AC_UL320_.jpg', identifiers: ['Crackers'], price: '3.49' },
  { category: 'Crackers', name: 'Saltine Crackers', description: 'Crispy saltine crackers', image: 'https://m.media-amazon.com/images/I/81SDrHhy18L._AC_UL320_.jpg', identifiers: ['Crackers'], price: '2.99' },
  { category: 'Crackers', name: 'Graham Crackers', description: 'Sweet honey graham crackers', image: 'https://m.media-amazon.com/images/I/81uuzlWpAFL._AC_UL320_.jpg', identifiers: ['Crackers'], price: '3.99' },
  { category: 'Bars', name: 'Granola Bars', description: 'Healthy granola bar variety', image: 'https://m.media-amazon.com/images/I/81zMG6BR8aL._AC_UL320_.jpg', identifiers: ['Bars'], price: '12.49' },
  { category: 'Bars', name: 'Protein Bar', description: 'High-protein bar', image: 'https://m.media-amazon.com/images/I/81ZT5n791OL._AC_UL320_.jpg', identifiers: ['Bars'], price: '12.49' },
  { category: 'Bars', name: 'Fruit Bar', description: 'Fruit and nut bar', image: 'https://m.media-amazon.com/images/I/51Rn6OgCsnL._AC_UL320_.jpg', identifiers: ['Bars'], price: '12.99' },
  { category: 'Popcorn', name: 'Butter Popcorn', description: 'Buttery microwave popcorn', image: 'https://m.media-amazon.com/images/I/81-Iu7Nd37L._AC_UL320_.jpg', identifiers: ['Popcorn'], price: '12.99' },
  { category: 'Popcorn', name: 'Cheese Popcorn', description: 'White Cheddar popcorn', image: 'https://m.media-amazon.com/images/I/8137T1-T7mL._AC_UL320_.jpg', identifiers: ['Popcorn'], price: '3.49' },
  { category: 'Popcorn', name: 'Caramel Popcorn', description: 'Sweet caramel popcorn', image: 'https://m.media-amazon.com/images/I/81Hp0YStZbL._AC_UL320_.jpg', identifiers: ['Popcorn'], price: '7.99' },
  { category: 'Jerky', name: 'Beef Jerky', description: 'Savory beef jerky', image: 'https://m.media-amazon.com/images/I/81PMYTxuoJL._AC_UL320_.jpg', identifiers: ['Jerky'], price: '6.99' },
  { category: 'Jerky', name: 'Turkey Jerky', description: 'Smoked turkey jerky', image: 'https://m.media-amazon.com/images/I/71QhLBrGt5L._AC_UL320_.jpg', identifiers: ['Jerky'], price: '6.99' },
  { category: 'Jerky', name: 'Chicken Jerky', description: 'Spicy chicken jerky', image: 'https://m.media-amazon.com/images/I/81UnpWzTpTL._SX679_.jpg', identifiers: ['Jerky'], price: '6.99' },
  { category: 'Dried Fruit', name: 'Dried Apricots', description: 'Sweet dried apricots', image: 'https://m.media-amazon.com/images/I/51RGBAYWPLL._AC_UL320_.jpg', identifiers: ['Dried Fruit'], price: '5.99' },
  { category: 'Dried Fruit', name: 'Dried Mango', description: 'Tangy dried mango slices', image: 'https://m.media-amazon.com/images/I/81UyakX9szL._AC_UL320_.jpg', identifiers: ['Dried Fruit'], price: '6.49' },
  { category: 'Dried Fruit', name: 'Dried Cranberries', description: 'Tart dried cranberries', image: 'https://m.media-amazon.com/images/I/81AvC6PYgEL._AC_UL320_.jpg', identifiers: ['Dried Fruit'], price: '4.99' },
  { category: 'Trail Mix', name: 'Classic Trail Mix', description: 'Mix of nuts, dried fruit, and chocolate', image: 'https://m.media-amazon.com/images/I/81fUUbRBysL._AC_UL320_.jpg', identifiers: ['Trail Mix'], price: '7.99' },
  { category: 'Trail Mix', name: 'Tropical Trail Mix', description: 'Mix of nuts, dried fruit, and coconut', image: 'https://m.media-amazon.com/images/I/817ZHoAsTcL._AC_UL320_.jpg', identifiers: ['Trail Mix'], price: '8.49' },
  { category: 'Trail Mix', name: 'Spicy Trail Mix', description: 'Spicy nuts and dried fruit mix', image: 'https://m.media-amazon.com/images/I/81AtLkmw+nL._AC_UL320_.jpg', identifiers: ['Trail Mix'], price: '7.99' },
];

const sortedSnacksProducts = snacksProducts.sort((a, b) => a.category.localeCompare(b.category));

const SnacksProducts = ({addToCart}) => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Snacks</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {sortedSnacksProducts.map((product) => (
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
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default SnacksProducts;