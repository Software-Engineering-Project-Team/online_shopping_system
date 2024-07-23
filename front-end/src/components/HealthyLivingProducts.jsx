import React from 'react';

const healthyLivingProducts = [
  { category: 'Snacks', name: 'Trail Mix', description: 'Healthy trail mix with nuts and dried fruits', image: 'https://m.media-amazon.com/images/I/81fUUbRBysL._AC_UL320_.jpg', identifiers: ['Snacks', 'Healthy'], price: '5.99' },
  { category: 'Snacks', name: 'Kale Chips', description: 'Crispy kale chips', image: 'https://m.media-amazon.com/images/I/81zCkqGlWZL._AC_UL320_.jpg', identifiers: ['Snacks', 'Healthy'], price: '4.99' },
  { category: 'Snacks', name: 'Rice Cakes', description: 'Light and crunchy rice cakes', image: 'https://m.media-amazon.com/images/I/51AVtlXx94L._AC_UL320_.jpg', identifiers: ['Snacks', 'Healthy'], price: '3.99' },
  { category: 'Snacks', name: 'Dried Fruit', description: 'Mixed dried fruits', image: 'https://m.media-amazon.com/images/I/71gDpAbWWEL._AC_UL320_.jpg', identifiers: ['Snacks', 'Healthy'], price: '6.99' },
  { category: 'Snacks', name: 'Protein Bars', description: 'High-protein bars', image: 'https://m.media-amazon.com/images/I/91pH964K1VL._AC_UL320_.jpg', identifiers: ['Snacks', 'Healthy'], price: '12.99' },
  { category: 'Beverages', name: 'Green Tea', description: 'Organic green tea bags', image: 'https://m.media-amazon.com/images/I/71QMuYu3YrL._AC_UL320_.jpg', identifiers: ['Beverages', 'Organic'], price: '4.99' },
  { category: 'Beverages', name: 'Coconut Water', description: 'Natural coconut water', image: 'https://m.media-amazon.com/images/I/81Gbei6WpXL._AC_UL320_.jpg', identifiers: ['Beverages', 'Healthy'], price: '2.99' },
  { category: 'Beverages', name: 'Almond Milk', description: 'Unsweetened almond milk', image: 'https://m.media-amazon.com/images/I/71+Z0E9pOtL._AC_UL320_.jpg', identifiers: ['Beverages', 'Organic'], price: '3.49' },
  { category: 'Beverages', name: 'Herbal Tea', description: 'Calming herbal tea', image: 'https://m.media-amazon.com/images/I/A1RYciJ8EsL._AC_UL320_.jpg', identifiers: ['Beverages', 'Healthy'], price: '5.99' },
  { category: 'Beverages', name: 'Detox Juice', description: 'Cold-pressed detox juice', image: 'https://m.media-amazon.com/images/I/71PRRXjH23L._AC_UL320_.jpg', identifiers: ['Beverages', 'Healthy'], price: '4.99' },
  { category: 'Pantry', name: 'Quinoa', description: 'Organic quinoa', image: 'https://m.media-amazon.com/images/I/81yXzWK7MOL._AC_UL320_.jpg', identifiers: ['Pantry', 'Organic'], price: '7.99' },
  { category: 'Pantry', name: 'Chia Seeds', description: 'Organic chia seeds', image: 'https://m.media-amazon.com/images/I/815BHykcasL._AC_UL320_.jpg', identifiers: ['Pantry', 'Organic'], price: '6.99' },
  { category: 'Pantry', name: 'Brown Rice', description: 'Whole grain brown rice', image: 'https://m.media-amazon.com/images/I/71dPEOMW09L._AC_UL320_.jpg', identifiers: ['Pantry', 'Organic'], price: '2.99' },
  { category: 'Pantry', name: 'Lentils', description: 'Organic lentils', image: 'https://m.media-amazon.com/images/I/51Y8XwY6BGL._AC_UL320_.jpg', identifiers: ['Pantry', 'Organic'], price: '3.99' },
  { category: 'Pantry', name: 'Oats', description: 'Rolled oats for breakfast', image: 'https://m.media-amazon.com/images/I/61+27eCZ34L._AC_UL320_.jpg', identifiers: ['Pantry', 'Organic'], price: '2.99' },
  { category: 'Pantry', name: 'Flax Seeds', description: 'Organic flax seeds', image: 'https://m.media-amazon.com/images/I/81NROljRDeL._AC_UL320_.jpg', identifiers: ['Pantry', 'Organic'], price: '4.99' },
  { category: 'Supplements', name: 'Multivitamins', description: 'Daily multivitamin supplement', image: 'https://m.media-amazon.com/images/I/71AJ8F0VHiL._AC_UL320_.jpg', identifiers: ['Supplements', 'Healthy'], price: '14.99' },
  { category: 'Supplements', name: 'Probiotics', description: 'Digestive health probiotics', image: 'https://m.media-amazon.com/images/I/71dBIt-qb7S._AC_UL320_.jpg', identifiers: ['Supplements', 'Healthy'], price: '19.99' },
  { category: 'Supplements', name: 'Omega-3', description: 'Fish oil omega-3 supplement', image: 'https://m.media-amazon.com/images/I/717t5kiyBHL._AC_UL320_.jpg', identifiers: ['Supplements', 'Healthy'], price: '12.99' },
  { category: 'Supplements', name: 'Vitamin D', description: 'Vitamin D supplement', image: 'https://m.media-amazon.com/images/I/61jqZAYzajL._AC_UL320_.jpg', identifiers: ['Supplements', 'Healthy'], price: '9.99' },
  { category: 'Personal Care', name: 'Organic Toothpaste', description: 'Fluoride-free organic toothpaste', image: 'https://m.media-amazon.com/images/I/81HL3Ypy6QS._AC_UL320_.jpg', identifiers: ['Personal Care', 'Organic'], price: '6.99' },
  { category: 'Personal Care', name: 'Natural Deodorant', description: 'Aluminum-free natural deodorant', image: 'https://m.media-amazon.com/images/I/81i3FlJcayL._AC_UL320_.jpg', identifiers: ['Personal Care', 'Healthy'], price: '7.99' },
  { category: 'Personal Care', name: 'Sulfate-Free Shampoo', description: 'Gentle sulfate-free shampoo', image: 'https://m.media-amazon.com/images/I/81NPZAy3MpL._AC_UL320_.jpg', identifiers: ['Personal Care', 'Healthy'], price: '8.99' },
  { category: 'Personal Care', name: 'Organic Cotton Swabs', description: 'Biodegradable cotton swabs', image: 'https://m.media-amazon.com/images/I/71pPetxSC-L._AC_UL320_.jpg', identifiers: ['Personal Care', 'Organic'], price: '3.49' },
  { category: 'Personal Care', name: 'Essential Oils', description: 'Pure essential oils set', image: 'https://m.media-amazon.com/images/I/711ra4RYE3L._AC_UL320_.jpg', identifiers: ['Personal Care', 'Healthy'], price: '19.99' },
  { category: 'Household', name: 'Eco-Friendly Cleaning Spray', description: 'Non-toxic cleaning spray', image: 'https://m.media-amazon.com/images/I/81HUTP4ZnXL._AC_UL320_.jpg', identifiers: ['Household', 'Healthy'], price: '4.99' },
  { category: 'Household', name: 'Reusable Food Wraps', description: 'Beeswax reusable food wraps', image: 'https://m.media-amazon.com/images/I/816mbJg3aLL._AC_UL320_.jpg', identifiers: ['Household', 'Healthy'], price: '12.99' },
  { category: 'Household', name: 'Glass Food Containers', description: 'Set of glass food storage containers', image: 'https://m.media-amazon.com/images/I/71JfqFSkZfL._AC_UL320_.jpg', identifiers: ['Household', 'Healthy'], price: '29.99' },
  { category: 'Household', name: 'Bamboo Toothbrushes', description: 'Eco-friendly bamboo toothbrushes', image: 'https://m.media-amazon.com/images/I/81aNL+Ufg3L._AC_UL320_.jpg', identifiers: ['Household', 'Healthy'], price: '9.99' },
  { category: 'Household', name: 'Stainless Steel Straws', description: 'Reusable stainless steel straws', image: 'https://m.media-amazon.com/images/I/71Giu+KgjYL._AC_UL320_.jpg', identifiers: ['Household', 'Healthy'], price: '8.99' },
  { category: 'Snacks', name: 'Organic Pureed Vegetables', description: 'Organic pureed vegetable baby food', image: 'https://m.media-amazon.com/images/I/91IGK7ftGML._AC_UL320_.jpg', identifiers: ['Snacks', 'Organic'], price: '3.99' },
  { category: 'Snacks', name: 'Organic Fruit Puree', description: 'Organic fruit puree baby food', image: 'https://m.media-amazon.com/images/I/91TXk9Y8CnL._AC_UL320_.jpg', identifiers: ['Snacks', 'Organic'], price: '3.99' },
  { category: 'Beverages', name: 'Organic Cranberry Juice', description: 'Tart cranberry juice', image: 'https://m.media-amazon.com/images/I/51N61sOxbhL._AC_UL320_.jpg', identifiers: ['Beverages', 'Organic'], price: '3.99' },
  { category: 'Pantry', name: 'Organic Olive Oil', description: 'Extra virgin olive oil', image: 'https://m.media-amazon.com/images/I/41bIns9Yc8L._AC_UL320_.jpg', identifiers: ['Pantry', 'Organic'], price: '7.99' },
  { category: 'Pantry', name: 'Organic Black Beans', description: 'Organic black beans', image: 'https://m.media-amazon.com/images/I/51ja0z3uYcL._AC_UL320_.jpg', identifiers: ['Pantry', 'Organic'], price: '1.29' },
  { category: 'Pantry', name: 'Organic Chickpeas', description: 'Organic chickpeas', image: 'https://m.media-amazon.com/images/I/511G+-az2dL._AC_UL320_.jpg', identifiers: ['Pantry', 'Organic'], price: '1.29' },
];

const sortedHealthyLivingProducts = healthyLivingProducts.sort((a, b) => a.category.localeCompare(b.category));

const HealthyLivingProducts = ({addToCart}) => {
  return (
    
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Healthy Living Products</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {sortedHealthyLivingProducts.map((product) => (
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
export default HealthyLivingProducts;