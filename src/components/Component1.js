
import React from 'react';

 export default function Component1({setSelectedOption}) {

return (
<div  className='childcomponent1'>
     <h1>Child Component 1</h1>
  <button onClick={()=>setSelectedOption("Component 1 Clicked")}>option1</button>

</div>

)

}