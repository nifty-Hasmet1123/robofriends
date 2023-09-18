import "./css/CreateCard.css"
import React from "react";

const CreateCard = () => {
    return (
        <React.Fragment>
            <form className="field">
                <fieldset>
                    <legend id="create">Create Your Own Card</legend>
                    <input className="input-tag" type="text" placeholder="Enter Robot Name" required/>
                    <input className="input-tag" type="text" placeholder="Enter Email" required/>
                    <button className="input-tag" type="submit">Submit</button>
                </fieldset>
            </form>
        </React.Fragment>
    );
}

export default CreateCard;