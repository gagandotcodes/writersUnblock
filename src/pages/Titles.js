import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import "../slideText.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Titles = () => {
  const location = useLocation();

  let titleSelected;
  const navigate = useNavigate();
  
  const keywords = location?.state?.keywords.map(
    (keyword) => (keyword = keyword.keyword)
  );
  const difficulty = location?.state?.difficulty;

  const [isLoading, setIsLoading] = useState(true);
  const [titles, setTitle] = useState([]);

  useEffect(() => {
    // generate titles API
    let data = JSON.stringify({
      keywords: keywords,
      difficulty: difficulty,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://writersunblockbackend.onrender.com/api/v1/titles/generate",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        // populate titles array
        setTitle(response.data);
        setIsLoading(false);
        console.log('titles', response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); 

  return (
    <div className="bg-cover bg-center transition duration-700 ease-in-out  bg-[url('https://images.pexels.com/photos/1535402/pexels-photo-1535402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] dark:bg-[url('https://images.pexels.com/photos/2931286/pexels-photo-2931286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
      <div className="flex justify-center h-screen">
        <div className="text-center mt-20 md:mt-20 ">
          <h1 className="text-3xl font-primaryRegular text-gray-900 dark:text-white transition duration-700 ease-in-out">
            Writer's Unblock
          </h1>
          {/* Conditional rendering based on isLoading state */}
          {isLoading ? (
            <div className="my-4">
              {/* Example loader using CSS spinner animation */}
              <div className="loader">
                <div className="dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <div className="dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <div className="dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <div className="dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <div className="dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <div className="dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>

              <div className="loader"></div>
            </div>
          ) : (
            <div>
            <div className="w-full h-full mt-7 text-white mb-5">
              <div
                className="flex flex-wrap justify-center overflow-y-auto rounded-3xl md:max-h-96 h-[60vh] md:max-w-6xl"
                // style={{ maxHeight: "330px", maxWidth: "90vw" }}
              >
                {titles.map((title, index) => (
                  <div key={index} className="dark:bg-white bg-slate-800 text-white pt-1 my-2 mx-5 md:mx-2 px-4 rounded-full md:text-start overflow-hidden transition duration-300 ease-in-out">
                  <div
                    
                    className="cursor-pointer hover:text-wrap text-lg dark:text-black font-primaryRegular rounded-full transition duration-300 ease-in-out"
                  >
                    {title}
                  </div>
                  <div className="dark:text-slate-600 text-slate-400 mb-1 hover:text-blue-500 dark:hover:text-blue-600 cursor-pointer transition duration-300 ease-in-out"
                  onClick={() => {navigate('/submit', {state:{ title: titles[index]}})}}>
                  Start Writting &rarr;
                  </div>
                  </div>
                ))}
              </div>
            </div>
            <Link to='../enter-manually'>
            <button className="bg-green-400 mx-3 text-white font-primaryRegular disabled:bg-gray-400 dark:disabled:bg-gray-400 dark:bg-green-400 px-4 py-3 text-xl dark:text-white rounded-full right-0 transition duration-300 ease-in-out"
             >
               Back
             </button>
            </Link>
            <Link to='../'>
            <button className="bg-green-400 mx-3 text-white font-primaryRegular disabled:bg-gray-400 dark:disabled:bg-gray-400 dark:bg-green-400 px-4 py-3 text-xl dark:text-white rounded-full right-0 transition duration-300 ease-in-out"
             >
               Home
             </button>
            </Link>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Titles;
