import { useEffect, useState } from 'react'
import College from './College'
import Student from './Student'
import User from './User'
import Input from './Input'
import Form from './Form'
import Skills from './Skills'
import RadioAndDropDown from './RadioAndDropDown'
import Loop from './Loop'
import ReuseComponent from './ReuseComponent'
import Users from './Users'
import Clock from './Clock'
import Colleges from './Colleges'
import Counter from './Counter'

function App() {

  const [count,setCount]=useState(0)
   const [data,setData]=useState(0)
 
  // function callOnce(){
  //   console.log("callOnce function called");

  // }

  // const [counter,setCounter]=useState(0)
  // const [data,setData]=useState(0)

  // useEffect(()=>{
  //   //callOnce();
  //   counterFunction();
  // },[counter])

  

  // function counterFunction(){
  //   console.log("CounterFunction "+counter);
  // }

  // let name="Ramkumar";
  // let age=24.5;
  // let email="ram@gmail.com";
  // let village="Raja Talab";

  // let userObject1={ name:"Naja ", age:65,email:"naja@gmail.com", village:"Naja Talab"}
  // let userObject2={name:"Rohan",age:21,email:"rohan@gmail" ,village:"Todarpur"}
  // let userObject3={name:"Mohan",age:51,email:"mohan@gmail" ,village:"Bodarpur"}
  // let userObject4={name:"Johan",age:21,email:"johan@gmail" ,village:"Modarpur"}

  //  let collegeNames=['KIT','NIT','VIT','GIT','MIT']
  //  const [student,setStudent]=useState()

 // const [color, setColor] = useState("red");

   
  // const collegeData = [
  //   {
  //     name: "KIT VNS",
  //     city: "VARANASI",
  //     website: "www.kit.com",
  //     students: [
  //       {
  //         name: "Ram",
  //         age: "24",
  //         email: "ram@gmail.com"
  //       },
  //       {
  //         name: "Aman",
  //         age: "26",
  //         email: "aman@gmail.com"
  //       },
  //       {
  //         name: "Raman",
  //         age: "34",
  //         email: "raman@gmail.com"
  //       }
  //     ]
  //   },

  //   {
  //     name: "NIT HYD",
  //     city: "HYDERABAD",
  //     website: "www.nit.com",
  //     students: [
  //       {
  //         name: "Nilech",
  //         age: "34",
  //         email: "n@gmail.com"
  //       },
  //       {
  //         name: "Jitesh",
  //         age: "34",
  //         email: "j@gmail.com"
  //       }
  //     ]
  //   },

  //   {
  //     name: "MIT NOI",
  //     city: "NOIDA",
  //     website: "www.mit.com",
  //     students: [
  //       {
  //         name: "Chaman",
  //         age: "34",
  //         email: "chaman@gmail.com"
  //       }
  //     ]
  //   },

  //   {
  //     name: "IIT RUR",
  //     city: "RURKI",
  //     website: "www.rit.com",
  //     students: [
  //       {
  //         name: "Yash",
  //         age: "22",
  //         email: "y@gmail.com"
  //       }
  //     ]
  //   }
  // ];


  
  return (
    <div>
    <Counter count={count} data={data} />
    <button onClick={()=>setCount(count+1)}>Counter</button>
     <button onClick={()=>setData(data+1)}>Data</button>









       {/* <h1>useEffect Hook</h1>
      <button onClick={()=>setCounter(counter+1)}>Counter{counter}</button>
      <button onClick={()=>setData(data+1)}>Data{data}</button> */}

      {/* <h2>Nested Looping with Component</h2>

      {
        collegeData.map((college, index) => (
          <Colleges key={index} college={college} />
        ))
      }
 */}


      {/* <h3>Digital Clock Using React JS</h3>

      <select onChange={(event) => setColor(event.target.value)}>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
        <option value="orange">Orange</option>
      </select>
       <Clock color={color} /> */}
      
      {/* <h1>Reuse Component</h1>
      <ReuseComponent /> */}
      {/* <h1>Loop Example</h1>
      <Loop  /> */}

   {/* <h1> Handle Check Boxes </h1>
   <RadioAndDropDown /> */}
   {/* <Skills/> */}
      {/* <Form/> */}
      {/* <Input /> */}
       {/* <College  name={collegeNames}/> */}
       {/* {student && <Student  name={student}/>} */}
       {/* <button onClick={()=>setStudent("Bhaskar")}> Update Student Name</button>
       */}

      {/* <h1>Propes in react js</h1> */}
      {/* <User name={name} age={age} email={email} village ={village} /> */}
      {/* <User  user={userObject1} />
      <User user={userObject2} />
      <User  user={userObject3} />
      <User user={userObject4} /> */}


     

    </div>
  );
}

export default App