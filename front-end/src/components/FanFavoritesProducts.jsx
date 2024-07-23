import React from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';
import useSortedProducts from '../hooks/useSortedProducts';

export const fanFavoritesProducts = [
  { id: 9001, category: 'Bakery', name: 'Bagels', description: 'Fresh plain bagels', image: 'https://m.media-amazon.com/images/I/61txPuSO6ZL._AC_UL320_.jpg', identifiers: ['Bakery'], price: '3.99', availability: 10 },
  { id: 9002, category: 'Baking', name: 'All-Purpose Flour', description: 'Versatile all-purpose flour', image: 'https://m.media-amazon.com/images/I/5105pRDKoNL._AC_UL320_.jpg', identifiers: ['Baking'], price: '2.99', availability: 10 },
  { id: 9003, category: 'Baking', name: 'Sugar', description: 'Granulated white sugar', image: 'https://m.media-amazon.com/images/I/51KyGj22x1L._AC_UL320_.jpg', identifiers: ['Baking', 'Organic'], price: '1.99', availability: 10 },
  { id: 9004, category: 'Beverages', name: 'Orange Juice', description: 'Freshly squeezed orange juice', image: 'https://m.media-amazon.com/images/I/41MyDiMyd0L._SX342_SY445_.jpg', identifiers: ['Beverages'], price: '3.99', availability: 10 },
  { id: 9005, category: 'Beverages', name: 'Apple Juice', description: 'Fresh apple juice', image: 'https://m.media-amazon.com/images/I/71xfIbrGWfL._AC_UL320_.jpg', identifiers: ['Beverages'], price: '2.99', availability: 10 },
  { id: 9006, category: 'Breakfast', name: 'Honey Nut Cheerios', description: 'Honey nut flavored cereal', image: 'https://m.media-amazon.com/images/I/81Mk1b019qL._AC_UL320_.jpg', identifiers: ['Breakfast'], price: '3.99', availability: 10 },
  { id: 9007, category: 'Breakfast', name: 'Oatmeal', description: 'Instant oatmeal packets', image: 'https://m.media-amazon.com/images/I/91kuB88h5-L._AC_UL320_.jpg', identifiers: ['Breakfast'], price: '2.99', availability: 10 },
  { id: 9008, category: 'Dairy', name: 'Greek Yogurt', description: 'Delicious nonfat yogurt variety', image: 'https://m.media-amazon.com/images/I/51amh7oAziL.jpg', identifiers: ['Dairy'], price: '1.99', availability: 10 },
  { id: 9009, category: 'Dairy', name: 'Cheddar Cheese', description: 'Sharp cheddar cheese', image: 'https://m.media-amazon.com/images/I/71NSXJdzBlL._AC_UL320_.jpg', identifiers: ['Dairy'], price: '4.99', availability: 10 },
  { id: 9010, category: 'Dairy', name: 'Almond Milk', description: 'Organic almond milk', image: 'https://m.media-amazon.com/images/I/61bEf3MZuiL._SX679_.jpg', identifiers: ['Dairy'], price: '3.99', availability: 10 },
  { id: 9011, category: 'Frozen', name: 'Frozen Pizza', description: 'Pepperoni frozen pizza', image: 'https://m.media-amazon.com/images/I/91ubP-YuiDL._AC_UL320_.jpg', identifiers: ['Frozen'], price: '5.99', availability: 10 },
  { id: 9012, category: 'Frozen', name: 'Frozen Vegetables', description: 'Mixed frozen vegetables', image: 'https://m.media-amazon.com/images/I/61ZaXxXtcHL._AC_UL320_.jpg', identifiers: ['Frozen'], price: '2.99', availability: 10 },
  { id: 9013, category: 'Household', name: 'Laundry Detergent', description: 'Liquid laundry detergent', image: 'https://m.media-amazon.com/images/I/71YC69VHFBL._AC_UL320_.jpg', identifiers: ['Household'], price: '13.99', availability: 10 },
  { id: 9014, category: 'Household', name: 'Dish Soap', description: 'Liquid dish soap', image: 'https://m.media-amazon.com/images/I/71AstDZaFvL._AC_UL320_.jpg', identifiers: ['Household'], price: '2.99', availability: 10 },
  { id: 9015, category: 'Personal Care', name: 'Face Moisturizer', description: 'Hydrating face moisturizer', image: 'https://m.media-amazon.com/images/I/71J0BtuYB2L._AC_UL320_.jpg', identifiers: ['Personal Care'], price: '12.99', availability: 10 },
  { id: 9016, category: 'Personal Care', name: 'Shampoo', description: 'Revitalizing shampoo', image: 'https://m.media-amazon.com/images/I/71zGJY4WIZL._AC_UL320_.jpg', identifiers: ['Personal Care'], price: '15.99', availability: 10 },
  { id: 9017, category: 'Personal Care', name: 'Toothpaste', description: 'Whitening toothpaste', image: 'https://m.media-amazon.com/images/I/71Md-W5PL9L._AC_UL320_.jpg', identifiers: ['Personal Care'], price: '8.99', availability: 10 },
  { id: 9018, category: 'Pet', name: 'Dog Food', description: 'Nutritious dog food', image: 'https://m.media-amazon.com/images/I/71vhcBK2RvL._AC_UL320_.jpg', identifiers: ['Pet'], price: '29.99', availability: 10 },
  { id: 9019, category: 'Pet', name: 'Cat Food', description: 'Healthy cat food', image: 'https://m.media-amazon.com/images/I/71XQBaCqxYL._AC_UL320_.jpg', identifiers: ['Pet'], price: '24.99', availability: 10 },
  { id: 9020, category: 'Snacks', name: 'Potato Chips', description: 'Crispy salted potato chips', image: 'https://m.media-amazon.com/images/I/81tUUe3pIgS._AC_UL320_.jpg', identifiers: ['Snacks'], price: '2.99', availability: 10 },
  { id: 9021, category: 'Snacks', name: 'Granola Bars', description: 'Nut and oat granola bars', image: 'https://m.media-amazon.com/images/I/81zMG6BR8aL._AC_UL320_.jpg', identifiers: ['Snacks'], price: '4.99', availability: 10 },
  { id: 9022, category: 'Snacks', name: 'Chocolate Bar', description: 'Rich milk chocolate bar', image: 'https://m.media-amazon.com/images/I/411JURvNRCL._SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Snacks'], price: '1.99', availability: 10 },
];

