import { useState } from "react";

function Input(){
    const [val,setVal]=useState("Ramkumar")
    return(
        <div >
            <h1 style={{color:"yellowgreen", width:"2px" ,margin:"2px"}}> Get Input Field  </h1>
        <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter the User Name" />

        <h3>User:{val}</h3>
        <button onClick={()=>setVal("")}>Clear Value</button>
        </div>

    )
}

export default Input;