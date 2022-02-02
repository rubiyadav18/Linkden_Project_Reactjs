import React from 'react';
function education_add() {
    let a=document.getElementById("education_name").value; 
    let b=document.getElementById("education_image").value
    let id=localStorage.getItem('id')
  
      fetch("/education", {
          method: "POST",
          headers: {'Content-Type': 'application/json'} ,
          body: JSON.stringify({education:a,ImageUrl:b,userid:id})
        }).then(res => {
          console.log("Request complete! response:", res);
          location.reload();
  
        });
  }

function eduction() { 
    let  modal = document.getElementById("eductionModal");
    modal.style.display = "block";   
  }
  function closeeduction() { 
    let  modal = document.getElementById("eductionModal");
    modal.style.display = "none";   
  }
  
  function eduction2() { 
    let  modal = document.getElementById("eductionModal2");
    modal.style.display = "block";   
  }
  function closeeduction2() { 
    let  modal = document.getElementById("eductionModal2");
    modal.style.display = "none";   
  }
  function eduction3() { 
    let  modal = document.getElementById("eductionModal3");
    modal.style.display = "block";   
  }
  function closeeduction3() { 
    let  modal = document.getElementById("eductionModal3");
    modal.style.display = "none";   
  }
  function eduction4() { 
    let  modal = document.getElementById("eductionModal4");
    modal.style.display = "block";   
  }
  function closeeduction4() { 
    let  modal = document.getElementById("eductionModal4");
    modal.style.display = "none";   
  }
  function eduction5() { 
    let  modal = document.getElementById("eductionModal5");
    modal.style.display = "block";   
  }
  function closeeduction5() { 
    let  modal = document.getElementById("eductionModal5");
    modal.style.display = "none";   
  }
  
  function experience4() { 
    let  modal = document.getElementById("experienceModal4");
    modal.style.display = "block";   
  }

