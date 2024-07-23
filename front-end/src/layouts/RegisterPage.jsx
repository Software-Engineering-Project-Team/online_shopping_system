// Required imports
import React, { useState } from 'react'; // Import React and useState hook
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon for icons
import { faGooglePlusG, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'; // Import social media icons
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import shopping cart icon
import HeroImage from '../assets/bg-hero.png'; // Import background image

function RegisterPage() {
  // State variables to manage form input values and error messages
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '', password: '' });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Initialize validation state
    let isValid = true;
    let newErrors = { name: '', email: '', password: '' };

    // Validate name input
    if (!name) {
      newErrors.name = 'Name is required'; // Set error message if name is empty
      isValid = false; // Set form validity to false
    }

    // Validate email input
    if (!email) {
      newErrors.email = 'Email is required'; // Set error message if email is empty
      isValid = false; // Set form validity to false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid'; // Set error message if email format is invalid
      isValid = false; // Set form validity to false
    }

    // Validate password input
    if (!password) {
      newErrors.password = 'Password is required'; // Set error message if password is empty
      isValid = false; // Set form validity to false
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long'; // Set error message if password is too short
      isValid = false; // Set form validity to false
    }

    // Update errors state with validation results
    setErrors(newErrors);

    // If form is valid, proceed with form submission logic
    if (isValid) {
      console.log('Form submitted:', { name, email, password });
      // Typically, you would send form data to a server or API here
    }
  };

  return (
    <div className="relative hero min-h-96 bg-[#30C976] opacity-100" style={{ backgroundImage: `url(${HeroImage})` }}>
      {/* Container for the registration form */}
      <div className="hero min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          {/* Header section with logo */}
          <div className="flex flex-row items-center justify-center mb-4">
            <FontAwesomeIcon icon={faShoppingCart} className="text-green-500 text-2xl" />
            <h1 className="ml-2 text-3xl font-bold text-black">Foodie</h1>
          </div>
          {/* Page title */}
          <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>
          {/* Registration form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name input field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className={`input input-bordered w-full ${errors.name ? 'input-error' : ''}`} // Apply error styling if needed
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>} {/* Display error message if name validation fails */}
            </div>
            {/* Email input field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
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
                placeholder="Password"
                className={`input input-bordered w-full ${errors.password ? 'input-error' : ''}`} // Apply error styling if needed
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>} {/* Display error message if password validation fails */}
            </div>
            {/* Submit button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-[#30C976] w-full text-white">Sign Up</button>
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

export default RegisterPage; // Export the RegisterPage component
