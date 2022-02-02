import React from 'react';
function experience() { 
  let  modal = document.getElementById("experienceModal");
  modal.style.display = "block";   
}
function closeexperience() { 
  let  modal = document.getElementById("experienceModal");
  modal.style.display = "none";   
}
function experience2() { 
  let  modal = document.getElementById("experienceModal2");
  modal.style.display = "block";   
}
function closeexperience2() { 
  let  modal = document.getElementById("experienceModal2");
  modal.style.display = "none";   
}

function experience3() { 
  let  modal = document.getElementById("experienceModal3");
  modal.style.display = "block";   
}
function closeexperience3() { 
  let  modal = document.getElementById("experienceModal3");
  modal.style.display = "none";   
}

function experience4() { 
  let  modal = document.getElementById("experienceModal4");
  modal.style.display = "block";   
}
function closeexperience4() { 
  let  modal = document.getElementById("experienceModal4");
  modal.style.display = "none";   
}

function  experince_add() {
  let a=document.getElementById("experience_name").value;  
  let b=document.getElementById("experience_ImageUrl").value; 
  let c=document.getElementById("Title").value
  let id=localStorage.getItem('id')
  console.log(c)

  
  fetch("/experince", {
      method: "POST",
      headers: {'Content-Type': 'application/json'} ,
      body: JSON.stringify({experince:a,ImageUrl:b,Title:c,userid:id})
    }).then(res => {
      console.log("Request complete! response:", res);
      location.reload();

    });
}
function Experience() {
  return (
    <div>
      <div className="container-f">
    <div className="heading_skills">
        <h3>
            Experience
        </h3>
    </div>

    <div className="icons-skills">
        <i  onClick={experience2} className="fas fa-pencil-alt"></i>
        <i  onClick={experience}  className="fas fa-plus"></i>
    </div>
</div>
    {/* <div>
        <div>
             if(experince !=null) { %>
                <% experince.forEach(function(ex, index){ %>

                    <div className="skills_aling">
                        <div style="display: flex; align-items: center;">
                            <img src="<%= ex.ImageUrl %>" width="40px" height="40px">

                            <div>
                                <p style="margin: 5px 20px; font-size: 20px;">
                                    <%= ex.Title %>
                                </p>
                                <p style={"margin: "5px 20px" fontSize: "16px"}}>
                                    <%= ex.experince %>
                                </p>
  
    
                            </div>
                        </div>
                        



                    // <div>
                    //       <i onclick="delete_experince('<%= ex._id %>')" className="far fa-trash-alt"></i>
                    //   </div>

                    //  </div>



                    // <% }) %>
                    //     <% } %>


        // </div>
    // </div> */}
    

 
    <div id="experienceModal">

        <div className="modal-experience">
            <span  onClick={closeexperience}  className="close-experience">&times;</span>
            <div style={{fontSize: "25px", paddingLeft: "10px",fontStyle: "italic"}}>
                Add experience
                <div style={{fontSize: "22px", marginTop: "10px"}}>
                    *Title
                    <div>
                        <div className="form-group  row name_box ">
                            <input id="Title" style={{height: "40px", marginTop: "20px"}} className="col-sm-11 name  form-control"
                                type="text" name="fname" placeholder="Ex:- Boston University"
                                required/>
                        </div>
                    </div>
                </div>
                <div style={{fontSize: "22px", marginTop: "10px"}}>
                    Company name
                    <div>
                        <div className="form-group  row name_box ">
                            <input id="experience_name" style={{height: "40px", marginTop: "20px"}}
                                className="col-sm-11 name  form-control" type="text"  name="fname"
                                placeholder="Ex:microsoft" required/>


                        </div>
                    </div>
                    <div style={{fontSize: "22px", marginTop: "10px"}}>
                        *ImageUrl
                        <div>
                            <div className="form-group  row name_box ">
                                <input id="experience_ImageUrl" style={{height: "40px", marginTop: "20px "}}
                                    className="col-sm-11 name form-control " type="text"
                                    name="fname" placeholder="Ex:-link-Url" required/>
                            </div>
                        </div>
                    </div>
                </div>

                <div  onClick={experince_add} 
                    style={{float: "right", marginTop: "10px", backgroundColor: "blue", borderRadius: "20px", color: "white", fontSize: "1.3rem", padding: "5px  10px",alignTtems: "center", marginRight: "20px"}}>
                    save
                </div>
            </div>
        </div>
    </div>

{/* <!-- pencel icons popup part --> */}

<div id="experienceModal2">

    <div className="modal-experience2">
        <span onClick={closeexperience2}  className="close-experience2">&times;</span>
        <div>
            <i  className="fas fa-arrow-left"></i>
            <span style={{marginLeft: "30px"}}>Experience</span>
            <div style={{marginTop: "30px"}}>
                <img src="data:image/png;base64,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" alt=" " height="40px" width="40px"/>

                <span style={{marginLeft: "20px", color: "black"}} >
                    Student fellow
                </span>
                <p style={{marginLeft: "70px", fontSize: "15px",color: "gray"}}>
                    HyperVerge Academy · InternshipHyperVerge Academy <br/>· Internship
<br/>Nov 2021 - Present · <br/>3 mosNov 2021 - Present · 3 mos<br/>
Bangalore Urban, <br/>Karnataka, IndiaBangalore. <i onClick={experience3} style={{float: "right;"}}  className="fas fa-pencil-alt"></i>

                </p>
            </div>
          
        </div>
        
    </div>
</div>

<div id="experienceModal3">
   
    <div className="modal-experience3">
        <span  onClick={closeexperience3} className="close-experience">&times;</span>
        <div style={{fontSize: "30px", color: "black"}}>
            Edit experience
        </div>
        <div style={{fontSize: "22px", marginTop: "10px"}}>
            *Title
            {/* <!-- <i   onclick="experience4()"  style="float: right; font-size: 10px;"  className="fas fa-pencil-alt"></i> --> */}
            <div>
                <div  onClick={experience4} className="form-group  row name_box ">
                    <input id="Title" style={{height: "40px", marginTop: "20px"}} className="col-sm-11 name  form-control"
                        type="text"  name="fname" placeholder="Student fellow"
                        required />   
                </div>
            </div>
        </div>
        <div style={{fontSize: "22px", marginTop: "10px"}}>
            *Employment type
            <div>
                <div  onClick={experience4}  className="form-group  row name_box ">
                    <input id="Title" style={{height: "40px", marginTop: "20px"}}className="col-sm-11 name education_box form-control"
                        type="text" name="fname" placeholder="Internship"
                        required/>
                </div>
            </div>
        </div>
        <div style={{fontSize: "22px", marginTop: "10px"}}>
            *Company name 
            <div>
                <div  onClick={experience4}  className="form-group  row name_box ">
                    <input id="Title" style={{height: "40px", marginTop: "20px"}} className="col-sm-12 name"
                        type="text" name="fname" placeholder="HyperVerge"
                        required/>
                </div>
            </div>
        </div>
        <div style={{fontSize: "22px", marginTop: "10px"}}>
            *Location
            <div>
                <div onClick={experience4}  className="form-group  row name_box form-control ">
                    <input id="Title" style={{height: "40px", marginTop: "20px"}} className="col-sm-11 name "
                        type="text" name="fname" placeholder="Bangalore"
                        required/>
                </div>
            </div>
        </div>
        <div style={{fontSize: "22px", marginTop: "10px"}}>
            Industry *
            <div>
                <div className="form-group  row name_box ">
                    <input id="Title" style={{height: "40px", marginTop: "20px"}} className="col-sm-11 name  form-control"
                        type="text" name="fname" placeholder="Computer Software"
                        required/>
                </div>
            </div>
        </div>
        <div style={{fontSize: "22px", marginTop: "10px"}}>
            Headline*
            <div>
                <div className="form-group  row name_box ">
                    <input id="Title" style={{height: "40px", marginTop: "20px"}} className="col-sm-11 name  form-control"
                        type="text" name="fname" placeholder="Attended Chatrapati Sahuji Maharaj Kanpur University, Kanpur"
                        required/>
                </div>
            </div>
        </div>
        <hr/>
        <div   onClick={experince_add}
                    style={{float: "right", marginTop: "10px", backgroundColor: "blue", borderRadius: "20px", color: "white", fontSize: "1.3rem", padding: "5px  10px",alignItems: "center", marginRight:" 20px"}}>
                    save
                </div>       
    </div>
</div>
<div id="experienceModal4">
   
    <div class="modal-experience4">
        <span   onClick={closeexperience4} class="close-experience">&times;</span>
        <div>
            Discard changes
        </div>
        <hr/>
        <div>
            Are you sure you want to <br/>discard the changes you made?
        </div>
        <hr/>
        <div onClick={experince_add}
                    style={{marginTop: "10px", backgroundColor: "blue", borderRadius: "20px" ,color: "white",padding: "0px  10px",alignItems: "center", marginRight: "20px", width: "100px"}}>
                    Discard 
                    
                </div>
       
                   
    </div>
</div>
    
    </div>
  );
}
export default  Experience