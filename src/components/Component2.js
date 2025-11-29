import React from 'react';
 export default function Component2({setSelectedOption}) {
return (
<div className='childcomponent1'>
    <h1>Child Component 2</h1>
    <button onClick={()=>setSelectedOption("Component 2 Clicked")}>option2</button>
</div>

)

}