function Education() {
  return (
     
    <div>
        <div className="container-f">
    <div className="heading_skills">
        <h3>
            Education 
        </h3>
    </div>
    <div className="icons-skills">
        <i onClick={eduction2} className="fas fa-pencil-alt"></i>
        <i onClick={eduction} className="fas fa-plus"></i>
    </div>
</div>
<div>
    {/* <% if(education != null) { %>
        <% education.forEach(function(ed, index){ %>
           
              <div className="skills_aling"> 
                  <div style="display: flex; align-items: center;">
                    <img src="<%= ed.ImageUrl %>"
                    alt="" width="40px" height="40px">

                    <p style="margin: 5px 20px; font-size: 20px;"> <%= ed.education %></p>

                  </div>
                  
                
                <i onclick="delete_education('<%= ed._id %>')" className="far fa-trash-alt"></i></div>
        <% }) %>
    <% } %> */}
    </div>

<div id="eductionModal">

    <div className="modal-eduction">
        <span  onClick={closeeduction} className="close-eduction">&times;</span>
        <div style={{fontSize: "25px", paddingLeft: "10px",fontStyle: "italic"}}>
            Education
            <div style={{fontSize: "22px"}}>
                *School
                <div>
                    <div className="form-group  row name_box ">
                        <input id="education_name" className="col-sm-8 name form-control" type="text"  name="fname"
                            placeholder="Ex:- Boston University" required/>
                    </div>
                </div>
            </div>
            <div style={{fontSize: "22px"}}>
                *ImageUrl
                <div>
                    <div  className="form-group  row name_box ">
                        <input  id="education_image" className="col-sm-8 name  form-control" type="text"  name="fname"
                            placeholder="Ex:link" required/>


                    </div>
                </div>
            </div>
    
        </div>
        <div  onClick={education_add}
            style={{float: "right", marginTop: "2rem", backgroundColor: "blue", borderRadius: "20px", color: "white", fontSize: "1.3rem", padding: "5px  10px",alignItems: "center",marginRight: "20px"}}>
            save
        </div>
    </div>
</div>


<div id="eductionModal2">


    <div className="modal-eduction2">
        <span onClick={closeeduction2} className="close-eduction">&times;</span>
        <p style={{fontSize: "20px", fontStyle: "italic"}}>
            Education
            {/* <!-- <i onclick="eduction3()"   className="fas fa-pencil-alt" style="float: right; margin-right: 2rem;"></i> --> */}
        </p>
        <img src="https://www.logolynx.com/images/logolynx/s_06/061d9fde6d9e67514ff7b5640859080e.jpeg" alt="" style={{width: "40px", height: "40px"}}/>

            <h1 style={{fontSize: "18px", marginTop: "-27px", marginLeft: "50px"}}>Chatrapati Sahuji Maharaj Kanpur
                University, Kanpur  
                <i  onClick={eduction3}  style={{float: "right", color: "gray"}}   className="fas fa-pencil-alt"></i>     
         </h1>
         <div>
            <img src="https://www.logolynx.com/images/logolynx/s_06/061d9fde6d9e67514ff7b5640859080e.jpeg" alt="" srcset="" style={{width: "40px", height: "40px", marginTop: "20px",marginLeft: "0px"}}/>
                <h1 style={{fontSize: "18px", marginTop: "-27px", marginLeft: "50px"}}>Chatrapati Sahuji Maharaj Kanpur
                    University, Kanpur
                    <i onClick={eduction3} style={{float: "right", color: "gray"}}   className="fas fa-pencil-alt"></i>
                    
             </h1>
    
         </div>
         <div>
            <img src="https://www.logolynx.com/images/logolynx/s_06/061d9fde6d9e67514ff7b5640859080e.jpeg" alt="" srcset="" style={{width: "40px", height: "40px", marginTop: "20px",marginLeft: "0px"}}/>
                <h1 style={{fontSize: "18px", marginTop: "-27px", marginLeft: "50px"}}>Chatrapati Sahuji Maharaj Kanpur
                    University, Kanpur
                    <i  onClick={eduction3}  style={{float: "right", color: "gray"}}   className="fas fa-pencil-alt"></i>
                    
             </h1>
    
         </div>

    </div>
</div>


<div id="eductionModal3">


    <div className="modal-eduction3">
        <span  onClick={closeeduction3} className="close-eduction">&times;</span>
        <div style={{fontSize: "25px", color: "black"}}>
            Edit Education
        </div>
        <div style={{fontSize: "22px", marginTop: "10px"}}>
            *School
            <div>
                <div   onClick={experience4}  className="form-group  row name_box "  style={{fontSize: "17px"}}>
                    <input id="Title" style={{height: "40px", marginTop: "20px"}} className="col-sm-11 name  form-control"
                        type="text"  name="fname" placeholder="Chatrapati Sahuji Maharaj Kanpur University, Kanpur"
                        
                        required/>
                    
                       
                </div>
            </div>
        </div>
        <div style={{fontSize: "22px", marginTop: "10px"}}>
            *Degree
            <div>
                <div  onClick={experience4}   className="form-group  row name_box " style={{fontSize:"17px"}}>
                    <input id="Title" style={{height: "40px", marginTop: "20px"}} className="col-sm-11 name  form-control"
                        type="text"  name="fname" placeholder="Bachelor of Arts - BA"
                        
                        required/>
                    
                       
                </div>
            </div>
        </div>
        <div style={{fontSize: "22px", marginTop: "10px"}}>
            *Field of study
            <div>
                <div  onClick={experience4}   className="form-group  row name_box "  style={{fontSize: "17px"}}>
                    <input id="Title" style={{height: "40px", marginTop: "20px"}} className="col-sm-11 name  form-control"
                        type="text"  name="fname" placeholder="Computer Software Engineering"
                        
                        required/>
                    
                       
                </div>
            </div>
        </div>
        <div style={{fontSize: "22px", marginTop: "10px"}}>
            *Grade
            <div>
                <div   onClick={experience4}   className="form-group  row name_box "  style={{fontSize: "17px"}}>
                    <input id="Title" style={{height: "40px", marginTop: "20px"}} className="col-sm-11 name form-control"
                        type="text"  name="fname" placeholder=""
                        
                        required/>
                    
                       
                </div>
            </div>
        </div>

        <div style={{fontSize: "22px", marginTop: "10px"}}>
            *Activities and societies
            <div>
                <div  onClick={experience4}   className="form-group  row name_box "  style={{fontSize: "17px"}}>
                    <input id="Title" style={{height: "70px", marginTop: "20px"}} className="col-sm-11 name form-control"
                        type="text"  name="fname" placeholder="Ex Alpha Phi Omega."
                        
                        required/>
                        <p style={{marginLeft: "45rem"}}>
                            0/500
                        </p>
                    
                       
                </div>
            </div>
        </div>
        <div style={{fontSize: "22px", marginTop: "10px"}}>
            *Description
            <div>
                <div onClick={experience4}   className="form-group  row name_box "  style={{fontSize: "17px"}}>
                    <input id="Title" style={{height: "70px", marginTop: "20px"}} className="col-sm-11 name  form-control"
                        type="text" name="fname" placeholder=""
                        
                        required/>
                        <p style={{marginLeft: "45rem"}}>
                            0/1,0000
                        </p>
                    
                       
                </div>
            </div>
        </div>
        <div>
            Media
            <p>
                Add to link  to external  documents,photos,sites,video,and presentations.
                <span style={{color: "blue", fontSize: "15px"}}>
                    learn more
                </span>
            </p>
        </div>
        {/* <!-- <div style="color: blue; padding: 5px 10px; border-radius: 25px; font-size: 20px;" >
            <i className="fas fa-plus"></i>
            <span>Add to media</span>
        </div> --> */}

        <div><button  onClick={eduction4}  style={{color: "blue", padding: "5px 25px", borderRadius: "25px", fontSize: "20px"}}>  <i className="fas fa-plus"></i> add
            media</button></div>
            <hr/>
            <div style={{marginTop: "70px"}}>
                Delete_education
            </div>
            <div onClick={education_add} 
            style={{float: "right", marginTop: "-2rem", backgroundColor: "blue",borderRadius: "20px", color: "white", fontSize: "1.3rem", padding: "5px  30px",alignTtems: "center", marginRight: "20px"}}>
            save
        </div>
        
    </div>
</div>


<div id="eductionModal4">

    <div className="modal-eduction4">
        <span onClick={closeeduction4}  className="close-eduction">&times;</span>
        <i className="fas fa-link"></i>
        <span onClick={eduction5}  >Add a link</span>
        <div>
            <i className="fas fa-upload"></i>
            <span>
                Upload a media
            <input type="file"
       id="file" name="file"/>


            </span>
        </div>
              
    </div>
</div>

<div id="eductionModal5">

    <div className="modal-eduction5">
        <span onClick={closeeduction5}  className="close-eduction">&times;</span>
        <div>
            <i className="fas fa-arrow-left"></i>
            <span>
                Add a link
            </span>
        </div>
        <hr/>
        <div style={{fontSize: "22px", marginTop: "10px"}}>
            Paste or type a link to a file or video
            <div>
                <div  onClick={experience4}   className="form-group  row name_box "  style={{fontSize: "17px"}}>
                    <input id="Title" style={{height: "40px", marginTop: "20px"}} className="col-sm-12 name  form-control"
                        type="text"  name="fname" placeholder="Add"
                        
                        required/>
                    
                       
                </div>
            </div>
        </div>
        <div style={{float: "right",color: "grey"}}>
            Apply
        </div>
    
                   
    </div>
</div>

    </div>
  );
}
export default  Education