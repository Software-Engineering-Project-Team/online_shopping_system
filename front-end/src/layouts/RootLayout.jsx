import ReactLogo from '../assets/react.svg'; // adjust the path to your actual React.svg file
import HeroImage from '../assets/bg-hero.png'; // adjust the path to your actual hero.png file
import FoodImage from '../assets/food-hero.png'; // adjust the path to your actual food-hero.png file
import { FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";

function RootLayout() {
  return (
    <>
      <main>
        {/* Main content goes here */}
        <div className="relative hero min-h-96 opacity-100" style={{ backgroundImage: `url(${HeroImage})` }}>
          <div className="absolute inset-0 bg-[#30C976] opacity-80"></div>
          <div className="relative z-10 hero-content flex-col lg:flex-row-reverse">
            <img src={FoodImage} alt="Food Image" className="w-32 h-32" />
            <div>
              <h1 className="text-3xl font-bold">Welcome to Foodie</h1>
              <p className="text-lg">Your one-stop shop for all your food needs</p>
              <div className="mt-4 flex">
                <input type="email" placeholder="Subscribe to our newsletter..." className="input input-bordered w-full md:w-auto bg-[#30C976] rounded-none bg-opacity-10" />
                <button className="btn btn-ghost bg-[#30C976] rounded-none bg-opacity-80">
                  <IconContext.Provider value={{ color: "#fff" }}>
                    <FaEnvelope size={24} />
                  </IconContext.Provider>
                </button>
              </div>
            </div>
          </div>
        </div>


        {/*
        Updated code starts here, below are recent changes: 
        - Top Sold Items that list 3 items that are considered to be highly sellable
           - A description is added for each each item.
           - Responsive button to items into cart (***IN PROGRESS***).
           - Badges to identify the category of the item.
           
        - Top Rated Items that list 3 items that were top rated by customers
           - A description is added for each each item.
           - Responsive button to items into cart (***IN PROGRESS***).
           - Badges to identify the category of the item.
           
        - Trending Items that list 3 items top trending from mostly bought and highly reviewed by customers
           - A description is added for each each item.
           - Responsive button to items into cart (***IN PROGRESS***).
           - Badges to identify the category of the item.
        
        - Recently Added items that list 3 items that were recently added to the grocery stores inventory
           - A description is added for each each item.
           - Responsive button to items into cart (***IN PROGRESS***).
           - Badges to identify the category of the item.
           - A "New" badge that identifies the specific item is newly added to inventory.
           */}

        {/*First Section Begins here*/}
        
        {/*Top Sold Items*/}
        <div className="mt-20 ..."></div>
        <div className="mb-4">
          {/*Header description*/}
          <h2 className="text-2xl font-bold">Top Sold Items</h2>
        </div>

        <div className="flex space-x-4">
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              {/*Image of Item*/}
              <img
                src="https://m.media-amazon.com/images/I/61uWT5siLmL.jpg"
                alt="Borges Extra Virgin Olive Oil" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Borges Extra Virgin Olive Oil
              </h2>
              <p>Pure, flavorful, heart-healthy, and Mediterranean inspired olive oil.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg pr-8">Add to Cart</button> {/*Potential DaisyUI Component for responsive button*/}
                <div className="badge badge-outline">Olive Oil</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              {/*Image of Item*/}
              <img
                src="https://boxncase.com/cdn/shop/files/c3ab03b8-6e8d-4458-b58c-25577bf752a2_1.095b9db47fe1dca91e74e376c05d3059.jpg?v=1700896013&width=2400"
                alt=" Izze Sparkling Apple Flavor" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Izze Sparkling Apple Flavor
              </h2>
              <p>Indulge in IZZE Sparkling Apple Juice: crisp, real, naturally sweet.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Sparkling Water</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              {/*Image of Item*/}
              <img
                src="https://i5.walmartimages.com/seo/Prima-Della-Cracked-Pepper-Turkey-Breast-Deli-Sliced_a623fe78-0656-482f-bb28-b5d5f5f23529.793322a2a0387b75477f0ccb456ab7b6.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
                alt="Cracked Pepper Turkey Breast" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Cracked Pepper Turkey Breast
              </h2>
              <p>Delicately smoked for zesty farmhouse fresh flavor in every slice.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Meat</div>
                <div className="badge badge-outline">Turkey</div>
              </div>
            </div>
          </div>
        </div>

         {/*Second Section Begins Here*/}

        {/* Top Rated Items*/}
        <div className="mt-20 ..."></div>
        <div className="mb-4">
          {/*Header description*/}
          <h2 className="text-2xl font-bold">Top Rated Items</h2>
        </div>

        <div className="flex space-x-4">
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              {/*Image of Item*/}
              <img
                src="https://i5.peapod.com/c/RG/RGRPJ.png"
                alt="Simply Lemonade - Raspberry" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Simply Lemonade - Raspberry
              </h2>
              <p>Our delicious lemonade is made simply, with natural ingredients and a delicate balance of sweet and sour.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Juice</div>
                <div className="badge badge-outline">Organic</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              {/*Image of Item*/}
              <img
                src="https://ip.prod.freshop.retail.ncrcloud.com/resize?url=https://images.freshop.ncrcloud.com/60247/27ebd71db5bcfe668cb351e705dd6901_large.png&width=512&type=webp&quality=90"
                alt="Chobani - Vanilla Greek Yogurt" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Chobani - Vanilla Greek Yogurt
              </h2>
              <p>Real vanilla blended in creamy Greek Yogurt. Made with only natural ingredients.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Dairy</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              {/*Image of Item*/}
              <img
                src="https://pwrlift.com/cdn/shop/files/Lemon-Lime_8ee3c6dd-6a8b-42ec-ac77-a23642eee988_2000x.png?v=1689015021"
                alt="PWR LIFT - Lemon Lime" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                PWR LIFT - Lemon Lime
              </h2>
              <p>A thirst-quenching drink that combines a juicy, fruit-forward flavor, super-charged hydration taste.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fitness</div>
              </div>
            </div>
          </div>
        </div>

         {/*Third Section Begins Here*/}
        
        {/* Trending Items */}
        <div className="mt-20 ..."></div>
        <div className="mb-4">
          {/*Header description*/}
          <h2 className="text-2xl font-bold">Trending Items</h2>
        </div>

        <div className="flex space-x-4">
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              {/*Image of Item*/}
              <img
                src="https://shop.idahoan.com/cdn/shop/products/lyqxsr2zj34bkofcrqty_bacb2381-e1b7-4d62-bfe5-d0e133970f5e_1200x1200.jpg?v=1704299792"
                alt=" Idahoan Mashed Potatoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Idahoan Mashed Potatoes
              </h2>
              <p>Whip up delicious, rich mashed potatoes in minutes with Idahoan Mashed Potatoes.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Vegetable</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              {/*Image of Item*/}
              <img
                src="https://fsgprints.com/cdn/shop/products/Buldak2xspicy_800x.png?v=1650317555"
                alt="Buldak Ramen - Spicy Chicken Flavor" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Buldak Ramen - Spicy Chicken Flavor
              </h2>
              <p>A Spicy, bold chicken flavor, fiery, and intensely satisfying of South Korean ramen.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Instant Noodle</div>
                <div className="badge badge-outline">South Korean</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              {/*Image of Item*/}
              <img
                src="https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/65307b9e275cb9d877d46de0_2023-12-21_02-30-27_front.main.jpg"
                alt="Health-Ade Kombucha - Pink Lady Apple" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Health-Ade Kombucha - Pink Lady Apple
              </h2>
              <p>Flavored with cold-pressed juice from organic Pink Lady Apples.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fermented tea</div>
                <div className="badge badge-outline">Probiotic</div>
              </div>
            </div>
          </div>
        </div>

         {/*Fourth Section Begins Here*/}
        
        {/* Recently Added */}
        <div className="mt-20 ..."></div>
        <div className="mb-4">
          {/*Header description*/}
          <h2 className="text-2xl font-bold">Recently Added</h2>
        </div>

        <div className="flex space-x-4">
          <div className="card bg-base-100 w-96 shadow-xl">
            {/*Image of Item*/}
            <figure>
              <img
                src="https://contenthandler-raleys.fieldera.com/prod/45777/1/0/0/80060414-Main.jpg"
                alt="Belvoir Farm - Organic Elderflower Lemonade" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Belvoir Farm - Organic Elderflower Lemonade
                <div className="badge bg-success">NEW</div>
              </h2>
              <p>A Refreshing, floral, lemony, sparkling, natural goodness taste of Elderflower lemonade.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Organic</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            {/*Image of Item*/}
            <figure>
              <img
                src="https://ip.prod.freshop.retail.ncrcloud.com/resize?url=https://images.freshop.ncrcloud.com/4815976/793530c3cdba35a348b890cd67410ac5_large.png&width=512&type=webp&quality=90"
                alt="Daves Killer Bread - Good Seed" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Daves Killer Bread - Good Seed
                <div className="badge bg-success">NEW</div>
              </h2>
              <p>Bold, Hearty, Sweet. Heavenly texture and saintly flavor, Good Seed is the boldest and sweetest of our breads.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Bakery</div>
                <div className="badge badge-outline">Organic</div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-96 shadow-xl">
            {/*Image of Item*/}
            <figure>
              <img
                src="https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/5be8d1d29af1956d61a2a3ec_upc-0732313122406-done-0-glamor-d52d73fe-b252-4024-9635-1db222f8ae2c-4cu0ag.jpg"
                alt=" Apple Organic Slices" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Apple Organic Slices
                <div className="badge bg-success">NEW</div>
              </h2>
              <p>Fresh, crisp, and organic apple slices with convenient, healthy, naturally sweetness for taste.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fruit</div>
                <div className="badge badge-outline">Organic</div>
              </div>
            </div>
          </div>
        </div>

        
      </main>
    </>
  )
}

export default RootLayout
