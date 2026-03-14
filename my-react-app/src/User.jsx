function User({user}){
   
  return(
    <div style={{color:"green",border:"5px solid green", width:"200px", margin:"10px"}}>
       <hr/>
      <h2>User Component</h2>
      <h6 style={{color:'red'}}>Name: {user.name}</h6>
      <h6>Age: {user.age}</h6>
      <h6>Email: {user.email}</h6>
      <h6>Village: {user.village}</h6>

     
    </div>
  )
}

export default User