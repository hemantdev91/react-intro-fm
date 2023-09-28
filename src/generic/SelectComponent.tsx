import React from "react";

export interface ISelectComponentProps {
  options: Array<ISelectOption>,
  label: string,
  selectId: string,
  changeHandlerFn: (val: string) => void,
  blurHandlerFn: (val: string) => void,
  defaultValue?: string
}

export interface ISelectOption {
  name: string,
  value: string
}

function SelectComponent({options, label, selectId, changeHandlerFn, blurHandlerFn, defaultValue}: ISelectComponentProps) {

  return <div>
    <label htmlFor={selectId}>{label}</label>
    <select disabled={!options?.length} id={selectId} onChange={(e) => {
      changeHandlerFn(e.target.value)
    }} onBlur={(e) => {
      blurHandlerFn(e.target.value)
    }} value={defaultValue}>
      <option />
      {
        options && options.map(option => (
          <option key={option.value} value={option.value}>{option.name} </option>
        ))
      }
    </select>
  </div>
}

export default SelectComponent;
