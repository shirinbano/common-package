import React from "react";
import Loading from "../Loading/Loading";

interface ButtonProp {
    className?: string,
    title?: string,
    background?: string,
    width?: string | number,
    disabled?: boolean,
    loading?: boolean,
    onPress?: () => any
}

const Button = (props: ButtonProp) => {
    let buttonClass = `btn ${props.disabled ? "btn-secondary" : props.background || "btn-primary"
        } ${props.width || "w-100"}  align-self-center d-flex flex-row justify-content-center text-white position-relative btnHeight`;

    return (
        <button className={props.className || buttonClass} onClick={!props.disabled ? props.onPress : () => ''}>
            {props.title}
            {props.loading && (
                <div className="position-fixed" style={{left: 0, right:0}}>
                    <Loading />
                </div>
            )}
        </button>
    );
};

export default Button;