import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Increment counter</button>
      <h3>Input text: {input}</h3>
      <h3>Count: {count}</h3>
      <hr />
      <ChildComponent count={count} />
    </div>
  );
}

const ChildComponent = React.memo(function ({ count }) {
  console.log(count);
  console.log("child rendering");
  return (
    <div>
      {count}
    </div>
  )
})