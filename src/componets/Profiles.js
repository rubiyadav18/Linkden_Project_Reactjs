import React from 'react';


function closename() { 
    let  modal = document.getElementById("nameModal");
    modal.style.display = "none"; 
    // document.getElementById("mainName").innerHTML = first_name + " " + last_name;
   
    
  }
  
  function  name_add()  {
    let a=document.getElementById("first_name").value;  
    let b=document.getElementById("last_name").value; 
    let id=localStorage.getItem('id')
  
    fetch("/name", {
        method: "POST",
        headers: {'Content-Type': 'application/json'} ,
        body: JSON.stringify({first_name:a,last_name:b,userid:id})
      }).then(res => {
        console.log("Request complete! response:", res);
        location.reload();
  
      });
  }

function Profile() {


    return (
        <div>
            <div className="background">

                <i id="camra_icons" className="fas fa-camera"></i>
            </div>
            <div className="img">
                <img src="https://i.pinimg.com/originals/6f/de/85/6fde85b86c86526af5e99ce85f57432e.jpg" alt="" width="150px"
                    height="150px" />
            </div>

            <i  onClick={name}  style={{float: "right", marginRight: "30px", marginTop: "-30px"}}className="fas fa-pencil-alt"></i>


            <div className="icon2"></div>
            <div className="details">

                <div className="details1">



                    <h4 style={{fontSize: "18px"}}>
                        Chatrapati Sahuji Maharaj <br/>Kanpur University, Kanpur<br/>
                        <h4 style={{color: "blue", fontSize: "18px"}}>
                            Contact infor
                        </h4>
                        <h4 style={{color: "blue", fontSize: "18px",}}>
                            68 Connections
                        </h4>
                    </h4>
                    <div className="box">
                        <button
                            style={{backgrounColor: "blue", color: "white", padding: "5px 10px", borderRadius:"25px", fontSize: "20px"}}>open
                            to</button>
                        <button style={{color: "blue", padding: "5px 10px", borderRadius: "25px", fontSize: "20px"}}>add to
                            prifiles</button>
                        <button style={{padding: "5px 10px", borderRadius:"25px", fontSize: "20px"}}>more</button> 
                    </div>

                </div>
                

                <div className="details2">
                    <div>
                        <img src="data:image/png;base64,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"
                            alt="" width="40px" hight="50px" />
                        <a href=""> Hyper Verge</a>

                    </div>
                    <div>
                        <a href=""> Chatrapati Sahuji Maharaj<br/> Kanpur University, Kanpur <br/></a>
                    </div>

                </div>
            </div>
            <div className="details">
                <div className="flex1">

                    <div style={{backgroundColor: "rgb(243,242,239)", borderRadius: "10px", width: "90%",padding: "10px"}}>
                        <h5 style={{marginLeft: "7rem", fontSize: "1rem"}}>open to work</h5>
                        <h5 style={{marginLeft: "7rem", fontSize: "1rem"}}>software</h5>
                    </div>

                </div>
                <div style={{backgroundColor: "rgb(243,242,239)",borderRadius: "10px" ,width: "90%",padding: "0px"}} className="flex2">
                    <h5 style={{marginLeft: "7rem",marginTop: "1rem",fontSize: "1rem"}}> find</h5>
                    <h5 style={{marginLeft: "7rem", fontSize: "1rem"}}>service </h5>
                </div>
            </div>



            <div id="nameModal">


                <div className="modal-name">
                    <span  onClick={closename} className="close-skills">&times;</span>
                    <div style={{fontSize: "25px", paddingLeft: "10px",fontStyle: "italic"}}>
                        Add Intro
                        <div style={{fontSize:"22px",marginTop: "10px"}}>
                            *First Name
                            <div>
                                <div className="form-group  row name_box ">
                                    <input id="first_name" style={{height: "40px",marginTop: "20px"}}
                                    className="col-sm-11 name eduction_box form-control" type="text"  name="fname"
                                
                                        placeholder="Enter your first name" required />
                                </div>
                            </div>
                        </div>

                        <div style={{fontSize: "22px", marginTop: "10px"}}>
                            *Last Name
                            <div>
                                <div className="form-group  row name_box ">
                                    <input id="last_name" style={{height:"40px" ,marginTop: "20px"}} className="col-sm-11 name eduction_box form-control" 
                                        type="text"  name="fname" placeholder="Enter your last name" required />
                                </div>
                            </div>
                        </div>
                        <div style={{fontSize: "22px", marginTop: "10px"}}>
                            *Additionam Nmae
                            <div>
                                <div className="form-group  row name_box ">
                                    <input id="Title1" style={{height: "40px", marginTop: "20px"}} className="col-sm-11 name eduction_box form-control"
                                        type="text" name="fname" placeholder="" required />

                                </div>
                            </div>
                        </div>
                        <div onClick={name_add} 
                            style={{float: "right",marginTop: "10px", backgroundColor: "blue", borderRadius: "20px", color: "white", fontSize: "1.3rem", padding: "5px  10px",alignItems: "center", marginRight: "20px"}}>
                            save
                        </div>


                    </div>

                </div>
            </div>

        </div>

    );
}
export default Profile
