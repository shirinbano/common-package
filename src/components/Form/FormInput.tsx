import React, { useEffect, useState } from "react";
import InpEye from '../../Assets/Icons/InpEye.svg'

interface FormInputProp {
    item?: any,
    value?: any,
    onChangeText?: (v: any) => any
}

function FormInput(props: FormInputProp) {
    const [valid, setValid] = useState(Boolean);

    useEffect(() => {
        if (props.item.typeMode == 'email') emailValidation()
    }, [props.value])

    const emailValidation = () => {
        const regex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (!(!props.value || regex.test(props.value) === false)) return setValid(true);
        return setValid(false);
    }



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
                <>
                    <input
                        type={props.item.typeMode}
                        inputMode={props.item.keyboardType}
                        className={`${props.item.typeMode == 'email' ? valid ? 'form-control-active' : 'form-control-diactive' : 'form-control-active'}`}
                        id={`${props.item.id}`}
                        placeholder={props.item.placeHolder || props.item.title}
                        onChange={(v) => props.onChangeText?.(v.target.value)}
                        maxLength={props.item.maxLength || 256}
                        value={props.value}
                        disabled={props.item.disabled}
                    />
                    {props.item.typeMode == 'password' && <div className="input-group-addon"> <img src={InpEye} /> </div>}
                </>
            }
            {!!props.item.hint && props.item.typeMode == 'email' && (
                <div id={`${props.item.id}`} className="form-text fs-7">
                    {valid ? '' : 'e-postan doğru değil'}
                </div>
            )}
        </div>
    );
}

export default FormInput;