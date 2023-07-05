import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { submit } from "../Redux/Form/FormAction";

const Form = () => {
    const dispatch=useDispatch()
    const [name,setName]=useState('')
  return (
    <div>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <input type="text" />
      <button onClick={()=>dispatch(submit({name}))}>submit</button>
    </div>
  );
};

export default Form;
