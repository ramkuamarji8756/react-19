import { useState } from "react";

function Skills(){

    const [skills,setSkills]=useState([]);

    const handleSkills =(event)=>{
        console.log(event.target.value,event.target.checked);
        if(event.target.checked){
            setSkills([...skills,event.target.value])
        }
        else{
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
    }
    return(
        <div>
            <h3> Select your Skills</h3>
            <input type="checkbox"  onChange={handleSkills} id="php" value="php" />
            <label htmlFor="php">PHP</label> <br /><br />

             <input type="checkbox" onChange={handleSkills} id="java" value="java" />
            <label htmlFor="java">JAVA</label><br /><br />

             <input type="checkbox"  onChange={handleSkills} id="spring" value="spring" />
            <label htmlFor="spring">Spring Boot</label><br /><br />
            
             <input type="checkbox" onChange={handleSkills} id="react" value="react" />
            <label htmlFor="react">React JS</label>

            <h2>{skills.toString()}</h2>

        </div>
    )
}
export default Skills;