import React,{useState,useEffect} from 'react';
import   Axios from 'axios';
/* eslint-disable */

function  add_skills() {
    let a=document.getElementById("skills_input").value
    let id=localStorage.getItem('id')

    fetch("http://127.0.0.1:3000/skills", {
        method: "POST",
        headers: {'Content-Type': 'application/json'} ,
        body: JSON.stringify({skills:a,userid:id})
      }).then(res => {
        console.log("Request complete! response:", res);
        location.reload();

      });
}
function  delete_skills(id) { 
    fetch("http://127.0.0.1:3000/skills/"+id,{
        method: "DELETE",
      }).then(res => {
        console.log("Request complete! response:", res);
        location.reload();
  
      });
  }

function skills() { 
    let  modal = document.getElementById("skillsModal");
    modal.style.display = "block";   
}
function skills2() { 
    let  modal = document.getElementById("skillsModal2");
    modal.style.display = "block";   
  }
  function closeskills2() { 
    let  modal = document.getElementById("skillsModal2");
    modal.style.display = "none";   
  }
  
function closeskills() { 
    let  modal = document.getElementById("skillsModal");
    modal.style.display = "none";   
}
function Skills() {
    const [skill, setSkills] = useState([""])
    useEffect(() => {
        let id=localStorage.getItem('id')
        Axios.get("http://127.0.0.1:3000/skills/"+id)
        .then((res) =>{
            setSkills(res.data)
            console.log(res.data,"a")
            
        })
    },[])


    return (
        <div>
            <div className="container-f">
                <div className="heading_skills">
                    <h3>
                        Technical Skills
                    </h3>
                </div>
                <div className="icons-skills">
                    <i onClick={skills2} className="fas fa-pencil-alt"></i>
                    <i onClick={skills} className="fas fa-plus"></i>
                </div>
            </div>
            <div>


                {/* <% if(skills != null) { %>
    <% skills.forEach(function(skill, index){ %>
       
         
    <% }) %>
<% } %> */}
{skill.map((val,i) => {

return  <div className="skills_aling"> <p style={{margin: "5px 20px", fontSize: "20px"}}> {i+1}.{val.skills}</p> <i  onClick={ () => {delete_skills(val._id)}}  className="far fa-trash-alt"></i></div>})} 
            </div>


            <div id="skillsModal">
                <div className="modal-skills">
                    <span onClick={closeskills} className="close-skills">&times;</span>
                    <div style={{color: "black", fontSize: "2rem"}}>
                        Add to another skills
                    </div>

                    <input id="skills_input" type="text" name="skills" style={{paddingTop: "10px"}} />
                    <button style={{float: "right", marginTop: "2rem", backgroundColor: "blue", borderRadius: "20px", color: "white", fontSize: "1.3rem", padding: "5px  10px",alignItems: "center", marginRight: "20px"}}  onClick={add_skills}> save  </button>

                </div>
            </div>

            <div id="skillsModal2">

                <div className="modal-skills2">
                    <span onClick={closeskills2} className="close-skills">&times;</span>

                    <h3>
                        <i className="fas fa-arrow-left"></i>  Skills
                        <span style={{float: "right", marginRight: "40px", color: "gray", fontSize: "20px"}}>
                            <i className="fas fa-ellipsis-h"></i>
                            <span style={{marginLeft: "2rem"}}>
                                <i className="fas fa-plus"></i>
                            </span>

                        </span>

                    </h3>
                    <div>
                        {/* <% if(skills != null) { %>
        <% skills.forEach(function(skill, index){ %>
          <hr>
          <h5>
            <%= index+1%> . <%= skill.skills %>
          
            <i  style="float: right; font-size: 15px;" className="fas fa-pencil-alt"></i>
          </h5>

        <% }) %>
    <% } %> */}
                    </div>


                </div>


            </div>
            <div style={{float: "right", marginRight: "7rem",color: "gray"}} onClick={skills2} id="skills_pencel">
                See all Skills
            </div>


       </div>
    );
}
export default Skills
