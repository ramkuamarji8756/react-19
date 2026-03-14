import { Link } from "react-router"

export default function UserList() {
  
const userData=[

  {id:1,name:"Ramkumar"},
  {id:2,name:"Anand Kumar"},
  {id:3,name:"Anil Sidhu"},
  {id:4,name:"Rajesh"},
  {id:5,name:"Om Prakash"},
  {id:6,name:"Shiv Poojan"}

]

  return <div >
     <h1>User List Page</h1>
     {
      userData.map((item)=>(
      <div style={{marginLeft:'20px'}}>
        <h4><Link to={"/users/"+item.id} >{item.name}</Link></h4>
        
      </div>

      ))
     }

     <h1>User List with name in URL </h1>
     {
      userData.map((item)=>(
      <div style={{marginLeft:'20px'}}>
        <h4><Link to={"/users/"+item.id+"/"+item.name} >{item.name}</Link></h4>
        
      </div>

      ))
     }
      </div>
  
    
}


