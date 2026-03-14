import { Link, useParams } from "react-router"

export default function UserDetails() {
  
    const paramsData=useParams();
    console.log(paramsData.id);

  return <div  style={{marginLeft:'20px'}}>
     <h1>User Details Page</h1>
     <h2>User ID:{paramsData.id}</h2>
     <h4><Link to='/users'><h3>back</h3></Link></h4>
      </div>
  
    
}


