import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./ContextData";

export default function App(){

  const [subject,setSubject]=useState('')

  return(
    
    <div style={{backgroundColor:"yellow", padding:10}}>
     <SubjectContext.Provider value={subject}>
      <select value={subject} onChange={(event)=>setSubject(event.target.value)}>
        <option value=""> Select Subject</option>
        <option value="Maths">Maths</option>
        <option value="Hindi">Hindi</option>
        <option value="English">English</option>
        <option value="Science">Science</option>
        <option value="History">History</option>
      </select>
       <h1>Context API</h1>
      <button onClick={()=>setSubject('')}>Clear Subject</button>

     < College />
     </SubjectContext.Provider>
    </div>
  );
}


/*import { useId } from "react"

export default function App(){
  
  return(
    <div>
      <UserForm />
      <UserForm />

      
       
    </div>
  )
}



 function UserForm(){
  const user =useId();
   
  return(
    <div>
      <form action="">
        <label htmlFor={user+"name"}>Enter User Name:</label>
   <input type="text" id={user+"name"} placeholder="enter name" />
   
   <br /><br />

   <label htmlFor={user+"password"}>Enter User Password:</label>
   <input type="text" id={user+"password"} placeholder="enter password" />

   <br /><br />

   <label htmlFor={user+"skills"}>Enter User Skills:</label>
   <input type="text" id={user+"skills"} placeholder="enter skills" />

  <br /><br />

   <label htmlFor={user+"terms"}>Terms and Condition::</label>
   <input type="checkbox" id={user+"terms"} placeholder="enter terms" />


      </form>

      <hr />
    </div>
  )
} */







/*import { useActionState } from "react";

export default function App(){

  const handleSubmit=async (previousData,formData)=>{
    let name=formData.get('name');
    let password=formData.get('password');
   
    await new Promise(res=>setTimeout(res,2000));
    // console.log("HandleSubmit called..",name,password);
     if(name && password)
      {
      return { message:'Data Submitted',name,password}
      }
      else{
        return {error:'Failed to Submit! Please Enter Proper data...',name,password}
      }

  }

  const [data, action, pending]=useActionState(handleSubmit,undefined);

  console.log(data);

  return(
    <div>
    <h1>useActionState hook in React js</h1>
     <form action={action}>

      <input defaultValue={data?.name} type="text" placeholder="enter name" name="name" />
      <br /><br />
      <input  defaultValue={data?.password} type="text" placeholder="enter password " name="password" />
      <br /><br />

      <button disabled={pending}>Submit Data</button><br />
     
     </form>
      {
        data?.error && <span style={{color:'red'}}>{data?.error}</span>
      }
      {
        data?.message && <span style={{color:'green'}}>{data?.message}</span>
      }

        <h3>Name:{data?.name}</h3>
        <h3>Password:{data?.password}</h3>

    </div>
  );
}*/


/*import { useState } from "react";

export default function App(){

  const [data,setdata]=useState([
    'Anil','Sam','Dainial'
  ]);


  const handleUser=(name)=>{
   data[data.length-1]=name;
    console.log(data);
     setdata([...data])
  }

  const handleAge=(age)=>{
   dataDetails[dataDetails.length-1].age=age;
    console.log(dataDetails);
     setdataDetails([...dataDetails])
  }

const [dataDetails,setdataDetails]=useState([
  {   name:'Anil', age:'25' },
  {   name:'Sam', age:'26' },
  {   name:'Ram', age:'23'},
  {   name:'Gagan', age:'21'}

])

  return(
    <div>
      <h1>Upating Array in state</h1>
      <input type="text" placeholder="Enter last User Name" onChange={(event)=>handleUser(event.target.value)} />
      {
        data.map((item,index)=>(
          <h3 key={index}>{item}</h3>
        ))
      }

      <hr />

         <input type="text" placeholder="Enter last User Age" onChange={(event)=>handleAge(event.target.value)} />
     

       {
        dataDetails.map((item,index)=>(
          <h4 key={index}>{item.name},{item.age}</h4>
          //<h4 key={index}>{item}</h4>
        ))
       }

       </div>

       
  );
} */




//import { useState, useTransition } from "react";
//import { useFormStatus } from "react-dom";
//import { useTransition } from "react";
//import AddUser from "./AddUser";
//import DisplayUser from "./DisplayUser";
//import { useState } from "react"

/*import { useState } from "react";

export default function App() {

  const [data,setData]=useState({
    name:'Ram',
    address:{
      city:'VNS',
       country:'India'
     }

  })

  const handleName=(val)=>{
   data.name=val
  //  let tempData=data;
  //  tempData.name=val
    setData({...data})
   
  }
 const handleCity=(city)=>{
  data.address.city=city
  setData({...data,address:{...data.address,city}})
 }

const handleCounty=(country)=>{
  data.address.country=country
  setData({...data,address:{...data.address,country}})
}

return(
  <div>
   <h1> Updating Objects in state </h1>
  

   <input type="text" placeholder="Update  Name" onChange={(event)=>handleName(event.target.value)} />
   <input type="text" placeholder="Update  City" onChange={(event)=>handleCity(event.target.value)} />
   <input type="text" placeholder="Update  Country" onChange={(event)=>handleCounty(event.target.value)} />
   
   <h2>Name: {data.name}</h2>
   <h2>City: {data.address.city}</h2>
   <h2>Country: {data.address.country}</h2>

  </div>
)


} */


/* const [user,setUser]=useState('')
  return(
    <div>
     <AddUser  setUser={setUser}/>
     <DisplayUser user={user} />

    </div>
  );
}*/


  /*
  const [users,setUsers]=useState([]);
  const [user,setUser]=useState('');
const handleAddUsers=()=>{
  setUsers([...users,user])

}

const total=users.length;
const last=users[users.length-1];
const unique= [...new Set(users)].length;

  return(
    <div>
      <h2>Total User: {total}</h2>
      <h2>Last User: {last}</h2>
      <h2> Total Unique User: {unique}</h2>

       <input type="text"  onChange={(event)=>setUser(event.target.value)} placeholder="add New User" />
       <button onClick={handleAddUsers}>Add User</button>
       {
        users.map((item,index)=>(
          <h4 key={index}>{item}</h4>

        ))
       }
    </div>
  )
} */

  
  
  
  
  
  
  /*const [pending, startTransition] = useTransition();

  const handleButton = () => {
    startTransition(async () => {
      await new Promise(res => setTimeout(res, 5000));
    });
  };

  return (
    <div>
      <h1>useTransition Hook in React 19</h1>

      {pending ? (
        <img
          style={{ width: "200px" }}
          src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif"
          alt="loading"
        />
      ) : null}

      <button disabled={pending} onClick={handleButton}>
        Click
      </button>
    </div>
  );
} */



/*{
  
  const handleSubmit = async () => {
    await new Promise(res => setTimeout(res, 5000));
    console.log("submit");
  }

  function CustomerForm(){
    const { pending } = useFormStatus();
    console.log(pending);

    return(
      <div>
        <input type="text" placeholder="Enter Name" />
        <br /><br />
        <input type="text" placeholder="Enter Password" />
        <br /><br />
        <button type="submit" disabled={pending}>
          {pending ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    )
  }

  return (
    <>
      <div>
        <h1>useFormStatus Hook in React js 19+</h1>
        <form action={handleSubmit}>
          <CustomerForm />
        </form>
      </div>
    </>
  )
}*/

//export default App