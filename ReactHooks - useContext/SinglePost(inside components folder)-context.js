import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContextProvider";

const SinglePost = () => {
  const login = useContext(LoginContext);
  console.log(login);

  return <div>{login ? "User is logged in" : "User is not logged in"}</div>;
};

export default SinglePost;
