import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { submit } from '../features/FormSlice'

const Form = () => {
    const [name,setName]=useState('')
    const dispatch=useDispatch()
  return (
    <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
   <button onClick={()=>dispatch(submit({name}))}>submit</button>
    </div>
  )
}

export default Form