// Required imports
import React, { useState } from 'react'; // Import React and the useState hook for managing state
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon for icons
import { faGooglePlusG, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import social media icons
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import shopping cart icon
import HeroImage from '../assets/bg-hero.png'; // Import the background image

function LoginPage() {
  // State variables for form input values and error messages
  const [email, setEmail] = useState(''); // Email state
  const [password, setPassword] = useState(''); // Password state
  const [errors, setErrors] = useState({ email: '', password: '' }); // State for form validation errors

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Initialize validation state
    let isValid = true;
    let newErrors = { email: '', password: '' };

    // Validate email input
    if (!email) {
      newErrors.email = 'Email is required'; // Error if email is empty
      isValid = false; // Set form validity to false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid'; // Error if email format is invalid
      isValid = false; // Set form validity to false
    }

    // Validate password input
    if (!password) {
      newErrors.password = 'Password is required'; // Error if password is empty
      isValid = false; // Set form validity to false
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long'; // Error if password is too short
      isValid = false; // Set form validity to false
    }

    // Update errors state with validation results
    setErrors(newErrors);

    // If form is valid, proceed with form submission logic
    if (isValid) {
      console.log('Form submitted:', { email, password });
      // Typically, you would send form data to a server or API here
    }
  };

  return (
    <div className="relative hero min-h-96 bg-[#30C976] opacity-100" style={{ backgroundImage: `url(${HeroImage})` }}>
      {/* Container for the login form */}
      <div className="hero min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          {/* Header section with logo */}
          <div className="flex flex-row items-center justify-center mb-4">
            <FontAwesomeIcon icon={faShoppingCart} className="text-green-500 text-2xl" />
            <h1 className="ml-2 text-3xl font-bold text-black">Foodie</h1>
          </div>
          {/* Page title */}
          <h1 className="text-2xl font-bold text-center mb-6">Login now!</h1>
          {/* Login form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email input field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className={`input input-bordered w-full ${errors.email ? 'input-error' : ''}`} // Apply error styling if needed
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>} {/* Display error message if email validation fails */}
            </div>
            {/* Password input field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className={`input input-bordered w-full ${errors.password ? 'input-error' : ''}`} // Apply error styling if needed
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>} {/* Display error message if password validation fails */}
            </div>
            {/* Submit button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-[#30C976] w-full text-white">Login</button>
            </div>
            {/* Social media icons */}
            <div className="social-icons flex justify-center mt-4">
              <a href="#" className="icon border border-black rounded-full flex items-center justify-center mx-1 w-10 h-10 text-black">
                <FontAwesomeIcon icon={faGooglePlusG} />
              </a>
              <a href="#" className="icon border border-black rounded-full flex items-center justify-center mx-1 w-10 h-10 text-black">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="icon border border-black rounded-full flex items-center justify-center mx-1 w-10 h-10 text-black">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage; // Export the LoginPage component