const FanFavoritesProducts = ({ searchQuery, sortType }) => {
  const { sortedProducts } = useSortedProducts(fanFavoritesProducts, searchQuery, sortType);

const fanFavoritesProducts = [
  { category: 'Bakery', name: 'Bagels', description: 'Fresh plain bagels', image: 'https://m.media-amazon.com/images/I/61txPuSO6ZL._AC_UL320_.jpg', identifiers: ['Bakery'], price: '3.49' },
  { category: 'Baking', name: 'All-Purpose Flour', description: 'Versatile all-purpose flour', image: 'https://m.media-amazon.com/images/I/5105pRDKoNL._AC_UL320_.jpg', identifiers: ['Baking'], price: '2.99' },
  { category: 'Baking', name: 'Sugar', description: 'Granulated white sugar', image: 'https://m.media-amazon.com/images/I/51KyGj22x1L._AC_UL320_.jpg', identifiers: ['Baking', 'Organic'], price: '1.99' },
  { category: 'Beverages', name: 'Orange Juice', description: 'Freshly squeezed orange juice', image: 'https://m.media-amazon.com/images/I/41MyDiMyd0L._SX342_SY445_.jpg', identifiers: ['Beverages'], price: '3.49' },
  { category: 'Beverages', name: 'Apple Juice', description: 'Fresh apple juice', image: 'https://m.media-amazon.com/images/I/71xfIbrGWfL._AC_UL320_.jpg', identifiers: ['Beverages'], price: '2.99' },
  { category: 'Breakfast', name: 'Honey Nut Cheerios', description: 'Honey nut flavored cereal', image: 'https://m.media-amazon.com/images/I/81Mk1b019qL._AC_UL320_.jpg', identifiers: ['Breakfast'], price: '3.99' },
  { category: 'Breakfast', name: 'Oatmeal', description: 'Instant oatmeal packets', image: 'https://m.media-amazon.com/images/I/91kuB88h5-L._AC_UL320_.jpg', identifiers: ['Breakfast'], price: '2.99' },
  { category: 'Dairy', name: 'Greek Yogurt', description: 'Delicious nonfat yogurt variety', image: 'https://m.media-amazon.com/images/I/51amh7oAziL.jpg', identifiers: ['Dairy'], price: '1.99' },
  { category: 'Dairy', name: 'Cheddar Cheese', description: 'Sharp cheddar cheese', image: 'https://m.media-amazon.com/images/I/71NSXJdzBlL._AC_UL320_.jpg', identifiers: ['Dairy'], price: '4.99' },
  { category: 'Dairy', name: 'Almond Milk', description: 'Organic almond milk', image: 'https://m.media-amazon.com/images/I/61bEf3MZuiL._SX679_.jpg', identifiers: ['Dairy'], price: '3.49' },
  { category: 'Frozen', name: 'Frozen Pizza', description: 'Pepperoni frozen pizza', image: 'https://m.media-amazon.com/images/I/91ubP-YuiDL._AC_UL320_.jpg', identifiers: ['Frozen'], price: '5.99' },
  { category: 'Frozen', name: 'Frozen Vegetables', description: 'Mixed frozen vegetables', image: 'https://m.media-amazon.com/images/I/61ZaXxXtcHL._AC_UL320_.jpg', identifiers: ['Frozen'], price: '2.99' },
  { category: 'Household', name: 'Laundry Detergent', description: 'Liquid laundry detergent', image: 'https://m.media-amazon.com/images/I/71YC69VHFBL._AC_UL320_.jpg', identifiers: ['Household'], price: '13.99' },
  { category: 'Household', name: 'Dish Soap', description: 'Liquid dish soap', image: 'https://m.media-amazon.com/images/I/71AstDZaFvL._AC_UL320_.jpg', identifiers: ['Household'], price: '2.49' },
  { category: 'Personal Care', name: 'Face Moisturizer', description: 'Hydrating face moisturizer', image: 'https://m.media-amazon.com/images/I/71J0BtuYB2L._AC_UL320_.jpg', identifiers: ['Personal Care'], price: '12.99' },
  { category: 'Personal Care', name: 'Shampoo', description: 'Revitalizing shampoo', image: 'https://m.media-amazon.com/images/I/71zGJY4WIZL._AC_UL320_.jpg', identifiers: ['Personal Care'], price: '15.99' },
  { category: 'Personal Care', name: 'Toothpaste', description: 'Whitening toothpaste', image: 'https://m.media-amazon.com/images/I/71Md-W5PL9L._AC_UL320_.jpg', identifiers: ['Personal Care'], price: '8.99' },
  { category: 'Pet', name: 'Dog Food', description: 'Nutritious dog food', image: 'https://m.media-amazon.com/images/I/71vhcBK2RvL._AC_UL320_.jpg', identifiers: ['Pet'], price: '29.99' },
  { category: 'Pet', name: 'Cat Food', description: 'Healthy cat food', image: 'https://m.media-amazon.com/images/I/71XQBaCqxYL._AC_UL320_.jpg', identifiers: ['Pet'], price: '24.99' },
  { category: 'Snacks', name: 'Potato Chips', description: 'Crispy salted potato chips', image: 'https://m.media-amazon.com/images/I/81tUUe3pIgS._AC_UL320_.jpg', identifiers: ['Snacks'], price: '2.99' },
  { category: 'Snacks', name: 'Granola Bars', description: 'Nut and oat granola bars', image: 'https://m.media-amazon.com/images/I/81zMG6BR8aL._AC_UL320_.jpg', identifiers: ['Snacks'], price: '4.99' },
  { category: 'Snacks', name: 'Chocolate Bar', description: 'Rich milk chocolate bar', image: 'https://m.media-amazon.com/images/I/411JURvNRCL._SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Snacks'], price: '1.99' },
];

const sortedFanFavoritesProducts = fanFavoritesProducts.sort((a, b) => a.category.localeCompare(b.category));

const FanFavoritesProducts = ({addToCart}) => {
  return (

    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Fan Favorites</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {sortedFanFavoritesProducts.map((product) => (
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
                <button className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm m-2"onClick={() => addToCart(product)}>Add to Cart</button>
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
export default FanFavoritesProducts;