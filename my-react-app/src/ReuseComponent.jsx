import Users from "./Users";

function ReuseComponent(){

    const userData=[
 {id:1,name:"Ram",email:"ram@gmail.com",address:"VARAN"},
 {id:2,name:"Ramn",email:"raman@gmail.com",address:"HYD"},
 {id:3,name:"Aam",email:"am@gmail.com",address:"DEL"},
 {id:4,name:"Shyaam",email:"shyam@gmail.com",address:"BANG"},
 {id:5,name:"Rajesh",email:"rajesh@gmail.com",address:"BHADOHI"}
]

    return(
        <div>
            <h3>Reuse Components in Loop</h3>
            {
                userData.map((user)=>(
                    <div key={user.id}>
                        <Users  data={user}/> 

                    </div>
                ))
            }

        </div>
    )
}
export default ReuseComponent;