import React from "react";
import { Link } from "react-router-dom";

const ChooseMethod = () => {
  return (
    <div
      className="bg-cover bg-center transition duration-700 ease-in-out  bg-[url('https://images.pexels.com/photos/1535402/pexels-photo-1535402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] dark:bg-[url('https://images.pexels.com/photos/2931286/pexels-photo-2931286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]"
    >
      <div className="flex justify-center  h-screen">
        <div className="text-center mt-40 mx-14 w-full h-1/2 flex flex-col md:w-1/2">
        <h2 className="text-2xl font-primaryRegular text-gray-900 mb-6  dark:text-white transition duration-700 ease-in-out"> Choose a method to select Keywords </h2>
          <Link to='/enter-manually'>
            <button
              className="my-3 w-full text-white hover:bg-gray-700 bg-gray-900 font-primaryRegular py-4  rounded-full  dark:text-black dark:bg-white transition duration-300 ease-in-out cursor-pointer dark:hover:bg-blue-200"
             
            >
              Enter Manually
            </button>
          </Link>
          <Link to='/choose-method'>
            <button
              className="my-3 w-full text-white hover:bg-gray-700 bg-gray-900 font-primaryRegular py-4 rounded-full  dark:text-black dark:bg-white transition duration-300 ease-in-out  cursor-pointer dark:hover:bg-blue-200"
              
            >
              Choose from categories
            </button>
          </Link>
          <Link to='/choose-method'>
            <button
              className="my-3 w-full text-white hover:bg-gray-700 bg-gray-900 font-primaryRegular py-4 rounded-full  dark:text-black dark:bg-white transition duration-300 ease-in-out cursor-pointer dark:hover:bg-blue-200"
              
            >
              Trending keywords
            </button>
          </Link>
          <Link to='/choose-method'>
            <button
              className="my-3 w-full text-white hover:bg-gray-700 bg-gray-900 font-primaryRegular py-4 rounded-full  dark:text-black dark:bg-white transition duration-300 ease-in-out cursor-pointer dark:hover:bg-blue-200"
              
            >
              Random keywords
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseMethod;