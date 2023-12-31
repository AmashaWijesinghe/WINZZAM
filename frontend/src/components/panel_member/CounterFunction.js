import React, {useState} from "react";

function CounterFunction(){

    let [number,setNumber] = useState(0);

    function increment(){
        setNumber(number=number+1)
    }

    return(
        <div>
            <h3>Functional Componenet</h3>
            <h1>Counter = {number}</h1>
            <button onClick={e=>increment()}>Increment</button> 
        </div>
    )

}
export default CounterFunction;
