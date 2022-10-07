import React from "react";
import Select from "react-select";

interface SelectProps {
    item?: any,
    onSelect?: (e?: any) => any
}

function FormSelect(props: SelectProps) {
    
    return (
        <div className="mb-3">
            <label htmlFor={`${props.item.id}`} className="form-label">
                {props.item.title}
            </label>

            <Select
                id={`${props.item.id}`}
                options={props.item.data || []}
                placeholder={`${props.item.placeHolder || props.item.title}`}
                getOptionLabel={(option: any) => `${option.title}`}
                getOptionValue={(option: any) => `${option.id}`}
                onChange={(e) => props.onSelect?.(e)}
                isSearchable={props.item.isSearchable || true}
                isDisabled={props.item.disabled}
            />
        </div>
    );
}

export default FormSelect;