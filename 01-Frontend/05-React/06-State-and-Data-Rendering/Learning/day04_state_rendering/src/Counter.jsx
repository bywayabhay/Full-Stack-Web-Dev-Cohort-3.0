import React, { useState } from 'react'

function Counter() {
    let [count, setCount] = useState(0);
    console.log("Re rendering...");
    console.log(count);
  return (
    <div>
      <h1 className='text-7xl'>Count is - {count}</h1>
      <button className="rounded-full bg-yellow-600 px-6 py-3 text-white font-medium"
      onClick={()=>{
        // setCount(++count);
        // setCount(++count);
        // setCount(++count);
        //batching -> if setFunction is called many times in a funtion is runs only one time
        //setFunction has one more property: prev(current)

        setCount((prev)=> ++prev)
      }}>Increment</button>
    </div>
  )
}

export default Counter
