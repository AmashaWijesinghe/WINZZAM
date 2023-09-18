import React from "react";

function Row_2({ onMonthFormToggle }){
    return(
       <div className="row_2">
        <div className="arrived">
           <div className="arrived_title">
            New Arrivals-Paper Marking
            <div className="marking_row">
            <div className="marking">
        <div className="card_1">
        <img className="sir_pic" src="vijey.jpg"></img>
        </div>
        <div className="card_2">
        <div className="con">
        <div className="sir_name">Anushka Indunil</div>
                     <div jclassName="sir_name">paper-10</div>
                     <div className="due_date">Due date:-07/23</div>
                     <div className="due_date">No of papers:-05/20</div>
        </div>
                  <a href="dashboard/arrived_confirming"><button className="btn_view">View</button></a>
        </div>
        
            </div> 
            <div className="marking">
        <div className="card_1">
        <img className="sir_pic" src="vijey.jpg"></img>
        </div>
        <div className="card_2">
        <div className="con">
        <div className="sir_name">Anushka Indunil</div>
                     <div jclassName="sir_name">paper-10</div>
                     <div className="due_date">Due date:-07/23</div>
                     <div className="due_date">No of paapers:-05/20</div>
        </div>
                  <a href="dashboard/arrived_confirming"><button className="btn_view">View</button></a>
        </div>
        
            </div> 

            </div>
    
           </div>
        </div>
        <div className="arrived">
           <div className="arrived_title">
           New Arrivals- Discussions
            <div className="marking_row">
            <div className="marking">
        <div className="card_1">
        <img className="sir_pic" src="vijey.jpg"></img>
        </div>
        <div className="card_2">
        <div className="con">
        <div className="sir_name">Anushka Indunil</div>
                     <div className="sir_name">paper-10</div>
                     <div className="next_due_date">Date:-07/23</div>
                    
        </div>
                  <a href="dashboard/arrived_confirming"><button className="btn_view">View</button></a>
        </div>
        
            </div> 
            <div className="marking">
        <div className="card_1">
        <img className="sir_pic" src="vijey.jpg"></img>
        </div>
        <div className="card_2">
        <div className="con">
        <div className="sir_name">Anushka Indunil</div>
                     <div jclassName="sir_name">paper-10</div>
                     <div className="next_due_date">Date:-07/23</div>
        </div>
                  <a href="dashboard/arrived_confirming"><button className="btn_view">View</button></a>
        </div>
        
            </div> 

            </div>
    
           </div>
        </div>
       </div>
    )
}

export default Row_2;