import React, {useState, useEffect} from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setotherCount] = useState(5);
  const [time, setTime] = useState(0);
  //useEffect(() => {
   // document.title =`${count} new Messages!`
  //})
  useEffect(() => {
    document.title = `${count} and ${otherCount} new Messages!`;
  }, [otherCount, count]); 

  useEffect(() => {
    const timer = setInterval(() =>{
      setTime(time + 1);
    },1000);

    return () => {
      clearInterval(timer);
    }
  });
  return (
    <div>
      <h3>{count} new Messages! </h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <h3>Other Counter : {otherCount} </h3>
      <button onClick={() => setotherCount(otherCount + 5)}>Increase by 5</button>
      <h1>{time} in seconds</h1>
    </div>
  );
}

export default App;
