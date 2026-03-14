import { Link } from "react-router";

export default  function PageNotFound(){
    return(
        <div style={{textAlign:'center'}}> 
        <h1>Page Not Found</h1>
            <div>
                <Link to="/">Go to Home Page</Link>
            </div>
            
            <img style={{width:"60%"}} src="https://img.freepik.com/free-vector/404-error-web-template-with-funny-monster_23-2147788958.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
        </div>
    )
}