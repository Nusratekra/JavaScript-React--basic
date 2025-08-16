import React, { useState, useRef } from "react";

const App = () => {
  const [name, setName] = useState("");
  const count = useRef(0);
  count.current += 1; 

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}
      />
      <h2>Name : {name}</h2>
      <h2>Render : {count.current}</h2>
    </div>
  );
};

export default App;

