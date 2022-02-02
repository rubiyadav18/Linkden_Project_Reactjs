
function skills() { 
    let  modal = document.getElementById("skillsModal");
    modal.style.display = "block";   
}
function closeskills() { 
    let  modal = document.getElementById("skillsModal");
    modal.style.display = "none";   
}
function  add_skills() {
    let a=document.getElementById("skills_input").value
    let id=localStorage.getItem('id')

    fetch("/skills", {
        method: "POST",
        headers: {'Content-Type': 'application/json'} ,
        body: JSON.stringify({skills:a,userid:id})
      }).then(res => {
        console.log("Request complete! response:", res);
        location.reload();

      });
}

function  delete_skills(id) { 
  fetch("/skills/"+id,{
      method: "DELETE",
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

function delete_education(id) {
  fetch("/education/"+id,{
    method: "DELETE",
  }).then(res => {
    console.log("Request complete! response:", res);
    location.reload();

  });
}

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

// experince part..
function experience() { 
  let  modal = document.getElementById("experienceModal");
  modal.style.display = "block";   
}
function closeexperience() { 
  let  modal = document.getElementById("experienceModal");
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

function  delete_experince(id) { 
  fetch("/experince/"+id,{
      method: "DELETE",
    }).then(res => {
      console.log("Request complete! response:", res);
      location.reload();

    });
}


function name() { 
  let  modal = document.getElementById("nameModal");
  modal.style.display = "block";   
}
function closename() { 
  let  modal = document.getElementById("nameModal");
  modal.style.display = "none"; 
  // document.getElementById("mainName").innerHTML = first_name + " " + last_name;
 
  
}

function  name_add() {
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
function  delete_name(id) { 
  fetch("/name/"+id,{
      method: "DELETE",
    }).then(res => {
      console.log("Request complete! response:", res);
      location.reload();

    });
}


// login

// const user = require("../../models/user");

function Add_user() {
  let a=document.getElementById("first_name").value;  
  let b=document.getElementById("last_name").value;
  let c=document.getElementById("Email").value;
  let d=document.getElementById("password").value;
  let e=document.getElementById("phonenumber").value;
    fetch("/users", {
        method: "POST",
        headers: {'Content-Type': 'application/json'} ,
        body: JSON.stringify({first_name:a,last_name:b,email:c,password:d,PhoneNumber:e})
      }).then((response) => {
        return response.json()}).then((data) =>{
       console.log("Request complete! response:", data);
       
         localStorage.setItem('id', data._id)
         location.replace('/profile/'+data._id);
          
     });
}

function check_user() {
  let c=document.getElementById("Email").value;
  let k=document.getElementById("error");
  let d=document.getElementById("password").value;
    fetch("/login", {
        method: "POST",
        headers: {'Content-Type': 'application/json'} ,
        body: JSON.stringify({email:c,password:d})
      }).then((response) => {
         return response.json()}).then((data) =>{
        console.log("Request complete! response:", data);
        if (data.id=="1"){
          k.innerText="incorrect email" 
           

        }
        else if(data.id=="2"){
          k.innerText="incorrect password"



        }
        else if(data.id=="0"){
          localStorage.setItem('id', data.user._id)
          location.replace('/profile/'+data.user._id);

         

          
        }
      });
}


// pencil
function eduction2() { 
  let  modal = document.getElementById("eductionModal2");
  modal.style.display = "block";   
}
function closeeduction2() { 
  let  modal = document.getElementById("eductionModal2");
  modal.style.display = "none";   
}


// pencel incons for skills popup part

function skills2() { 
  let  modal = document.getElementById("skillsModal2");
  modal.style.display = "block";   
}
function closeskills2() { 
  let  modal = document.getElementById("skillsModal2");
  modal.style.display = "none";   
}

function skills3() { 
  let  modal = document.getElementById("skills_pencel");
  modal.style.display = "none";   
}
// pencel icsons for experence part
function experience2() { 
  let  modal = document.getElementById("experienceModal2");
  modal.style.display = "block";   
}
function closeexperience2() { 
  let  modal = document.getElementById("experienceModal2");
  modal.style.display = "none";   
}

function skills2() { 
  let  modal = document.getElementById("skillsModal2");
  modal.style.display = "block";   
}
// experience3
function experience3() { 
  let  modal = document.getElementById("experienceModal3");
  modal.style.display = "block";   
}
function closeexperience3() { 
  let  modal = document.getElementById("experienceModal3");
  modal.style.display = "none";   
}

// ex4--
function experience4() { 
  let  modal = document.getElementById("experienceModal4");
  modal.style.display = "block";   
}
function closeexperience4() { 
  let  modal = document.getElementById("experienceModal4");
  modal.style.display = "none";   
}

// popup3 of education
function eduction3() { 
  let  modal = document.getElementById("eductionModal3");
  modal.style.display = "block";   
}
function closeeduction3() { 
  let  modal = document.getElementById("eductionModal3");
  modal.style.display = "none";   
}

// popup4
function eduction4() { 
  let  modal = document.getElementById("eductionModal4");
  modal.style.display = "block";   
}
function closeeduction4() { 
  let  modal = document.getElementById("eductionModal4");
  modal.style.display = "none";   
}

// popup5----------------
function eduction5() { 
  let  modal = document.getElementById("eductionModal5");
  modal.style.display = "block";   
}
function closeeduction5() { 
  let  modal = document.getElementById("eductionModal5");
  modal.style.display = "none";   
}
