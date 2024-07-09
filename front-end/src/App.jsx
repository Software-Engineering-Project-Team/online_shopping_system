import React from 'react';
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

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<RootLayout />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/new" element={<NewProducts />} />
        <Route path="/on-sale" element={<OnSaleProducts />} />
        <Route path="/dairy" element={<DairyProducts />} />
        <Route path="/produce" element={<ProduceProducts />} />
        <Route path="/meat" element={<MeatProducts />} />
        <Route path="/deli" element={<DeliProducts />} />
        <Route path="/frozen" element={<FrozenProducts />} />
        <Route path="/bakery" element={<BakeryProducts />} />
        <Route path="/snacks" element={<SnacksProducts />} />
        <Route path="/pantry" element={<PantryProducts />} />
        <Route path="/breakfast" element={<BreakfastProducts />} />
        <Route path="/beverages" element={<BeveragesProducts />} />
        <Route path="/alcohol" element={<AlcoholProducts />} />
        <Route path="/baby" element={<BabyProducts />} />
        <Route path="/pet" element={<PetProducts />} />
        <Route path="/household" element={<HouseholdProducts />} />
        <Route path="/personal-care" element={<PersonalCareProducts />} />
        <Route path="/fan-favorites" element={<FanFavoritesProducts />} />
        <Route path="/seasonal" element={<SeasonalProducts />} />
        <Route path="/bbq" element={<BBQProducts />} />
        <Route path="/healthy-living" element={<HealthyLivingProducts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;