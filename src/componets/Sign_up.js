import React from 'react';

function Sign_up() {
    return (
       
            <div className="flex">

                <div className="sign_up">
                    <h1 style={{marginTop: "-35px", fontSize: "30px", marginLeft: "9rem"}}>
                        Sign_Up_Page
                    </h1>
                    <input id="first_name" type="text" placeholder="first_name" />
                    <input id="last_name" type="text" placeholder="last_name" />
                    <input id="Email" type="text" placeholder="Email" />
                    <input id="phonenumber" type="text" placeholder="phonenumber" />
                    <input id="password" type="text" placeholder="password" />
                    <input onclick="Add_user()" type="button" value="Submit" name="Submit" />
                </div>


            </div>

      
    );
}
export default Sign_up