import React, { useState } from 'react';


export default function Counter() {
    const[counter, setCounter] = useState(0);
 
    function onIncrease(){
        setCounter(counter + 1);
      }
    const onDecrease = () => {
        setCounter(counter - 1);
    }
  return (
    <div>
        <h1>Counter App</h1>
        <div style={{fontSize:50}}>{counter}</div>
        <button onClick={onIncrease}>Increase Button</button>
        <button onClick={onDecrease}>Decrease Button</button>
        <button onClick={() => setCounter(counter + 1)}>Increament</button>

    </div>
  )
}
