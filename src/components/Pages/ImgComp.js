import React from "react";
import "./ImgComp.css"
function ImgComp({ src , txt }) {
    let  imgStyles={
        width:100+"%",
        height:" auto"
    }
    return(
        <>
            <img src={src} alt="slide-img" style={imgStyles}></img>
            <div className="gr">
                <a  href="#"><h1 className="des">{txt}</h1></a>
            </div>
        </>
    )
}

export default ImgComp
