import React, {useState} from "react";

const App = () => {
  //const array = useState(0);
  //const counter = array[0];
  //const setCounter = array[1]

  //array distructaring
  //const [counter, setCounter] = useState(0);
  //const [name, setName] = useState('')
  const [details, setDetails] = useState({counter :0, name: ""})
  function increaseCounter(){
    //setCounter(counter +1)
    setDetails((prev) =>({
      ...prev,
      counter : prev.counter +1,
    }

    ))
  }
  return (
    <div>
      {/*<input type="text" onClick={e => setName(e.target.value)} />*/}
      <input type="text" onClick={e => e.target.value} />
      <h1>{details.name} has clicked {details.counter} times! </h1>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  );
}

export default App;
