import React, { useState } from 'react'
let Message = () => {
    let [message, setMessage]= useState(0)
return (<>
    <h1>message : {message}</h1>
    <button onMouseOver={()=>{setMessage (message + 1) }}> incr </button>
    <button onMouseOver={()=>{setMessage (message - 1)}}>  decr </button>
</>)
}
export default Message