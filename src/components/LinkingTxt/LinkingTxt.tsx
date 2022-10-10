import React from "react";

interface LinkingProps {
    text?: string,
    hrefLink?: string,
    linkClass?: string,
    divClass?: string,
    logo?: string,
}
const LinkingTxt = (props: LinkingProps) => {
    return (
        <div className={props.divClass}>
            <a className={`btnFont ${props.linkClass}`} href={props.hrefLink} >
                {props.text}
                {props.logo && <img src={props.logo} />}
            </a>
        </div>
    )
}

export default LinkingTxt;