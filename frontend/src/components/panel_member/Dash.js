import React from "react";
import Content from "./Content";
import './Dash.css'
import Sidebar from "./Sidebar";

import { RxDashboard } from "react-icons/rx";
import { MdAlignVerticalBottom } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import { CgProfile} from 'react-icons/cg'
import { LuLogOut } from "react-icons/lu";
// import "bootstrap/dist/css/bootstrap.min.css";

function Dash(){
    return(
      <div className="main_div">
        
      <div className="sideNav">
      <Sidebar />
      </div>
      <div className="rightside">
      <div className="header">
      
      <div className="profile">
        <div className="div_1">
        <img className="profilepic" src="vijey.jpg"></img>
        </div>
        <div className="div_2">
          <div>Sachithra</div>
          <div>Panel memeber</div>
        </div>
        <div>
        <img className="downpic" src="down.png"></img>
        </div>
      </div>
    </div>
   
  <div className="content">
    <Content/>
  </div>
      </div>

</div>
    );
}

export default Dash;