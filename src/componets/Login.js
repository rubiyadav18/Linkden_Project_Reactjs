import React from 'react';

function Login() {
  return (
   
  <div className="flex">

    <div className="sign_up">
        <h2 id="error"  style={{marginLeft:"10rem", marginTop: "-2rem"}}>
            Login_page
        </h2>
        <input id="Email" type="text" placeholder="Email"/>
        <input id="password" type="text" placeholder="password"/>
        <input onclick="check_user()" type="button" value="Submit" name="Submit"/>  
    </div> 
    </div>      
  );
}
export default Login

