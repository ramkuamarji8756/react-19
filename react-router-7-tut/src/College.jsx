import { Link, NavLink, Outlet } from "react-router";

export default function College() {
  

  return <div className="college" style={{textAlign:'center'}}>
     <h1>College Page</h1>
     <Link to="/"><h3>Go Back to Home</h3></Link> <br />
     <NavLink  className="link" to="">Student</NavLink>
     <NavLink className="link" to="department">Departments</NavLink>
     <NavLink className="link" to="details">College details</NavLink>

     
     <Outlet />
    </div>
  
    
}


