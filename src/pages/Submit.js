import React, { useState, useEffect } from "react";
import "../App.css";
import "../slideText.css";
import { useLocation } from "react-router-dom";


const Submit = () => {
  const location = useLocation();
  const title = location?.state?.title;
//   console.log("title", title);

  const [content, setContent] = useState('')

  return (
    <div className="bg-cover bg-center transition duration-700 ease-in-out  bg-[url('https://images.pexels.com/photos/1535402/pexels-photo-1535402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] dark:bg-[url('https://images.pexels.com/photos/2931286/pexels-photo-2931286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
      <div className="flex justify-center h-screen">
        <div className=" flex-col items-center justify-center mt-32 md:mt-20 text-center">
          <h1 className="text-3xl font-primaryRegular mx-4 text-gray-900 dark:text-white transition duration-700 ease-in-out">
            {title} 
          </h1>
          {/* <textarea className="dark:bg-white w-5/6 h-3/5 md:w-full mt-3 mx-auto rounded-3xl">efefef</textarea> */}
          <textarea
            //   disabled={isButtonDisabled}
              id="keyword"
              rows="8"
              className="mt-4 mb-4 p-3 w-4/5 text-s h-3/5 md:w-full font-primaryRegular bg-slate-700 dark:bg-white rounded-3xl dark:placeholder-gray-400 dark:text-black text-white transition duration-700 ease-in-out"
              placeholder="Write here...    "
              value={content}
              onChange={(e) => {setContent(e.target.value)
              }}
            ></textarea>
            <button className="bg-green-400 text-white font-primaryRegular disabled:bg-gray-400 dark:disabled:bg-gray-400 dark:bg-green-400 px-4 py-3 text-xl dark:text-white rounded-full right-0 transition duration-300 ease-in-out"
        //   disabled={keywords.length < 1}
             onClick={() => {console.log('content', content)}}
          
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Submit;
