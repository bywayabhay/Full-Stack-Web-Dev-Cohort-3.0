import React, { useState } from "react";

function App() {
  // let result = useState();
  //destructuring 
  let [count, setCount] = useState(0);
  // console.log(result);
  //useState-> [state , setFunctions]
  // state -> is the actual value(variable, object{}...)
  // setFunctions -> has two work (i) update state (ii) rerender its parent functional component
  
  

  return (
    <div>
      <h1>Count is -{count}</h1>
      <button onClick={() => {
        setCount(++count);
      }}>Increment</button>
    </div>
  );
}

export default App;

// export -> ek key:value export krta and uska name import krte time must be same
// default export -> global export whose name can be anythiong and there is only one default export
