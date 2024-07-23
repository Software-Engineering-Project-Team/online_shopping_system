import React, { useState, useEffect } from 'react';
import bgHero from '../assets/bg-hero.png';
import Header from './Header';
import ProductCard from './ProductCard';
import useSortedProducts from '../hooks/useSortedProducts';


const dairyProducts = [
  { category: 'Milk', name: 'Lactaid', description: 'Lactose-free milk', image: 'https://m.media-amazon.com/images/I/41rxrbktenL._SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Milk'], price: ' 4.99' },
  { category: 'Cheese', name: 'American Cheese Slices', description: 'Kraft American Cheese Slices', image: 'https://m.media-amazon.com/images/I/81R0PQSod5L._SL1500_.jpg', identifiers: ['Cheese'], price: '3.99' },
  { category: 'Yogurt', name: 'Greek Yogurt', description: 'Delicious nonfat yogurt variety', image: 'https://m.media-amazon.com/images/I/51amh7oAziL.jpg', identifiers: ['Yogurt'], price: '1.99' },
  { category: 'Butter', name: 'Land O Lakes Butter', description: 'Creamy butter', image: 'https://m.media-amazon.com/images/I/416jHH8qcnL._SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Butter'], price: '5.99' },
  { category: 'Milk', name: 'Almond Milk', description: 'Organic vanilla almond milk', image: 'https://m.media-amazon.com/images/I/61bEf3MZuiL._SX679_.jpg', identifiers: ['Milk', 'Organic'], price: '3.49' },
  { category: 'Cheese', name: 'Cheddar Cheese Slices', description: 'Sharp Cheddar Cheese Slices', image: 'https://m.media-amazon.com/images/I/71NSXJdzBlL._AC_UL320_.jpg', identifiers: ['Cheese'], price: '4.99' },
  { category: 'Yogurt', name: 'Strawberry Greek Yogurt', description: 'Delicious nonfat yogurt', image: 'https://m.media-amazon.com/images/I/41OF53s98cL._SY300_SX300_QL70_FMwebp_.jpg', identifiers: ['Yogurt'], price: '1.99' },
  { category: 'Butter', name: 'Unsalted Butter', description: 'Organic unsalted butter', image: 'https://m.media-amazon.com/images/I/71ciCzgG+hL._SX679_.jpg', identifiers: ['Butter', 'Organic'], price: '6.99' },
  { category: 'Milk', name: 'Oat Milk', description: 'Organic oat milk', image: 'https://m.media-amazon.com/images/I/41Ec3dQgRZL._SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Milk', 'Organic'], price: '3.99' },
  { category: 'Cheese', name: 'Gouda Cheese', description: 'Smoked Gouda Cheese', image: 'https://m.media-amazon.com/images/I/41KZO03YcfL._SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Cheese'], price: '5.49' },
  { category: 'Yogurt', name: 'Blueberry Yogurt', description: 'Delicious nonfat yogurt', image: 'https://m.media-amazon.com/images/I/71IzwYiD+lL._AC_UL320_.jpg', identifiers: ['Yogurt'], price: '1.99' },
  { category: 'Butter', name: 'Salted Butter', description: 'Organic salted butter', image: 'https://m.media-amazon.com/images/I/71OW87f3QAL._AC_UL320_.jpg', identifiers: ['Butter', 'Organic'], price: '6.99' },
  { category: 'Milk', name: 'Soy Milk', description: 'Organic soy milk', image: 'https://m.media-amazon.com/images/I/41fk+N8AGyL._SY300_SX300_.jpg', identifiers: ['Milk', 'Organic'], price: '3.49' },
  { category: 'Cheese', name: 'Parmesan Cheese', description: 'Grated Parmesan Cheese', image: 'https://m.media-amazon.com/images/I/41KnlXepNOL._SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Cheese'], price: '4.99' },
  { category: 'Yogurt', name: 'Peach Yogurt', description: 'Delicious nonfat yogurt', image: 'https://m.media-amazon.com/images/I/71oin7A1Z-L._AC_UL320_.jpg', identifiers: ['Yogurt'], price: '1.99' },
  { category: 'Cream', name: 'Heavy Cream', description: 'Organic heavy cream', image: 'https://m.media-amazon.com/images/I/714xKFXboSL._AC_UL320_.jpg', identifiers: ['Cream', 'Organic'], price: '3.99' },
  { category: 'Cream', name: 'Whipped Cream', description: 'Original whipped cream', image: 'https://m.media-amazon.com/images/I/71bu57wKQnL._AC_UL320_.jpg', identifiers: ['Cream'], price: '2.99' },
  { category: 'Sour Cream', name: 'Sour Cream', description: 'Pure & Natural sour cream', image: 'https://m.media-amazon.com/images/I/719YrPJPGfL._AC_UL320_.jpg', identifiers: ['Cream'], price: '1.99' },
  { category: 'Cheese', name: 'Cottage Cheese', description: 'Organic cottage cheese', image: 'https://m.media-amazon.com/images/I/71WTtgID7ML._AC_UL320_.jpg', identifiers: ['Cheese', 'Organic'], price: '3.99' },
  { category: 'Cheese', name: 'Cream Cheese', description: 'Original cream cheese', image: 'https://m.media-amazon.com/images/I/71HMnE5+2iL._AC_UL320_.jpg', identifiers: ['Cream', 'Cheese'], price: '2.99' },
  { category: 'Milk', name: 'Half & Half', description: 'Perfect blend of milk and cream', image: 'https://m.media-amazon.com/images/I/415o1QeVQAL._SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Milk','Cream'], price: '2.99' },
  { category: 'Cheese', name: 'Shredded Cheddar Cheese', description: 'Finely shredded sharp cheddar cheese', image: 'https://m.media-amazon.com/images/I/81OYK-GKDiL._AC_UL320_.jpg', identifiers: ['Cheese', 'Shredded'], price: '3.99' },
  { category: 'Cheese', name: 'Shredded Mozzarella Cheese', description: 'Finely shredded mozzarella cheese', image: 'https://m.media-amazon.com/images/I/71aWHQl6OSL._AC_UL320_.jpg', identifiers: ['Cheese', 'Shredded'], price: '3.99' },
  { category: 'Cheese', name: 'Shredded Mexican Blend Cheese', description: 'Finely shredded Mexican blend cheese', image: 'https://m.media-amazon.com/images/I/81CXHqpirTL._AC_UL320_.jpg', identifiers: ['Cheese', 'Shredded'], price: '4.49' },
  { category: 'Cheese', name: 'Shredded Parmesan Cheese', description: 'Finely shredded Parmesan cheese', image: 'https://m.media-amazon.com/images/I/41aSs4dsddL._SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Cheese', 'Shredded'], price: '4.99' },
  { category: 'Eggs', name: 'Large Eggs', description: 'Grade A large eggs', image: 'https://m.media-amazon.com/images/I/31n+uh668KL._SY300_SX300_.jpg', identifiers: ['Eggs'], price: '2.99' },
  { category: 'Eggs', name: 'Organic Eggs', description: 'Grade A organic eggs', image: 'https://m.media-amazon.com/images/I/71M9C6KB7wL._AC_UL320_.jpg', identifiers: ['Eggs', 'Organic'], price: '3.99' },
  { category: 'Eggs', name: 'Brown Eggs', description: 'Grade A brown eggs', image: 'https://m.media-amazon.com/images/I/71e-6ghPv0L._SX679_.jpg', identifiers: ['Eggs'], price: '3.49' },
  { category: 'Eggs', name: 'Free-Range Eggs', description: 'Grade A free-range eggs', image: 'https://m.media-amazon.com/images/I/71-UxNsbGWL._AC_UL320_.jpg', identifiers: ['Eggs', 'Organic'], price: '4.49' },
  { category: 'Eggs', name: 'Extra Large Eggs', description: 'Grade A X-Large eggs', image: 'https://m.media-amazon.com/images/I/818fmz+2SRL._SX679_.jpg', identifiers: ['Eggs'], price: '3.99' },
];


export const newDairyProducts = [
  { id: 7031, category: 'Cheese', name: 'Cheese Assortment', description: 'Cheese block assortment', image: 'https://m.media-amazon.com/images/I/51Vz3kt14-L._SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Cheese'], price: '30.99', availability: 10 },
  { id: 7032, category: 'Milk', name: 'Almond Milk', description: 'Unsweetened almond milk', image: 'https://m.media-amazon.com/images/I/51SvtcjdUeL._AC_UL320_.jpg', identifiers: ['Milk'], price: '3.99', availability: 10 }
];

const DairyProducts = ({ setSearchQuery, searchQuery, sortType }) => {
  const { sortedProducts } = useSortedProducts(dairyProducts, searchQuery, sortType);

  useEffect(() => {
    setSearchQuery('');
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Dairy</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {sortedDairyProducts.map((product) => (
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
                <button className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm m-2" onClick={() => addToCart(product)}>Add to Cart</button>
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
export default DairyProducts;