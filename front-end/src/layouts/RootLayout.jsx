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
      </main>
    </>
  )
}

export default RootLayout