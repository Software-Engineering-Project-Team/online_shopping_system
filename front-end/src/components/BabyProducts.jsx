import React from 'react';

const babyProducts = [
  { category: 'Diapers', name: 'Disposable Diapers', description: 'Comfortable disposable diapers', image: 'https://m.media-amazon.com/images/I/81W5nbUlrlL._AC_UL320_.jpg', identifiers: ['Diapers'], price: '19.99' },
  { category: 'Diapers', name: 'Cloth Diapers', description: 'Reusable cloth diapers', image: 'https://m.media-amazon.com/images/I/8107-AcT83L._AC_UL320_.jpg', identifiers: ['Diapers'], price: '24.99' },
  { category: 'Wipes', name: 'Baby Wipes', description: 'Soft and gentle baby wipes', image: 'https://m.media-amazon.com/images/I/51cDeB3qklL._AC_UL320_.jpg', identifiers: ['Wipes'], price: '5.99' },
  { category: 'Formula', name: 'Infant Formula', description: 'Nutritional infant formula', image: 'https://m.media-amazon.com/images/I/61stXruZhHL._AC_UL320_.jpg', identifiers: ['Formula'], price: '29.99' },
  { category: 'Formula', name: 'Organic Infant Formula', description: 'Organic nutritional infant formula', image: 'https://m.media-amazon.com/images/I/71xMtU3IA7L._AC_UL320_.jpg', identifiers: ['Formula', 'Organic'], price: '34.99' },
  { category: 'Baby Food', name: 'Pureed Vegetables', description: 'Organic pureed vegetable baby food', image: 'https://m.media-amazon.com/images/I/71nP-hrx8sL._AC_UL320_.jpg', identifiers: ['Baby Food', 'Organic'], price: '3.99' },
  { category: 'Baby Food', name: 'Fruit Puree', description: 'Organic fruit puree baby food', image: 'https://m.media-amazon.com/images/I/81exRFNzETL._AC_UL320_.jpg', identifiers: ['Baby Food', 'Organic'], price: '3.99' },
  { category: 'Baby Food', name: 'Cereal', description: 'Baby cereal with iron', image: 'https://m.media-amazon.com/images/I/61QpRaDeMbL._AC_UL320_.jpg', identifiers: ['Baby Food'], price: '2.99' },
  { category: 'Bath', name: 'Baby Shampoo', description: 'Tear-free baby shampoo', image: 'https://m.media-amazon.com/images/I/61IVm3hm2SL._AC_UL320_.jpg', identifiers: ['Bath'], price: '4.99' },
  { category: 'Bath', name: 'Baby Wash', description: 'Gentle baby wash', image: 'https://m.media-amazon.com/images/I/61zjYfKv9zL._AC_UL320_.jpg', identifiers: ['Bath'], price: '5.99' },
  { category: 'Bath', name: 'Baby Lotion', description: 'Moisturizing baby lotion', image: 'https://m.media-amazon.com/images/I/61JGsKO908L._AC_UL320_.jpg', identifiers: ['Bath'], price: '4.99' },
  { category: 'Clothing', name: 'Onesies', description: 'Soft cotton onesies', image: 'https://m.media-amazon.com/images/I/71rscjuvRkL._AC_UL320_.jpg', identifiers: ['Clothing'], price: '14.99' },
  { category: 'Clothing', name: 'Baby Socks', description: 'Warm and cozy baby socks', image: 'https://m.media-amazon.com/images/I/71pD7f2Sz7L._AC_UL320_.jpg', identifiers: ['Clothing'], price: '6.99' },
  { category: 'Clothing', name: 'Baby Hats', description: 'Cute baby hats', image: 'https://m.media-amazon.com/images/I/71I0ubZQYGL._AC_UL320_.jpg', identifiers: ['Clothing'], price: '9.99' },
  { category: 'Accessories', name: 'Pacifiers', description: 'Soothing baby pacifiers', image: 'https://m.media-amazon.com/images/I/71sjx7V+dAL._AC_UL320_.jpg', identifiers: ['Accessories'], price: '4.99' },
  { category: 'Accessories', name: 'Baby Bottles', description: 'Anti-colic baby bottles', image: 'https://m.media-amazon.com/images/I/716Er5kxtkS._AC_UL320_.jpg', identifiers: ['Accessories'], price: '11.99' },
  { category: 'Accessories', name: 'Teethers', description: 'Safe and soothing baby teethers', image: 'https://m.media-amazon.com/images/I/71HR1CNMdpL._AC_UL320_.jpg', identifiers: ['Accessories'], price: '7.99' },
  { category: 'Accessories', name: 'Baby Blankets', description: 'Soft baby blankets', image: 'https://m.media-amazon.com/images/I/81wHo0Cef3L._AC_UL320_.jpg', identifiers: ['Accessories'], price: '19.99' },
  { category: 'Health', name: 'Thermometer', description: 'Digital baby thermometer', image: 'https://m.media-amazon.com/images/I/61ac6gzzqML._AC_UL320_.jpg', identifiers: ['Health'], price: '9.99' },
  { category: 'Health', name: 'Nasal Aspirator', description: 'Baby nasal aspirator', image: 'https://m.media-amazon.com/images/I/61OyTXUVVcL._AC_UL320_.jpg', identifiers: ['Health'], price: '6.99' },
  { category: 'Health', name: 'Baby Monitor', description: 'Digital baby monitor', image: 'https://m.media-amazon.com/images/I/61QEntSevyL._AC_UL320_.jpg', identifiers: ['Health'], price: '49.99' },
  { category: 'Toys', name: 'Stuffed Animals', description: 'Soft and cuddly stuffed animals', image: 'https://m.media-amazon.com/images/I/712nuGYshBL._AC_UL320_.jpg', identifiers: ['Toys'], price: '12.99' },
  { category: 'Toys', name: 'Rattles', description: 'Colorful baby rattles', image: 'https://m.media-amazon.com/images/I/71T-bHkhcDL._AC_UL320_.jpg', identifiers: ['Toys'], price: '6.99' },
  { category: 'Toys', name: 'Activity Gym', description: 'Interactive baby activity gym', image: 'https://m.media-amazon.com/images/I/71TxEvS1TpL._AC_UL320_.jpg', identifiers: ['Toys'], price: '39.99' },
  { category: 'Safety', name: 'Outlet Covers', description: 'Babyproof outlet covers', image: 'https://m.media-amazon.com/images/I/71jEywC3IGL._AC_UL320_.jpg', identifiers: ['Safety'], price: '5.99' },
  { category: 'Safety', name: 'Cabinet Locks', description: 'Child safety cabinet locks', image: 'https://m.media-amazon.com/images/I/71ZczEw6opL._AC_UL320_.jpg', identifiers: ['Safety'], price: '8.99' },
  { category: 'Furniture', name: 'Crib', description: 'Sturdy baby crib', image: 'https://m.media-amazon.com/images/I/81j89Cnc4rL._AC_UL320_.jpg', identifiers: ['Furniture'], price: '149.99' },
  { category: 'Furniture', name: 'High Chair', description: 'Adjustable baby high chair', image: 'https://m.media-amazon.com/images/I/61b0cpfILEL._AC_UL320_.jpg', identifiers: ['Furniture'], price: '99.99' },
];

const sortedBabyProducts = babyProducts.sort((a, b) => a.category.localeCompare(b.category));

const BabyProducts = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Baby Products</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {sortedBabyProducts.map((product) => (
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
                <button className="btn btn-xs sm:btn-sm md:btn-sm lg:btn-sm m-2">Add to Cart</button>
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

export default BabyProducts;