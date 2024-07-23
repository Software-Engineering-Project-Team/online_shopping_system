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
import SearchResults from './components/SearchResults';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortType, setSortType] = useState('');

  return (
    <Router>
      <NavBar setSearchQuery={setSearchQuery} setSortType={setSortType} />
      <Routes>
        <Route path="/" element={<RootLayout />} />

        <Route path="/all-products" element={<AllProducts searchQuery={searchQuery} sortType={sortType} />} />
        <Route path="/new" element={<NewProducts searchQuery={searchQuery} sortType={sortType} />} />
        <Route path="/on-sale" element={<OnSaleProducts searchQuery={searchQuery} sortType={sortType} />} />
        <Route path="/dairy" element={<DairyProducts searchQuery={searchQuery} sortType={sortType} />} />
        <Route path="/produce" element={<ProduceProducts searchQuery={searchQuery} sortType={sortType} />} />
        <Route path="/meat" element={<MeatProducts searchQuery={searchQuery} sortType={sortType} />} />
        <Route path="/deli" element={<DeliProducts searchQuery={searchQuery} sortType={sortType} />} />
        <Route path="/frozen" element={<FrozenProducts searchQuery={searchQuery} sortType={sortType} />} />
        <Route path="/bakery" element={<BakeryProducts searchQuery={searchQuery} sortType={sortType} />} />
        <Route path="/snacks" element={<SnacksProducts searchQuery={searchQuery} sortType={sortType} />} />
        <Route path="/pantry" element={<PantryProducts searchQuery={searchQuery} sortType={sortType} />} />
        <Route path="/breakfast" element={<BreakfastProducts searchQuery={searchQuery} sortType={sortType} />} />
        <Route path="/beverages" element={<BeveragesProducts searchQuery={searchQuery} sortType={sortType} />} />
        <Route path="/alcohol" element={<AlcoholProducts searchQuery={searchQuery} sortType={sortType} />} />
        <Route path="/baby" element={<BabyProducts searchQuery={searchQuery} sortType={sortType} />} />
        <Route path="/pet" element={<PetProducts searchQuery={searchQuery} sortType={sortType} />} />
        <Route path="/household" element={<HouseholdProducts searchQuery={searchQuery} sortType={sortType} />} />
        <Route path="/personal-care" element={<PersonalCareProducts searchQuery={searchQuery} sortType={sortType} />} />
        <Route path="/fan-favorites" element={<FanFavoritesProducts searchQuery={searchQuery} sortType={sortType} />} />
        <Route path="/seasonal" element={<SeasonalProducts searchQuery={searchQuery} sortType={sortType} />} />
        <Route path="/bbq" element={<BBQProducts searchQuery={searchQuery} sortType={sortType} />} />
        <Route path="/healthy-living" element={<HealthyLivingProducts searchQuery={searchQuery} sortType={sortType} />} />
        <Route path="/search" element={<SearchResults searchQuery={searchQuery} sortType={sortType} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
