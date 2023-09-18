import React from "react";
import './Box_1.css'

function Arrived_confirming(){
    return(
        <div className="batch-form-overlay">
      <div className="batch-form-container">
      {/* <button className="close-button"><img src="close.png"/></button> */}
      <a href="/dashboard"><button className="close-button"><span class="close">&times;</span></button></a>
       <div className="q_1"><h2>Exam-10 papers of Anushka Indunil must be marked before 2023/03/12.</h2></div>
       <div className="btn_confirm">
       <a href="/dashboard"><button className="btn_btn_confirm">Accept</button></a>
       <a href="/dashboard"><button className="btn_btn_confirm">Reject</button></a>
       </div>
    
      </div>
    </div>
    )
}

export default Arrived_confirming;