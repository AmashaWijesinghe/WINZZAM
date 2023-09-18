import React from "react";
import './Box_1.css'

function Arrived_discussion(){
    return(
        <div className="batch-form-overlay">
      <div className="batch-form-container">
      {/* <button className="close-button"><img src="close.png"/></button> */}
      <a href="/dashboard"><button className="close-button"><span class="close">&times;</span></button></a>
       <div className="q_1"><h2>Exam-10 paper discussion of Anushka Indunil will be held on 2023/03/23.Confirm your paricipation.</h2></div>
       <div className="btn_confirm">
       <a href="/dashboard"><button className="btn_btn_confirm">Yes</button></a>
       <a href="/dashboard/arrived_discussion/reasons"><button className="btn_btn_confirm">No</button></a>
       </div>
    
      </div>
    </div>
    )
}

export default Arrived_discussion;