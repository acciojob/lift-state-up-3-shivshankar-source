
import React,{ useState } from "react";
import './../styles/App.css';
import Component1 from "./Component1";
import Component2 from "./Component2";


const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="parent">
        {/* Do not remove the main div */}
        <Component1  setSelectedOption={setSelectedOption}/>
        <Component2 setSelectedOption={setSelectedOption}/>
        <div>
           <h1>{selectedOption}</h1>
        </div>
    </div>

  )
}

export default App
