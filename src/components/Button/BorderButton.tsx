import React from "react";
import Button from './Button'

interface ButtonProps {
    title: string,
    disabled?: boolean,
    btnClick?: (V:number) => any,
    customId?: any,
    btnNumber?: any
}

const BorderButton = (props: ButtonProps) => {
    console.log(props.customId == props.btnNumber);
    
    return (
        <div>
            <Button
                title={props.title}
                customStyle={`${props.customId == props.btnNumber ? "activeBtnBorderStyle" : "diactiveBtnBorderStyle"}`}
                onPress={(v)=>props.btnClick?.(v)}
                id={props.customId}
            />
        </div>
    )
}

export default BorderButton;