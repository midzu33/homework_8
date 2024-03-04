import React, { useState, useCallback } from "react";
let funccount = new Set();
const App = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const incrementCounter = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const decrementCounter = useCallback(() => {
    setCount(count - 1);
  }, [count]);
  const incrementNumber = useCallback(() => {
    setNumber(number + 1);
  }, [number]);

  funccount.add(incrementCounter);
  funccount.add(decrementCounter);
  funccount.add(incrementNumber);
  return (
      <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "end",
            margin: "auto",
            marginTop: "150px",
            width: "350px",
            padding: "20px",
            height: "300px",
            fontSize: "20px",
            boxShadow: "0px 2px 8px 4px grey",
            borderRadius: "5px",
            backgroundColor:"blue",
          }}
      >
        {" "}
        <p>Count: {count}</p>
        <p>Function Count: {funccount.size}</p>
        <button onClick={incrementCounter}>
          Увеличить счетчик
        </button>
        <button onClick={decrementCounter}>
          Счетчик уменьшения
        </button>
        <button onClick={incrementNumber}>
          Увеличить число
        </button>
      </div>
  );
};

export default App;
