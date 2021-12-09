import React, { useState } from "react";
import "./styles.css";
const App = () => {
  const [value1, setValue] = useState("Marco");
  const [value2, setValue1] = useState("Polo");
   function onclick(){
     
      setValue(value2);
      setValue(value1);
   }
  return (
    <div id="main">
      <h1 id="marco- polo" >
        {value1}
      </h1>
      <button id="marco- polo" onClick={onclick} >
        {value2}
      </button>
    </div>
  );
};

export default App;

