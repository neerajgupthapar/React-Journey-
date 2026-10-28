
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(1);

  function decrese(){
    if(count>0){
      setCount(count-1)
    }else{
      setCount(0)
    }
  }

  function addvalue(){
    if(count<20){
      setCount(count+1)
    }else{
      setCount(20)
    }
  }
  return (
    <div>
      <h1>Welcome to my webpage</h1>
      <p>Your rank is {count}</p>

      <button onClick={addvalue}>
        Increase
      </button>

      <button onClick={decrese}>
        Decrease
      </button>
    </div>
  );
}
