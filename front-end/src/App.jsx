import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './layouts/NavBar';
import Footer from './layouts/Footer';
import RootLayout from './layouts/RootLayout';
import AllProducts from './components/AllProducts';
import NewProducts from './components/NewProducts';
import OnSaleProducts from './components/OnSaleProducts';
import DairyProducts from './components/DairyProducts';
import ProduceProducts from './components/ProduceProducts';
import MeatProducts from './components/MeatProducts';
import DeliProducts from './components/DeliProducts';
import FrozenProducts from './components/FrozenProducts';
import BakeryProducts from './components/BakeryProducts';
import SnacksProducts from './components/SnacksProducts';
import PantryProducts from './components/PantryProducts';
import BreakfastProducts from './components/BreakfastProducts';
import BeveragesProducts from './components/BeveragesProducts';
import AlcoholProducts from './components/AlcoholProducts';
import BabyProducts from './components/BabyProducts';
import PetProducts from './components/PetProducts';
import HouseholdProducts from './components/HouseholdProducts';
import PersonalCareProducts from './components/PersonalCareProducts';
import FanFavoritesProducts from './components/FanFavoritesProducts';
import SeasonalProducts from './components/SeasonalProducts';
import BBQProducts from './components/BBQProducts';
import HealthyLivingProducts from './components/HealthyLivingProducts';

import CheckoutSummary from './components/CheckoutSummary';

function App() {
  const [cart, setCart] = useState([]);
  
  const addToCart = (item) => {
    setCart([...cart, item]);
  };


  return (
    <Router>
      <NavBar setSearchQuery={setSearchQuery} setSortType={setSortType} />
      <Routes>
      <Route path="/" element={<RootLayout />} />
        <Route path="/all-products" element={<AllProducts addToCart={addToCart} />} />
        <Route path="/new" element={<NewProducts addToCart={addToCart} />} />
        <Route path="/on-sale" element={<OnSaleProducts addToCart={addToCart} />} />
        <Route path="/dairy" element={<DairyProducts addToCart={addToCart} />} />
        <Route path="/produce" element={<ProduceProducts addToCart={addToCart} />} />
        <Route path="/meat" element={<MeatProducts addToCart={addToCart} />} />
        <Route path="/deli" element={<DeliProducts addToCart={addToCart} />} />
        <Route path="/frozen" element={<FrozenProducts addToCart={addToCart} />} />
        <Route path="/bakery" element={<BakeryProducts addToCart={addToCart} />} />
        <Route path="/snacks" element={<SnacksProducts addToCart={addToCart} />} />
        <Route path="/pantry" element={<PantryProducts addToCart={addToCart} />} />
        <Route path="/breakfast" element={<BreakfastProducts addToCart={addToCart} />} />
        <Route path="/beverages" element={<BeveragesProducts addToCart={addToCart} />} />
        <Route path="/alcohol" element={<AlcoholProducts addToCart={addToCart} />} />
        <Route path="/baby" element={<BabyProducts addToCart={addToCart} />} />
        <Route path="/pet" element={<PetProducts addToCart={addToCart} />} />
        <Route path="/household" element={<HouseholdProducts addToCart={addToCart} />} />
        <Route path="/personal-care" element={<PersonalCareProducts addToCart={addToCart} />} />
        <Route path="/fan-favorites" element={<FanFavoritesProducts addToCart={addToCart} />} />
        <Route path="/seasonal" element={<SeasonalProducts addToCart={addToCart} />} />
        <Route path="/bbq" element={<BBQProducts addToCart={addToCart} />} />
        <Route path="/healthy-living" element={<HealthyLivingProducts addToCart={addToCart} />} />
        <Route path="/checkout-summary" element={<CheckoutSummary cart={cart} setCart={setCart} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
