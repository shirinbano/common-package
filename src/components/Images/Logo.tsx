import React from "react";

interface BaseLogoProps{
    baseClass?:string,
    logo:string
}

const BaseLogo = (props:BaseLogoProps) => {
    return (
        <div className={props.baseClass}>
            <img src={props.logo} />
        </div>
    )
}

export default BaseLogo;