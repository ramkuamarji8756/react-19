import { useState } from "react";

function Form(){

    const [name,setName]=useState('')
    const[password,setPassword]=useState('')
    const[email,setEmail]=useState('')
    return(
       <div>
        <h1>Conroller Component </h1>
        {/* <form action="" method="get"> */}
         <h2>User Form</h2>
        Name:  <input type="text" value={name} onChange={(event)=>setName(event.target.value)} name="name" placeholder="User Name" /> <br /><br />
        Password: <input type="password"  value={password} onChange={(event)=>setPassword(event.target.value)} password="password" placeholder="Password"/><br /><br />
        Email: <input type="text"  value={email} onChange={(event)=>setEmail(event.target.value)} email="email" placeholder="Email Id"/><br /><br />

          <button onClick={()=>{setEmail(''); setName('');setPassword('')}}>Clear</button>
         <button >Submit</button>

         <h3>Name:{name}</h3>
         <h3>Password:{password}</h3>
         <h3>Email:{email}</h3>
         {/* </form> */}

         
       </div>
    )
}
export default Form;