function Loop(){

const userData=[
 {id:1,name:"Ram",email:"ram@gmail.com",address:"VARAN"},
 {id:2,name:"Ramn",email:"raman@gmail.com",address:"HYD"},
 {id:3,name:"Aam",email:"am@gmail.com",address:"DEL"},
 {id:4,name:"Shyaam",email:"shyam@gmail.com",address:"BANG"},
 {id:5,name:"Rajesh",email:"rajesh@gmail.com",address:"BHADOHI"}
]

return(
<div>
<h2>LOOPS IN REACT USING MAP FUNCTION</h2>

<table border="1">
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Address</th>
</tr>
</thead>

<tbody>
{
userData.map((user)=>(
<tr key={user.id}>
<td>{user.id}</td>
<td>{user.name}</td>
<td>{user.email}</td>
<td>{user.address}</td>
</tr>
))
}
</tbody>

</table>
</div>
)
}

export default Loop;