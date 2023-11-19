//import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import React, { useState } from 'react';


function App() {
 
  
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
    };
  
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  //const appClass = useState(false) ? "App dark" : "App light"

  return (
    <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleTheme} >Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
