import React from 'react';
function check_user() {
  let c=document.getElementById("Email").value;
  let k=document.getElementById("error");
  let d=document.getElementById("password").value;
    fetch("http://localhost:3000/login",{

        method: "POST",
        headers: {'Content-Type': 'application/json'} ,
        body: JSON.stringify({email:c,password:d})
      }).then((response) => {
         return response.json()}).then((data) =>{
        console.log("Request complete! response:", data);
        if (data.id==="1"){
          k.innerText="incorrect email" 
           

        }
        else if(data.id==="2"){
          k.innerText="incorrect password"

        }
        else if(data.id==="0"){
          localStorage.setItem('id', data.user._id)
          location.replace('/profile/'+data.user._id);
          
        }
      });
}

function Login() {
  return (
   
  <div className="flex">

    <div className="sign_up">
        <h2 id="error"  style={{marginLeft:"10rem", marginTop: "-2rem"}}>
            Login_page
        </h2>
        <input id="Email" type="text" placeholder="Email"/>
        <input id="password" type="text" placeholder="password"/>
        <input  onClick={check_user} type="button" value="Submit" name="Submit"/>  
    </div> 
    </div>      
  );
}
export default Login



