import {Route, Routes} from 'react-router'
import UserList from "./UserList";
import UserAdd from "./UserAdd";
import UserEdit from './UserEdit';

export default  function App() {

  return (
    <div > 
      
   
   <Routes >
     <Route path="/" element={<UserList />} />
     <Route path="/add" element={<UserAdd />} />
     <Route path="/edit/:id" element={<UserEdit />} />
   </Routes>
   
    </div>
  )
}


