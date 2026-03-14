import { Navigate, Route, Routes } from "react-router"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import NavBar from "./NavBar"
import PageNotFound from "./PageNotFound"
import College from "./College"
import Student from "./Student"
import Details from "./Details"
import Department from "./Department"
import UserList from "./UserList"
import UserDetails from "./UserDetails"
function App() {
  

  return (
    <>
    {/* <NavBar /> */}

    <Routes>

       <Route element={<NavBar/>}>
          <Route  path="/" element={<Home />}/>
          <Route path='/users/list?' element={<UserList />} />
          <Route path='/users/:id/:name?' element={<UserDetails />} />
          
            
           <Route  path='in'>
            <Route  path='user'>
                <Route path="/in/user/login" element={<Login />} />
                <Route path="/in/user/about" element={<About />} />
            </Route>
           </Route>

      </Route>

      

      <Route path="/college" element={<College />} >
      {/* <Route path="student"  element={<Student />}/> */}
      <Route index element={<Student />}/>
      <Route path="department"  element={<Department />}/>
      <Route path="details"  element={<Details />}/>

      </Route>


      <Route  path="/*" element={<PageNotFound />}/>

       {/* <Route  path="/*" element={<Navigate to="/" />}/>  */}
    </Routes>

    </>
   
  )
}

export default App
