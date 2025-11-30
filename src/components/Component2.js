import React from 'react';
 export default function Component2({setSelectedOption}) {
return (
<div className='childcomponent1'>
    <h2>Child Component 2</h2>
    <button onClick={()=>setSelectedOption("Option 2")}>option2</button>
</div>

)

}