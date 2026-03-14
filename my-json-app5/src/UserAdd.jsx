import { useState } from "react"
import { NavLink, useNavigate } from "react-router"

function UserAdd(){

    const [name,setName]=useState('')
     const [age,setAge]=useState('')
      const [email,setEmail]=useState('')
       const navigete=useNavigate();

      const createUser=async()=>{
        console.log(name,age,email);
        const url="http://localhost:3000/users";
        let response= await fetch(url,{
            method:'post',
            body:JSON.stringify({name,email,age})
        });

        response= await response.json();
        if(response){
            alert("new user added");
             navigete('/')
            
        }

      }

    return (
        <div style={{textAlign:"center"}}>
            <ul className='nav-list'>
            <li><NavLink to="/">List</NavLink></li>
            <li><NavLink to="/add">Add User</NavLink></li>
            </ul>

            <h1>Add  New User</h1>
            <input type="text" onChange={(event)=>setName(event.target.value)} placeholder="Enter Name" />
            <br /><br />
            <input type="text"  onChange={(event)=>setAge(event.target.value)} placeholder="Enter Age" />
             <br /><br />
            <input type="text"  onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email" />
             <br /><br />
             <button onClick={createUser}>Add User</button>
        </div>
    )
}

export default UserAdd