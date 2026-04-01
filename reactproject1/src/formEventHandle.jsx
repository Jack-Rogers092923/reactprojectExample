import {use, useState } from "react";

function FormExample() {
    const[height,setheight] = useState("");
    const[weight,setweight] = useState("");

    const handleSubmit = (event) => {
    

    const h = parseFloat(height)/100;
    const w = parseFloat(weight);

    console.log("height",h);
    console.log("weight",w);
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Height (cm):</label>
                <input type="text" 
                value={height} 
                onChange={(e) => setheight(e.target.value)} />
                
                
                
            </div>
            <div>
                <label>Weight (kg):</label>
                <input type="text" 
                value={weight}
                onChange={(e) => setweight(e.target.value)} />
                
            </div>
            <button type="submit">Calculate BMI</button>
        </form>
            
    )
};
    export default FormExample;