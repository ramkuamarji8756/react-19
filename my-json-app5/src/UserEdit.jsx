import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router";

 function UserEdit(){

    const {id}=useParams();

        const [name,setName]=useState('')
        const [age,setAge]=useState('')
         const [email,setEmail]=useState('')
         const navigete=useNavigate();

       useEffect(()=>{

        getUserData()

    },[])


     const url="http://localhost:3000/users/"+id;
    const getUserData=async()=>{
        
       
        let response= await fetch(url);
        response = await response.json();
        setName(response.name)
        setAge(response.age)
        setEmail(response.email)

    }

    const updateUserData=async()=>{
        console.log(name,age,email);
        let response= await fetch(url,{
            method:'Put',
            body:JSON.stringify({name,age,email})

        });
        response= await response.json();
        console.log(response);
        if(response){
            alert("User Details Updated..");
            navigete('/')

        }
    }

    return(
   
        <div style={{textAlign:'center'}}>
            <ul className='nav-list'>
            <li> <NavLink to="/">List</NavLink> </li>
            <li> <NavLink to="/add">Add User</NavLink></li>
           </ul>

           <h1> Edit User Details</h1>
           <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder=" User Name" />
            <br /><br />
            <input type="text" value={age} onChange={(event)=>setAge(event.target.value)} placeholder=" User Age" />
            <br /><br />
            <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder=" User Email" />
            <br /><br />
            <button onClick={updateUserData}>Update User</button>
        </div>
    )
}
export default UserEdit;