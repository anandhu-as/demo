import React from "react";
import { useSelector } from "react-redux";

const Show = () => {
const {name,age}=useSelector((state)=>state.form)
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Age:{age}</h1>
    </div>
  );
};

export default Show;
