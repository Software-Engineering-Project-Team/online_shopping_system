import React from 'react';

const meatProducts = [
  { category: 'Fresh Meat', name: 'Chicken Breast', description: 'Boneless, skinless chicken breast', image: 'https://m.media-amazon.com/images/I/81XBEnBV+QL._AC_UL320_.jpg', identifiers: ['Fresh'], price: '$3.99' },
  { category: 'Fresh Meat', name: 'Ground Beef 85/15', description: 'Fresh ground beef', image: 'https://m.media-amazon.com/images/I/81mN1+XzldL._AC_UL320_.jpg', identifiers: ['Fresh'], price: '$5.99' },
  { category: 'Fresh Meat', name: 'Ground Beef 90/10', description: 'Fresh ground beef', image: 'https://m.media-amazon.com/images/I/81AZdusR0VL._AC_UL320_.jpg', identifiers: ['Fresh'], price: '$6.99' },
  { category: 'Fresh Meat', name: 'Pork Chops', description: 'Center-cut pork chops', image: 'https://m.media-amazon.com/images/I/51gT2q1iIfL._AC_UL320_.jpg', identifiers: ['Fresh'], price: '$4.99' },
  { category: 'Fresh Meat', name: 'Lamb Chops', description: 'Tender lamb chops', image: 'https://m.media-amazon.com/images/I/61aAw6dh0sL._AC_UL320_.jpg', identifiers: ['Fresh'], price: '$9.99' },
  { category: 'Frozen Meat', name: 'Frozen Chicken Wings', description: 'Frozen chicken wings', image: 'https://m.media-amazon.com/images/I/81dcLlZUcoL._AC_UL320_.jpg', identifiers: ['Frozen'], price: '$4.99' },
  { category: 'Frozen Meat', name: 'Frozen Beef Patties', description: 'Frozen beef patties', image: 'https://m.media-amazon.com/images/I/81AUOIswNoL._AC_UL320_.jpg', identifiers: ['Frozen'], price: '$3.99' },
  { category: 'Frozen Meat', name: 'Frozen Pork Ribs', description: 'Frozen pork ribs', image: 'https://m.media-amazon.com/images/I/61lYExVKpIL._AC_UL320_.jpg', identifiers: ['Frozen'], price: '$4.99' },
  { category: 'Seafood', name: 'Salmon Fillets', description: 'Fresh salmon fillets', image: 'https://m.media-amazon.com/images/I/51l3V5KgNWL._AC_UL320_.jpg', identifiers: ['Fresh', 'Seafood'], price: '$9.99' },
  { category: 'Seafood', name: 'Shrimp', description: 'Fresh shrimp', image: 'https://m.media-amazon.com/images/I/61LWUClUFUL._AC_UL320_.jpg', identifiers: ['Fresh', 'Seafood'], price: '$12.99' },
  { category: 'Seafood', name: 'Frozen Tilapia', description: 'Frozen tilapia fillets', image: 'https://m.media-amazon.com/images/I/51drSsFPY6L._AC_UL320_.jpg', identifiers: ['Frozen', 'Seafood'], price: '$5.99' },
  { category: 'Seafood', name: 'Frozen Scallops', description: 'Frozen scallops', image: 'https://m.media-amazon.com/images/I/61Bfnr3nEML._AC_UL320_.jpg', identifiers: ['Frozen', 'Seafood'], price: '$14.99' },
  { category: 'Fresh Meat', name: 'Ribeye Steak', description: 'Juicy ribeye steak', image: 'https://m.media-amazon.com/images/I/31L7TDGnPaL._SX300_SY300_QL70_FMwebp_.jpg', identifiers: ['Fresh'], price: '$15.99' },
  { category: 'Fresh Meat', name: 'Turkey Breast', description: 'Fresh turkey breast', image: 'https://m.media-amazon.com/images/I/51OggI8M1BL._AC_UL320_.jpg', identifiers: ['Fresh'], price: '$6.99' },
  { category: 'Frozen Meat', name: 'Frozen Meatballs', description: 'Frozen beef meatballs', image: 'https://m.media-amazon.com/images/I/51uoPo8QzZL._AC_UL320_.jpg', identifiers: ['Frozen'], price: '$5.99' },
  { category: 'Frozen Meat', name: 'Frozen Turkey Burgers', description: 'Frozen turkey burgers', image: 'https://m.media-amazon.com/images/I/71beJ6gz0zL._AC_UL320_.jpg', identifiers: ['Frozen', 'Organic'], price: '$7.99' },
  { category: 'Seafood', name: 'Fresh Cod', description: 'Fresh cod fillets', image: 'https://m.media-amazon.com/images/I/51S13-rgY-L._AC_UL320_.jpg', identifiers: ['Fresh', 'Seafood'], price: '$8.99' },
  { category: 'Seafood', name: 'Frozen Crab', description: 'Frozen crab legs & claws', image: 'https://m.media-amazon.com/images/I/71E1SPlBU9S._AC_UL320_.jpg', identifiers: ['Frozen', 'Seafood'], price: '$19.99' },
  { category: 'Fresh Meat', name: 'Duck Breast', description: 'Fresh duck breast', image: 'https://m.media-amazon.com/images/I/71P9NRlTBkL._AC_UL320_.jpg', identifiers: ['Fresh'], price: '$10.99' },
  { category: 'Frozen Meat', name: 'Frozen Sausages', description: 'Frozen sausages', image: 'https://m.media-amazon.com/images/I/818h-FBJ-IL._AC_UL320_.jpg', identifiers: ['Frozen'], price: '$4.99' },
  { category: 'Seafood', name: 'Frozen Mussels', description: 'Frozen cooked mussel meat', image: 'https://m.media-amazon.com/images/I/61mxhdygV0L._SX679_.jpg', identifiers: ['Frozen', 'Seafood'], price: '$6.99' },
  { category: 'Frozen Meat', name: 'Frozen Lamb Shanks', description: 'Frozen lamb shanks', image: 'https://m.media-amazon.com/images/I/418b8rhftnL._SY300_SX300_QL70_FMwebp_.jpg', identifiers: ['Frozen'], price: '$7.99' },
  { category: 'Fresh Meat', name: 'Pork Belly', description: 'Fresh pork belly', image: 'https://m.media-amazon.com/images/I/61j94usmJeL._AC_UL320_.jpg', identifiers: ['Fresh'], price: '$4.99' },
  { category: 'Seafood', name: 'Frozen Lobster Tails', description: 'Frozen lobster tails', image: 'https://m.media-amazon.com/images/I/91RAOeoopqL._AC_UL320_.jpg', identifiers: ['Frozen', 'Seafood'], price: '$29.99' },
  { category: 'Fresh Meat', name: 'Beef Brisket', description: 'Fresh beef brisket', image: 'https://m.media-amazon.com/images/I/61+9SL3a4ML._AC_UL320_.jpg', identifiers: ['Fresh'], price: '$7.99' },
];

const sortedMeatProducts = meatProducts.sort((a, b) => a.category.localeCompare(b.category));

const MeatProducts = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Meat and Seafood Products</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {sortedMeatProducts.map((product) => (
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
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md m-2">Add to Cart</button>
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

export default MeatProducts;