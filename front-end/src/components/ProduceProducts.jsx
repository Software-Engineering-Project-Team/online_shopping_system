import React from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';
import useSortedProducts from '../hooks/useSortedProducts';

export const produceProducts = [
  { id: 17001 , category: 'Fruits', name: 'Apple', description: 'Fresh and crisp apples', image: 'https://m.media-amazon.com/images/I/71PxRvQMaoL._AC_UL320_.jpg', identifiers: ['Fruits', 'Organic'], price: '1.99', availability: 10 },
  { id: 17002 , category: 'Fruits', name: 'Banana', description: 'Sweet and ripe bananas', image: 'https://m.media-amazon.com/images/I/61aLynLf2GL._AC_UL320_.jpg', identifiers: ['Fruits', 'Organic'], price: '0.99', availability: 10 },
  { id: 17003 , category: 'Vegetables', name: 'Carrot', description: 'Organic carrots', image: 'https://m.media-amazon.com/images/I/81mNjtcGUhL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '1.99', availability: 10 },
  { id: 17004 , category: 'Vegetables', name: 'Broccoli', description: 'Fresh broccoli florets', image: 'https://m.media-amazon.com/images/I/81okuNWBV5L._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '1.99', availability: 10 },
  { id: 17005 , category: 'Fruits', name: 'Orange', description: 'Juicy oranges', image: 'https://m.media-amazon.com/images/I/71ohLOFjl0L._AC_UL320_.jpg', identifiers: ['Fruits', 'Organic'], price: '1.99', availability: 10 },
  { id: 17006 , category: 'Vegetables', name: 'Spinach', description: 'Fresh organic spinach', image: 'https://m.media-amazon.com/images/I/61RvmCudEcL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '2.99', availability: 10 },
  { id: 17007 , category: 'Fruits', name: 'Strawberries', description: 'Sweet strawberries', image: 'https://m.media-amazon.com/images/I/8143FLAy6GL._AC_UL320_.jpg', identifiers: ['Fruits', 'Organic'], price: '3.99', availability: 10 },
  { id: 17008 , category: 'Vegetables', name: 'Tomatoes', description: 'Ripe tomatoes', image: 'https://m.media-amazon.com/images/I/81avkS31xRL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '2.99', availability: 10 },
  { id: 17009 , category: 'Fruits', name: 'Grapes', description: 'Juicy green grapes', image: 'https://m.media-amazon.com/images/I/81u0bnmfTdL._AC_UL320_.jpg', identifiers: ['Fruits', 'Organic'], price: '2.99', availability: 10 },
  { id: 17010 , category: 'Vegetables', name: 'Lettuce', description: 'Fresh romaine lettuce', image: 'https://m.media-amazon.com/images/I/51g0cEcytrL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '1.99', availability: 10 },
  { id: 17011 , category: 'Fruits', name: 'Blueberries', description: 'Fresh blueberries', image: 'https://m.media-amazon.com/images/I/81T6S7qRDsL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '4.99', availability: 10 },
  { id: 17012 , category: 'Vegetables', name: 'Bell Peppers', description: 'Organic mixed bell peppers', image: 'https://m.media-amazon.com/images/I/41GX6fP9t8L._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '3.99', availability: 10 },
  { id: 17013 , category: 'Fruits', name: 'Mango', description: 'Sweet and juicy mangoes', image: 'https://m.media-amazon.com/images/I/81quGLspRAL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '1.99', availability: 10 },
  { id: 17014 , category: 'Vegetables', name: 'Cucumber', description: 'Fresh cucumbers', image: 'https://m.media-amazon.com/images/I/71hxuisJhRL._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '0.99', availability: 10 },
  { id: 17015 , category: 'Fruits', name: 'Pineapple', description: 'Sweet and tangy pineapple', image: 'https://m.media-amazon.com/images/I/41u9Fj425WL._SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Fruits'], price: '2.99', availability: 10 },
  { id: 17016 , category: 'Vegetables', name: 'Zucchini', description: 'Organic zucchini', image: 'https://m.media-amazon.com/images/I/31bPNRjtLbS._SY300_SX300_QL70_FMwebp_.jpg', identifiers: ['Vegetables', 'Organic'], price: '1.99', availability: 10 },
  { id: 17017 , category: 'Fruits', name: 'Watermelon', description: 'Refreshing watermelon', image: 'https://m.media-amazon.com/images/I/51fAOYUQHlL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '5.99', availability: 10 },
  { id: 17018 , category: 'Vegetables', name: 'Kale', description: 'Fresh organic kale', image: 'https://m.media-amazon.com/images/I/61Av-PPnnUL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '2.99', availability: 10 },
  { id: 17019 , category: 'Fruits', name: 'Peach', description: 'Sweet and juicy peaches', image: 'https://m.media-amazon.com/images/I/811d00dE-AL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '2.99', availability: 10 },
  { id: 17020 , category: 'Vegetables', name: 'Gold Potato', description: 'Fresh potatoes', image: 'https://m.media-amazon.com/images/I/51EItxbkEyS._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '0.99', availability: 10 },
  { id: 17021 , category: 'Vegetables', name: 'Russet Potato', description: 'Fresh potatoes', image: 'https://m.media-amazon.com/images/I/71nYyftNNeL._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '0.99', availability: 10 },
  { id: 17022 , category: 'Fruits', name: 'Lemon', description: 'Fresh lemons', image: 'https://m.media-amazon.com/images/I/710O+MVcd6L._AC_UL320_.jpg', identifiers: ['Fruits'], price: '0.99', availability: 10 },
  { id: 17023 , category: 'Vegetables', name: 'Onion', description: 'Fresh onions', image: 'https://m.media-amazon.com/images/I/71785Jrt80L._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '0.99', availability: 10 },
  { id: 17024 , category: 'Fruits', name: 'Kiwi', description: 'Fresh kiwi', image: 'https://m.media-amazon.com/images/I/81gZRgXT50L._AC_UL320_.jpg', identifiers: ['Fruits'], price: '0.99', availability: 10 },
  { id: 17025 , category: 'Vegetables', name: 'Garlic', description: 'Fresh garlic', image: 'https://m.media-amazon.com/images/I/71KpWVcGo5L._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '3.99', availability: 10 },
  { id: 17026 , category: 'Fruits', name: 'Cherry', description: 'Fresh cherries', image: 'https://m.media-amazon.com/images/I/81HGBCKVClL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '3.99', availability: 10 },
  { id: 17027 , category: 'Vegetables', name: 'Mushrooms', description: 'Organic mushrooms', image: 'https://m.media-amazon.com/images/I/61oBk8h4jPL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '4.99', availability: 10 },
  { id: 17028 , category: 'Fruits', name: 'Raspberry', description: 'Fresh raspberries', image: 'https://m.media-amazon.com/images/I/71CJQWqAxFL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '4.99', availability: 10 },
  { id: 17029 , category: 'Vegetables', name: 'Asparagus', description: 'Fresh asparagus', image: 'https://m.media-amazon.com/images/I/71rpY2GtFHL._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '2.99', availability: 10 },
];

const ProduceProducts = ({ searchQuery, sortType }) => {
  const { sortedProducts } = useSortedProducts(produceProducts, searchQuery, sortType);


const produceProducts = [
  { category: 'Fruits', name: 'Apple', description: 'Fresh and crisp apples', image: 'https://m.media-amazon.com/images/I/71PxRvQMaoL._AC_UL320_.jpg', identifiers: ['Fruits', 'Organic'], price: '1.99 / lb' },
  { category: 'Fruits', name: 'Banana', description: 'Sweet and ripe bananas', image: 'https://m.media-amazon.com/images/I/61aLynLf2GL._AC_UL320_.jpg', identifiers: ['Fruits', 'Organic'], price: '0.59 / lb' },
  { category: 'Vegetables', name: 'Carrot', description: 'Organic carrots', image: 'https://m.media-amazon.com/images/I/81mNjtcGUhL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '1.29 / lb' },
  { category: 'Vegetables', name: 'Broccoli', description: 'Fresh broccoli florets', image: 'https://m.media-amazon.com/images/I/81okuNWBV5L._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '1.99 / lb' },
  { category: 'Fruits', name: 'Orange', description: 'Juicy oranges', image: 'https://m.media-amazon.com/images/I/71ohLOFjl0L._AC_UL320_.jpg', identifiers: ['Fruits', 'Organic'], price: '1.49 / lb' },
  { category: 'Vegetables', name: 'Spinach', description: 'Fresh organic spinach', image: 'https://m.media-amazon.com/images/I/61RvmCudEcL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '2.49 / lb' },
  { category: 'Fruits', name: 'Strawberries', description: 'Sweet strawberries', image: 'https://m.media-amazon.com/images/I/8143FLAy6GL._AC_UL320_.jpg', identifiers: ['Fruits', 'Organic'], price: '3.99 / lb' },
  { category: 'Vegetables', name: 'Tomatoes', description: 'Ripe tomatoes', image: 'https://m.media-amazon.com/images/I/81avkS31xRL._AC_UL320_.jpg', identifiers: ['Vegetables','Organic'], price: '2.99 / lb' },
  { category: 'Fruits', name: 'Grapes', description: 'Juicy green grapes', image: 'https://m.media-amazon.com/images/I/81u0bnmfTdL._AC_UL320_.jpg', identifiers: ['Fruits', 'Organic'], price: '2.99 / lb' },
  { category: 'Vegetables', name: 'Lettuce', description: 'Fresh romaine lettuce', image: 'https://m.media-amazon.com/images/I/51g0cEcytrL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '1.49 / head' },
  { category: 'Fruits', name: 'Blueberries', description: 'Fresh blueberries', image: 'https://m.media-amazon.com/images/I/81T6S7qRDsL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '4.99 / pint' },
  { category: 'Vegetables', name: 'Bell Peppers', description: 'Organic mixed bell peppers', image: 'https://m.media-amazon.com/images/I/41GX6fP9t8L._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '3.49 / lb' },
  { category: 'Fruits', name: 'Mango', description: 'Sweet and juicy mangoes', image: 'https://m.media-amazon.com/images/I/81quGLspRAL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '1.99 each' },
  { category: 'Vegetables', name: 'Cucumber', description: 'Fresh cucumbers', image: 'https://m.media-amazon.com/images/I/71hxuisJhRL._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '0.99 each' },
  { category: 'Fruits', name: 'Pineapple', description: 'Sweet and tangy pineapple', image: 'https://m.media-amazon.com/images/I/41u9Fj425WL._SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Fruits'], price: '2.99 each' },
  { category: 'Vegetables', name: 'Zucchini', description: 'Organic zucchini', image: 'https://m.media-amazon.com/images/I/31bPNRjtLbS._SY300_SX300_QL70_FMwebp_.jpg', identifiers: ['Vegetables', 'Organic'], price: '1.79 / lb' },
  { category: 'Fruits', name: 'Watermelon', description: 'Refreshing watermelon', image: 'https://m.media-amazon.com/images/I/51fAOYUQHlL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '5.99 each' },
  { category: 'Vegetables', name: 'Kale', description: 'Fresh organic kale', image: 'https://m.media-amazon.com/images/I/61Av-PPnnUL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '2.99 / bunch' },
  { category: 'Fruits', name: 'Peach', description: 'Sweet and juicy peaches', image: 'https://m.media-amazon.com/images/I/811d00dE-AL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '2.49 / lb' },
  { category: 'Vegetables', name: 'Gold Potato', description: 'Fresh potatoes', image: 'https://m.media-amazon.com/images/I/51EItxbkEyS._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '0.99 / lb' },
  { category: 'Vegetables', name: 'Russet Potato', description: 'Fresh potatoes', image: 'https://m.media-amazon.com/images/I/71nYyftNNeL._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '0.99 / lb' },
  { category: 'Fruits', name: 'Lemon', description: 'Fresh lemons', image: 'https://m.media-amazon.com/images/I/710O+MVcd6L._AC_UL320_.jpg', identifiers: ['Fruits'], price: '0.79 each' },
  { category: 'Vegetables', name: 'Onion', description: 'Fresh onions', image: 'https://m.media-amazon.com/images/I/71785Jrt80L._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '0.79 / lb' },
  { category: 'Fruits', name: 'Kiwi', description: 'Fresh kiwi', image: 'https://m.media-amazon.com/images/I/81gZRgXT50L._AC_UL320_.jpg', identifiers: ['Fruits'], price: '0.59 each' },
  { category: 'Vegetables', name: 'Garlic', description: 'Fresh garlic', image: 'https://m.media-amazon.com/images/I/71KpWVcGo5L._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '3.99 / lb' },
  { category: 'Fruits', name: 'Cherry', description: 'Fresh cherries', image: 'https://m.media-amazon.com/images/I/81HGBCKVClL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '3.99 / lb' },
  { category: 'Vegetables', name: 'Mushrooms', description: 'Organic mushrooms', image: 'https://m.media-amazon.com/images/I/61oBk8h4jPL._AC_UL320_.jpg', identifiers: ['Vegetables', 'Organic'], price: '4.99 / lb' },
  { category: 'Fruits', name: 'Raspberry', description: 'Fresh raspberries', image: 'https://m.media-amazon.com/images/I/71CJQWqAxFL._AC_UL320_.jpg', identifiers: ['Fruits'], price: '4.99 / pint' },
  { category: 'Vegetables', name: 'Asparagus', description: 'Fresh asparagus', image: 'https://m.media-amazon.com/images/I/71rpY2GtFHL._AC_UL320_.jpg', identifiers: ['Vegetables'], price: '2.99 / lb' },
];

const sortedProduceProducts = produceProducts.sort((a, b) => a.category.localeCompare(b.category));

const ProduceProducts = ({addToCart}) => {
  return (

    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Produce</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {sortedProduceProducts.map((product) => (
          <div key={product.name} className="card bg-base-100 w-72 shadow-xl">
            <figure className="h-48 flex items-center justify-center bg-white">
              <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
            </figure>
            <div className="card-body flex flex-col justify-between">
              <div>
                <h2 className="card-title mb-4">{product.name}</h2>
                <p>{product.description}</p>
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

export default ProduceProducts;