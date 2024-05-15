import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import ChooseMethod from "./ChooseMethod";
import { Link, NavLink } from "react-router-dom";
import "../App.css";

const Layout = ({ children }) => {
  let isDarkMode = false;
  const [theme, setTheme] = useState("dark");
  const [themeText, setThemeText] = useState("Light");
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

  const handleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setThemeText(themeText === "Dark" ? "Light" : "Dark");
  };

  return (
    <div>
        <h1 className=" absolute top-0 left-0 p-1 m-2 dark:text-white text-black font-primaryRegular text-3xl transition duration-700 ease-in-out">
        Wu
      </h1>
      
      <button
        className="bg-gray-800 text-white dark:bg-white dark:text-black transition duration-700 ease-in-out absolute top-0 right-0 p-2 m-4 text-xs rounded-full"
        onClick={handleSwitch}
      >
        {themeText} Mode
      </button>
      {/* <main>{children}</main> */}
    </div>
  );
};

export default Layout;
