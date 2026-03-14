const Users=({data})=>{

   
    return(
        <div style={{
    border: "1px solid green",
    padding: "10px",
    margin: "10px",
    width: "400px",
    borderRadius: "10px"
}}>
            <h4>ID: <span style={{color:"skyblue"}}>{data.id}</span></h4>
            <h4>Name: <span style={{color:"skyblue"}}>{data.name}</span></h4>
            <h4>Email: <span style={{color:"skyblue"}}>{data.email}</span></h4>
            <h4>Address: <span style={{color:"skyblue"}}>{data.address}</span></h4>
        </div>
    )
}
export default Users;