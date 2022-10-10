import React from "react";


interface MiddleProps{
    text: string
}

const MiddleTxt = (props:MiddleProps) => {
    return (
        <div className="d-flex justify-content-between">
            <hr className="col w-100" />
            <div className="col text-center linkingFontSize text-nowrap">{props.text}</div>
            <hr className="col w-100" />
        </div>
    )
}

export default MiddleTxt;