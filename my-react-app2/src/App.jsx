import { Button,Alert,Nav,Navbar,NavDropdown,Container } from "react-bootstrap"
import { useRef } from "react"
import User from "./User";

function App() {

 
 
  /*const inputRef= useRef(null);
  const h1Ref=useRef(null);
  const inputHandler=()=>{
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color='red'
    inputRef.current.placeholder='Enter Pass word'
    inputRef.current.value='12123'    
  }

  const toggleHandler=()=>{
    if(inputRef.current.style.display!='none'){
      inputRef.current.style.display='none'
    }
    else{
      inputRef.current.style.display='inline'
    }
  }

  const h1Handler=()=>{
   h1Ref.current.style.color="green"
  }*/

   const userRef=useRef();
   const passwordRef=useRef();

   const handleForm=(event)=>{
  
    event.preventDefault();
    const user= document.querySelector("#user").value;
    const password=document.querySelector("#password").value;
    console.log(user, password);
    
    
   }

   const handleFormRef=(event)=>{
  
    event.preventDefault();
    const user=userRef.current.value
    const password=passwordRef.current.value
    console.log("handleFormRef",user,password);
    
    
    
   }


   const displayName=(name)=>{
    alert(name)
   }

   const getUser=()=>{
    alert("Get User Function call")
   }

  return (
    <>

    <h1>Call Parent component Function from child  component </h1>
   <User displayName={displayName} name="Rajesh"  getUser={getUser}/>
   <User displayName={displayName}  name ="OM" getUser={getUser} />
   <User displayName={displayName}  name="Shiv" getUser={getUser}/>
   <User displayName={displayName}  name="Ram" getUser={getUser}/>
    
    <hr />

    

    <h1>UnControlled Component</h1>
    <form action="" method="post" onSubmit={handleForm}>
      <input type="text" id="userRef" placeholder="Enter User Name" />
      <br /><br />
      <input type="password"  id="passwordRef" placeholder="Password" />
      <br /><br />
      <button>Submit</button>

    </form>
    <hr />


    <h1>UnControlled Component  with useRef</h1>
    <form action="" method="post" onSubmit={handleFormRef}>
      <input type="text" ref={userRef} id="user" placeholder="Enter User Name" />
      <br /><br />
      <input type="password"  ref={passwordRef} id="password" placeholder="Password" />
      <br /><br />
      <button>Submit with ref</button>

    </form>








 {/* <h1>useRef</h1>
 <Button onClick={toggleHandler}> Toggle Button</Button>
 <input ref={inputRef} type="text" placeholder="Enter User Name " />
 <Button onClick={inputHandler}>Foccus on Input field</Button>

 <h1 ref={h1Ref}>code step by step</h1>
 <Button onClick={h1Handler}>Handler</Button> */}
   

    {/* <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 

<div>
  <h1>Add Bootstrap in react js </h1>

  
  <Alert variant="primary">Hello, BT Installed</Alert>
  <Button onClick={()=>alert("Boot Strap Alert ")} variant="danger">BootStrap  Button</Button>
  <Button variant="light">OK</Button>
  <Button variant="warning">OK</Button>
  <Button variant="info">OK</Button>
   <Button onClick={()=>alert("Simple boot Strap Alert ")} variant="dark">Simple Button</Button>

  

</div> */}


    </>
  )
}

export default App
