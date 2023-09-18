import React from "react";
import "./css/ScrollDiv.css";

// adding a Scroll Component (not a closing tag)
const Scroll = (props) => {
    return (
        <div id="scroll-div">
            {props.children}
        </div>
    )
}

export default Scroll;
