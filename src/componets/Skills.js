import React from 'react';

function Skills() {
    return (
        <div>
            <div className="container-f">
                <div className="heading_skills">
                    <h3>
                        Technical Skills
                    </h3>
                </div>
                <div className="icons-skills">
                    <i onclick="skills2()" className="fas fa-pencil-alt"></i>
                    <i onclick="skills()" className="fas fa-plus"></i>
                </div>
            </div>
            <div>
                {/* <% if(skills != null) { %>
    <% skills.forEach(function(skill, index){ %>
       
          <div className="skills_aling"> <p style="margin: 5px 20px; font-size: 20px;"><%= index+1%> . <%= skill.skills %></p> <i onclick="delete_skills('<%= skill._id %>')" className="far fa-trash-alt"></i></div>
    <% }) %>
<% } %> */}
            </div>



            <div id="skillsModal">
                <div className="modal-skills">
                    <span onclick="closeskills()" className="close-skills">&times;</span>
                    <div style={{color: "black", fontSize: "2rem"}}>
                        Add to another skills
                    </div>

                    <input id="skills_input" type="text" name="skills" style={{paddingTop: "10px"}} />
                    <button style={{float: "right", marginTop: "2rem", backgroundColor: "blue", borderRadius: "20px", color: "white", fontSize: "1.3rem", padding: "5px  10px",alignItems: "center", marginRight: "20px"}} onclick="add_skills()"> save  </button>

                </div>
            </div>

            <div id="skillsModal2">

                <div className="modal-skills2">
                    <span onclick="closeskills2()" className="close-skills">&times;</span>

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
            <div style={{float: "right", marginRight: "7rem",color: "gray"}} onclick="skills2()" id="skills_pencel">
                See all Skills
            </div>


       </div>
    );
}
export default Skills