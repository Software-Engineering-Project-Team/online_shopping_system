import { alcoholProducts, newAlcoholProducts } from './AlcoholProducts';
import { bakeryProducts, newBakeryProducts } from './BakeryProducts';
import { babyProducts, newBabyProducts } from './BabyProducts';
import { beveragesProducts, newBeveragesProducts } from './BeveragesProducts';
import { breakfastProducts, newBreakfastProducts } from './BreakfastProducts';
import { dairyProducts, newDairyProducts } from './DairyProducts';
import { deliProducts, newDeliProducts } from './DeliProducts';
import { frozenProducts, newFrozenProducts } from './FrozenProducts';
import { healthyLivingProducts, newHealthyLivingProducts } from './HealthyLivingProducts';
import { householdProducts, newHouseholdProducts } from './HouseholdProducts';
import { meatProducts, newMeatProducts } from './MeatProducts';
import { pantryProducts, newPantryProducts } from './PantryProducts';
import { personalCareProducts, newPersonalCareProducts } from './PersonalCareProducts';
import { petProducts, newPetProducts } from './PetProducts';
import { produceProducts, newProduceProducts } from './ProduceProducts';
import { snacksProducts, newSnacksProducts } from './SnacksProducts';
import { seasonalProducts, newSeasonalProducts } from './SeasonalProducts';
import { bbqProducts, newBBQProducts } from './BBQProducts';

const onSaleProducts = [
  { ...alcoholProducts[0], onSale: true },
  { ...bakeryProducts[1], onSale: true },
  { ...babyProducts[2], onSale: true },
  { ...beveragesProducts[3], onSale: true },
  { ...breakfastProducts[4], onSale: true },
  { ...dairyProducts[5], onSale: true },
  { ...deliProducts[6], onSale: true },
  { ...frozenProducts[7], onSale: true },
];

const fanFavorites = [
  { ...alcoholProducts[1], isFavorite: true },
  { ...bakeryProducts[3], isFavorite: true },
  { ...babyProducts[4], isFavorite: true },
  { ...beveragesProducts[5], isFavorite: true },
  { ...breakfastProducts[6], isFavorite: true },
  { ...dairyProducts[7], isFavorite: true },
  { ...deliProducts[8], isFavorite: true },
  { ...frozenProducts[9], isFavorite: true },
];

const allProducts = [
  ...alcoholProducts,
  ...newAlcoholProducts.map(product => ({ ...product, isNew: true })),
  ...bakeryProducts,
  ...newBakeryProducts.map(product => ({ ...product, isNew: true })),
  ...babyProducts,
  ...newBabyProducts.map(product => ({ ...product, isNew: true })),
  ...beveragesProducts,
  ...newBeveragesProducts.map(product => ({ ...product, isNew: true })),
  ...breakfastProducts,
  ...newBreakfastProducts.map(product => ({ ...product, isNew: true })),
  ...dairyProducts,
  ...newDairyProducts.map(product => ({ ...product, isNew: true })),
  ...deliProducts,
  ...newDeliProducts.map(product => ({ ...product, isNew: true })),
  ...frozenProducts,
  ...newFrozenProducts.map(product => ({ ...product, isNew: true })),
  ...healthyLivingProducts,
  ...newHealthyLivingProducts.map(product => ({ ...product, isNew: true })),
  ...householdProducts,
  ...newHouseholdProducts.map(product => ({ ...product, isNew: true })),
  ...meatProducts,
  ...newMeatProducts.map(product => ({ ...product, isNew: true })),
  ...pantryProducts,
  ...newPantryProducts.map(product => ({ ...product, isNew: true })),
  ...personalCareProducts,
  ...newPersonalCareProducts.map(product => ({ ...product, isNew: true })),
  ...petProducts,
  ...newPetProducts.map(product => ({ ...product, isNew: true })),
  ...produceProducts,
  ...newProduceProducts.map(product => ({ ...product, isNew: true })),
  ...snacksProducts,
  ...newSnacksProducts.map(product => ({ ...product, isNew: true })),
  ...seasonalProducts,
  ...newSeasonalProducts.map(product => ({ ...product, isNew: true })),
  ...bbqProducts,
  ...newBBQProducts.map(product => ({ ...product, isNew: true })),
  ...onSaleProducts,
  ...fanFavorites,
];

export {
  onSaleProducts,
  fanFavorites,
  alcoholProducts,
  newAlcoholProducts,
  bakeryProducts,
  newBakeryProducts,
  babyProducts,
  newBabyProducts,
  beveragesProducts,
  newBeveragesProducts,
  breakfastProducts,
  newBreakfastProducts,
  dairyProducts,
  newDairyProducts,
  deliProducts,
  newDeliProducts,
  frozenProducts,
  newFrozenProducts,
  healthyLivingProducts,
  newHealthyLivingProducts,
  householdProducts,
  newHouseholdProducts,
  meatProducts,
  newMeatProducts,
  pantryProducts,
  newPantryProducts,
  personalCareProducts,
  newPersonalCareProducts,
  petProducts,
  newPetProducts,
  produceProducts,
  newProduceProducts,
  snacksProducts,
  newSnacksProducts,
  seasonalProducts,
  newSeasonalProducts,
  bbqProducts,
  newBBQProducts,
  allProducts,
};