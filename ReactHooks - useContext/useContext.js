import React from "react";
import MainComponents from "./components/MainComponents";
import LoginContextProvider from "./context/LoginContextProvider";

const App = () => {
  return (
    <LoginContextProvider>
      <MainComponents />
    </LoginContextProvider>
  );
};

export default App;
