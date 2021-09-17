import React, { useState } from 'react';

function Counter(){
    const [count, setCount] = useState(0)
    function changeCounter(value) {
      if (value === 'increment') {
        setCount((prevState) => prevState + 1);
      }
      else if (value === 'decrement') {
        if(count <= 0){
          alert("Angka Tidak Boleh Minus!!!")
        }else{
          setCount((prevState) => prevState - 1);
        }
      }
    }
    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => changeCounter('decrement')}>-</button>
            <button onClick={() => changeCounter('increment')}>+</button>
        </div>
    )
}

export default Counter;