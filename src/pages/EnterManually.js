import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let nextId = 0;
const EnterManually = () => {
   
  const difficultyArray= ['Easy', 'Moderate', 'Creative'];

  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [difficulty, setDifficulty] = useState(0);
  const [keywords, setKeywords] = useState([]);
//   const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const isButtonDisabled = keywords.length >= 5;

  function addKeywords() {
    keywords.push({id: nextId, keyword: keyword})
    nextId++;
    setKeyword('')
    // console.log(keywords)
  }

  const removeKeyword = value => {
    setKeywords(oldValues => {
      return oldValues.filter(elem => elem.id !== value)
    })
  }

  function handleDifficulty(){
    setDifficulty((difficulty+1)%3);
  }
  return (
    <div className="bg-cover bg-center transition duration-700 ease-in-out  bg-[url('https://images.pexels.com/photos/1535402/pexels-photo-1535402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] dark:bg-[url('https://images.pexels.com/photos/2931286/pexels-photo-2931286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
      <div className="flex justify-center  h-screen">
        <div className="text-center mt-32 mx-14 w-full h-1/2 flex flex-col md:w-1/2">
          <h2 className="text-2xl font-primaryRegular text-gray-900 mb-6  dark:text-white transition duration-700 ease-in-out">
            {" "}
            Add 5 keywords to generate titles{" "}
          </h2>
          <div className="flex relative mb-3">
            <textarea
              disabled={isButtonDisabled}
              id="keyword"
              rows="1"
              class="p-3 w-full text-s font-primaryRegular bg-slate-700 dark:bg-white rounded-full dark:placeholder-gray-400 dark:text-black text-white transition duration-700 ease-in-out"
              placeholder="eg: Harry Potter"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            ></textarea>
           
            {/* <div className=" font-primaryRegular dark:bg-white disabled:dark:blur-none bg-blend-screen md:px-10 dark:text-yellow-950 text-white absolute px-5 py-3 rounded-full right-0 transition duration-300 ease-in-out"
            disabled={isButtonDisabled}>
              {" "}
              Add{" "}
            </div> */}
            <button
              className="bg-white font-primaryRegular disabled:bg-gray-400 dark:disabled:bg-gray-400 dark:bg-yellow-300  md:px-10 dark:text-white text-black absolute px-5 py-3 rounded-full right-0 transition duration-300 ease-in-out"
              onClick={addKeywords}
              disabled={isButtonDisabled}
            >
              Add
            </button>
          </div >
          <div className="text-black cursor-pointer dark:text-white font-primaryRegular" onClick={handleDifficulty}>
              Difficulty: {difficultyArray[difficulty]}
            </div>
          <div className="w-full h-full mt-7 text-white mb-8">
            <ul className="flex flex-wrap justify-center">
                {keywords.map(keyword=>(
                    <li onClick={() => removeKeyword(keyword.id)} key={keyword.id} className=" cursor-pointer mx-2 my-2 px-3 py-2 text-s bg-slate-700 dark:bg-white dark:text-black font-primaryRegular rounded-full transition duration-300 ease-in-out"> {keyword.keyword} </li>
                ))}
            </ul>
          </div>
          <button className="bg-green-400 text-white font-primaryRegular disabled:bg-gray-400 dark:disabled:bg-gray-400 dark:bg-green-400 px-4 py-3 text-xl dark:text-white rounded-full right-0 transition duration-300 ease-in-out"
          disabled={keywords.length < 1}
          onClick={() => {navigate('/titles', {state:{ keywords: keywords, difficulty: difficultyArray[difficulty] }})}}
          >
            Generate titles
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default EnterManually;
