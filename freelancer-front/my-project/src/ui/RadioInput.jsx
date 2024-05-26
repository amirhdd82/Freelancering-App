import React from "react";

function RadioInput({ lable, value, onChange, name, id, checked }) {
  return (
    <div className="flex  item-center gap-x-2 text-secondary-600 ">
      <input
        className="cursor-pointer w-4 h-4  accent-blue-500 form-radio text-primary-900 focus:ring-blue-500"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id }> {lable}</label>
    </div>
  );
}

export default RadioInput;
