/*console.log(React);
console.log(ReactDOM); // to use in phone in ReactNative//ReactDOM=> use to print*/
/*
const domContainer = document.querySelector("#root");
const myElement =React.createElement("div", null,[React.createElement("p", null,"Ekra"),
    React.createElement("p", null,"Rimi")]);//createElement => reactelement create kore daye

ReactDOM.render(myElement,domContainer);
*/
const domContainer = document.querySelector("#root");

const Increment = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <h1 id="display">{counter}</h1>
      <div>
        <button id="button" onClick={() => setCounter(counter + 1)}>
          Increment +
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(
<div class = "container"><Increment />
<Increment />
<Increment /></div>, domContainer);
