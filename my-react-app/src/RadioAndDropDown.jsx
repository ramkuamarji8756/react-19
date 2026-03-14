import { useState } from "react";

function RadioAndDropDown(){
    const [gender,setGender]=useState('others');
    const [city,setCity]=useState('delhi');
    return(
        <div>
            <h2>Handle Radio And Drop Down</h2>
            <input type="radio" onChange={(event)=>setGender(event.target.value)}  name="gender"
             value={"male"}   checked={gender=='male'} id="male" /> 
            <label htmlFor="male">Male</label>

            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender"  value={"female"} checked={gender=='female'} id="female" />
            <label htmlFor="female">Female</label>

            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" value={"others"} checked={gender=='others'} id="others" />
            <label htmlFor="others">Others</label>
            <h3>Select Gender: {gender}</h3>
            <br /><br /><br />
            <h4>Select City</h4>
            <select  onChange={(event=>setCity(event.target.value))} defaultValue={"delhi"}>
             <option value="noida">Noida</option>
             <option value="gurgaon">Gurgaon</option>
             <option value="delhi">Delhi</option>
             <option value="hyderabad">Hyderabad</option>
             <option value="others">Others City</option>
            </select>
         <h4>Selected city: {city}</h4>

        </div>
    )
}
export default RadioAndDropDown;