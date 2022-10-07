import React from "react";

interface FormInputProp {
    item?: any,
    value?: any,
    onChangeText?: (v:any) => any
}

function FormInput(props: FormInputProp) {
    return (
        <div className="mb-3">
            <label htmlFor={`${props.item.id}`} className="form-label">
                {props.item.title}
            </label>
            {!!props.item.multiline ?
                <textarea
                    // type={props.item.type}
                    inputMode={props.item.keyboardType}
                    className="form-control"
                    id={`${props.item.id}`}
                    placeholder={props.item.placeHolder || props.item.title}
                    onChange={(v) => props.onChangeText?.(v.target.value)}
                    maxLength={props.item.maxLength || 256}
                    value={props.value}
                    disabled={props.item.disabled}
                />
                :
                <input
                    type={props.item.type}
                    inputMode={props.item.keyboardType}
                    className="form-control"
                    id={`${props.item.id}`}
                    placeholder={props.item.placeHolder || props.item.title}
                    onChange={(v) => props.onChangeText?.(v.target.value)}
                    maxLength={props.item.maxLength || 256}
                    value={props.value}
                    disabled={props.item.disabled}
                />
            }
            {!!props.item.hint && (
                <div id={`${props.item.id}`} className="form-text">
                    {props.item.hint}
                </div>
            )}
        </div>
    );
}

export default FormInput;