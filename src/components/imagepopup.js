import React from "react";
import "./imagepopup.css";
const ImagePopUp = (props) =>{
return(
    <>
    <div className="imagepopupbackground" onClick={props.click}>
            <div className="clickedimagebackground" >
                <img className="image" src={props.show}/>
            </div>
    </div>
    </>
    );
}
export default ImagePopUp;