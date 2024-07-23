import React, { useState } from 'react';

const CheckoutSummary = ({ cart, setCart }) => {
  const TAX_RATE = 0.0825;
  const DISCOUNT_CODES = {
    'TAKE10': 0.1,
    'SAVE20': 0.2,
  };

  const [discountCode, setDiscountCode] = useState('');
  const [discountRate, setDiscountRate] = useState(0);
  const [discountApplied, setDiscountApplied] = useState(false);
  const [error, setError] = useState('');

  const handleRemoveItem = (name) => {
    const newCart = cart.filter(item => item.name !== name);
    setCart(newCart);
  };

  const calculateSubtotal = () => {
    // Ensure item.price is treated as a number
    return cart.reduce((total, item) => total + (Number(item.price) || 0) * (Number(item.quantity) || 1), 0);
  };

  const calculateDiscount = (subtotal) => {
    return discountApplied ? subtotal * discountRate : 0;
  };

  const calculateTax = (subtotal) => {
    return subtotal * TAX_RATE;
  };

  const handleApplyDiscount = () => {
    if (DISCOUNT_CODES.hasOwnProperty(discountCode)) {
      setDiscountRate(DISCOUNT_CODES[discountCode]);
      setDiscountApplied(true);
      setError('');
    } else {
      setError('Invalid discount code');
    }
  };

  const subtotal = calculateSubtotal();
  const discount = calculateDiscount(subtotal);
  const subtotalAfterDiscount = subtotal - discount;
  const tax = calculateTax(subtotalAfterDiscount);
  const total = subtotalAfterDiscount + tax;

  const formattedSubtotal = (Number(subtotal) || 0).toFixed(2);
  const formattedDiscount = (Number(discount) || 0).toFixed(2);
  const formattedTax = (Number(tax) || 0).toFixed(2);
  const formattedTotal = (Number(total) || 0).toFixed(2);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <p className="mb-4">Subtotal ({cart.length} items): ${formattedSubtotal}</p>

      <div className="flex">
        <div className="w-2/3 p-4">
          {cart.map((item) => (
            <div key={item.name} className="flex items-center justify-between p-4 mb-4 border rounded-lg shadow-sm">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">{item.description}</p>
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold">${(Number(item.price) || 0).toFixed(2)}</p>
              </div>
              <button 
                className="ml-4 bg-green-500 text-white rounded-full p-2"
                onClick={() => handleRemoveItem(item.name)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="w-1/3 p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <p>Subtotal</p>
            <p>${formattedSubtotal}</p>
          </div>
          {discountApplied && (
            <div className="flex justify-between mb-2">
              <p>Discount</p>
              <p>-${formattedDiscount}</p>
            </div>
          )}
          <div className="flex justify-between mb-2">
            <p>Tax</p>
            <p>${formattedTax}</p>
          </div>
          <div className="flex justify-between mb-4 font-bold">
            <p>Total</p>
            <p>${formattedTotal}</p>
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Discount code"
              className="input input-bordered w-full"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            />
            <button className="bg-green-500 text-white mt-2 px-4 py-2 rounded" onClick={handleApplyDiscount}>Apply</button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
          <button className="bg-green-500 text-white w-full px-4 py-2 rounded">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummary;
