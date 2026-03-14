import React, { Suspense, use } from "react";
const fetchData=()=>fetch("https://dummyjson.com/users").then((response)=>response.json());

const userResource= fetchData();

export default function App(){
  return(
    <div>
      <h1>use API in react Js</h1>

      <Suspense fallback={<p>Loading....</p>}>
        <Users  userResource={userResource}/>
      </Suspense>
    </div>
  );
}

const Users=({userResource})=>{
  
  const userdata= use(userResource);

  console.log(userdata.users);
  return(
   <div>
     <h1>Users List</h1>
    {
      userdata?.users?.map((user)=>(
        <h1>{user.firstName}</h1>
      ))
    }
   </div>
  )
}










// import { lazy, Suspense, useState } from "react";

// const User=lazy(()=>import('./User'));
//  export default function App(){

//   const [load,setLoad]=useState(false)
//   return(
//     <div>
//       <h1>Lazy loading </h1>
      
//       {
//         load? <Suspense fallback={<h3>Loading..</h3>}><User /></Suspense> :null
//       }
//       <button onClick={()=>setLoad(true)}>Load User</button>
//     </div>
//   )
//  }



// import { useReducer } from "react"
// const emptyData ={
//        name:'',
//        password:'',
//        email:'',
//        city:'',
//        address:''
//       }
//   const reducer=(data,action)=>{
  
//     return {...data,[action.type]:action.val}
//   }


// function App(){

  

// const [state,dispatch]= useReducer(reducer,emptyData)
// console.log(state);

//   return(
//     <div>

//       <h1> Use Reducer </h1>

//       <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'name'})} placeholder="enter name" /><br /><br />
//       <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'password'})} placeholder="enter password " /><br /><br />
//       <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'email'})} placeholder="enter email" /><br /><br />
//       <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'city'})} placeholder="enter city" /><br /><br />
//       <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'address'})} placeholder="enter address" /><br /><br />
      

//        <ul>
//         <li>Name:{state.name}</li>
//         <li>Password:{state.password}</li>
//         <li>Email:{state.email}</li>
//         <li>City:{state.city}</li>
//         <li>Address:{state.address}</li>
//        </ul>
//         <button onClick={()=>console.log(state)}>Add Details</button>
//     </div>
//   )
// }
// export default App











// import { useActionState } from "react"

// function App(){

//    const handleLogin = (prevData, formData) => {

//     let name = formData.get('name')
//     let password = formData.get('password')

//     let regex = /^[A-Z0-9]+$/i;

//     // Name validation
//     if(!name || name.length > 5){
//         return {
//           error: "Name cannot be empty and should not contain more than 5 characters",
//           name,
//           password
//         }
//     }

//     // Password validation
//     if(!regex.test(password)){
//         return {
//           error: "Password should not contain spaces or special characters",
//           name,
//           password
//         }
//     }

//     // Success
//     return {
//       message: "Login Done",
//       name,
//       password
//     }
//    }

//    const [data, action, pending] = useActionState(handleLogin, null)

//   return(
//     <div>
//       <h1>Validation with useActionState in React</h1>

//       {data?.message && <span style={{color:'green'}}>{data.message}</span>}
//       {data?.error && <span style={{color:'red'}}>{data.error}</span>}

//       <form action={action}>
//         <input
//           defaultValue={data?.name}
//           type="text"
//           name="name"
//           placeholder="enter name"
//         /><br /><br />

//         <input
//           defaultValue={data?.password}
//           type="text"
//           name="password"
//           placeholder="enter password"
//         /><br /><br />

//         <button disabled={pending}>
//           {pending ? "Submitting..." : "Login"}
//         </button>
//       </form>

//     </div>
//   )
// }

// export default App







// import { useActionState } from "react"

// function App(){
 
//    const handleLogin=(prevData,formData)=>{
//     let name=formData.get('name')
//     let password =formData.get('password')
//     let regex = /^[A-Z0-9]+$/i;


//     if(!name || name.lengh>5){
//          return {error:' Name can not be empty and Name should not contains more than 5 character ',name,password}
//     }
//     else if(regex.test(password)){
//         return {error:'Password should not contains Space or Special Symbols as character ',name,password}
//     }
//     else{
//          return {message:'Login Done',name,password}
//     }
    
//    }
//    const [data,action,pending]=useActionState(handleLogin)
   
//   return(
//     <div>
//       <h1>Validation with useActionState in React</h1>
//       {
//        data?.message &&<span style={{color:'green'}}>{data?.message}</span>
//       }
//       {
//        data?.error &&<span   style={{color:'red'}}>{data?.error}</span>
//       }
//       <form action={action}>

//        <input  defaultValue={data?.name} type="text" name="name" placeholder="enter name" /><br /><br />
//        <input defaultValue={data?.password} type="text" name="password" placeholder="enter name" /><br /><br />
//        <button  >Login</button>

//       </form>


//     </div>
//   )
// }
// export default App

























// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState('');
//   const [nameErr,setNameErr]=useState();
//   const [password, setPassword] = useState('');
//   const [passErr,setPassErr]=useState();


//   const handleName=(event)=>{
//     console.log(event.target.value);
//     if(event.target.value.length>5){
//       setNameErr("Please Enter Valid User name only 5 character allowed")
//     }
//     else{
//       setNameErr()
//     }
//   }


//    const handlePassword=(event)=>{
   
//    let regex=/^[A-Z0-9]+$/i; 
//     if(regex.test(event.target.value)){
//      setPassErr()
       
//     }
//     else{
//       setPassErr("Please Enter Valid User Password. only numbers and alphabets character allowed")
      
//     }
//   }
//   return (
//     <div>
//       <h1>Validation Part</h1>
//       <input className={nameErr?'error':''} type="text"  onChange={handleName} placeholder='Enter name' />
//       <span className='red-color'>{nameErr && nameErr}</span>
//       <br /><br />
//       <input className={passErr?'error':''} type="text" onChange={handlePassword} placeholder='Enter passwod' />
//        <span className='red-color'>{passErr && passErr}</span>
       
//       <br /><br />
//       <button disabled={passErr||nameErr}>Submit</button>
//     </div>  
//   )
// }

// export default App
