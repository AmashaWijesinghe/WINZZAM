import React from "react";
import './Reg_form.css'

function Reg_form(){
    return(
       <div className="reg_box">
          
  <div class="container">
    <h1 className="Reg_topic">Registration</h1>
    <p className="para_1">Please fill in this form to create an account.</p>

    <div className="reg_row">
       <div className="reg_col">
       <label for="email"><b>First Name</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required></input>
       </div>

       <div className="reg_col">
       <label for="email"><b>Last Name</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required></input>
       </div>
    </div>

    <div className="reg_row">
       <div className="reg_col">
       <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required></input>
       </div>

       <div className="reg_col">
       <label for="email"><b>Mobile No</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required></input>
       </div>
    </div>
    
    <div className="reg_row">
    <div className="reg_col">
       <label for="email"><b>School</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required></input>
       </div>

       <div className="reg_col">
       <label for="email"><b>Year of A/L</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required></input>
       </div>
    </div>

    <div className="reg_row">
    <div className="reg_col">
       <label for="email"><b>Results</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required></input>
       </div>

       <div className="reg_col">
       <label for="email"><b>University</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required></input>
       </div>
    </div>

    {/* <div className="reg_row">
    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required></input>
    </div> */}


    <p className="para">By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    <button type="submit" class="registerbtn">Register</button>
  </div>

       </div>
    )
}

export default Reg_form;