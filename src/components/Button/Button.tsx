import React from "react";
import Loading from "../Loading/Loading";

interface ButtonProp {
    title?: string,
    customStyle?: string,
    disabled?: boolean,
    loading?: boolean,
    onPress?: (v?:any) => any,
    id?: any

}

const Button = (props: ButtonProp) => {
    let buttonClass = `btn w-100 align-self-center d-flex flex-row justify-content-center position-relative h-25 btnFont ${props.customStyle}`;

    return (
        <button className={buttonClass} onClick={!props.disabled ? props.onPress : () => ''} id={props.id}>
            {props.title}
            {props.loading && (
                <div className="position-fixed" style={{ left: 0, right: 0 }}>
                    <Loading />
                </div>
            )}
        </button>
    );
};

export default Button;