import React from "react";
import './Reasons.css'

function Reasons(){
    return(
        <div className="batch-form-overlay">
      <div className="reason-form-container">
      {/* <button className="close-button"><img src="close.png"/></button> */}
      <a href="/dashboard"><button className="close-button"><span class="close">&times;</span></button></a>
       <div className="q_1"><h2>Exam-10 paper discussion of Anushka Indunil will be held on 2023/03/23.Confirm your paricipation.</h2></div>
       <div className="text_box">
       <input type="text" id="fname" name="fname"></input><br/>
       </div>
       <div className="btn_submit">
       <button className="btn_btn_submit">Submit</button>
       </div>
    
      </div>
    </div>
    )
}

export default Reasons;