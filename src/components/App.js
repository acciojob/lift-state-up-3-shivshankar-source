
import React,{ useState } from "react";
import './../styles/App.css';
import Component1 from "./Component1";
import Component2 from "./Component2";


const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="parent">
      <h1>Parent Component</h1>
        {/* Do not remove the main div */}
        <Component1  setSelectedOption={setSelectedOption}/>
        <Component2 setSelectedOption={setSelectedOption}/>
        <div>
           <p>Selected Option :{selectedOption}</p>
        </div>
    </div>

  )
}

export default App
