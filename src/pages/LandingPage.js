import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const LandingPage = () => {
  let isDarkMode = false;
  const [theme, setTheme] = useState("dark");
  //   const history = useHistory();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      isDarkMode = true;
    } else {
      document.documentElement.classList.remove("dark");
      isDarkMode = false;
    }
  }, [theme]);

  const handleGetStarted = () => {
    // Navigate to the new page while preserving the background
    // history.push("/choose-method");
    console.log("hitt");
  };

  return (
    <div
      className="bg-cover bg-center transition duration-700 ease-in-out  bg-[url('https://images.pexels.com/photos/1535402/pexels-photo-1535402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] dark:bg-[url('https://images.pexels.com/photos/2931286/pexels-photo-2931286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]"
    >
      <div className="flex justify-center  h-screen">
        <div className="text-center mt-44 md:mt-32">
          <h1 className="text-7xl font-primaryRegular text-gray-900  dark:text-white transition duration-700 ease-in-out">
            Writer's
          </h1>
          <h1 className="text-5xl font-primaryRegular text-gray-900 mb-6  dark:text-white transition duration-700 ease-in-out">
            Unblock
          </h1>
          <div className="w-72">
            <p className="text-xs text-gray-900 mb-8  dark:text-white transition duration-700 ease-in-out">
              Discover fresh inspiration with Writers Unblock. Break through
              writer's block and revive your passion for writing. Unleash your
              creativity today.
            </p>
          </div>
          <Link to='/choose-method'>
            <button
              className="text-white hover:bg-gray-400 bg-gray-900 font-primaryRegular py-3 px-4 rounded-full  dark:text-black dark:bg-white transition duration-300 ease-in-out mb-36 md:mb-9 cursor-pointer dark:hover:bg-gray-200"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
          </Link>

          <div className="text-center mb-1">
            <p className="text-black text-xs dark:text-white">
              Visit my LinkedIn profile:
            </p>
            <a
              href="https://www.linkedin.com/in/gagandeep-singh-82b990215/"
              target="_blank" // Open link in a new tab/window
              rel="noopener noreferrer" // Recommended for security when using target="_blank"
              className="text-blue-600 underline hover:text-blue-800 text-xs "
            >
              linkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
