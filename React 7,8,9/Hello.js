import React from "react";

const Hello = (props) => {
  console.log(props);
  return (
    <div className="greeting-container">
      <h1>
        JSX {props.name} {props.heroName}</h1>
        {props.children}
    </div>
  );
};
//without jsx
/*const Hello = () =>{
    return React.createElement('div', null, React.createElement('h1', null, 'JSX'));
}*/
//props=> it helps to be the component dynamic,as if we want to print hello aName multiple times we will use props
export default Hello