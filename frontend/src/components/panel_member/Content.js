import React from "react";
import Row_1 from "./Row_1";
import Row_2 from "./Row_2";
import Row_3 from "./Row_3";

function Content(){
    return(
        <div>
          <div className="row_1">
        <Row_1/>
      </div>

      <div className="row_2">
        <Row_2/>
      </div>

      <div className="row_3">
        <Row_3/>
      </div>
        </div>

    );
}
export default Content;