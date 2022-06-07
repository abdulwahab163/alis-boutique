import React from "react";

const SelectType = ({ item, checked, handleChange }) => {
  return (
    <li>
      <div>
        <input
          className="form-check-input"
          type="checkbox"
          readOnly
          checked={checked}
          id={item.name}
          onChange={(e) => {
            handleChange(item, e.target.checked);
          }}
        />
        <label
          className="mb-0 ms-2 text-capitalize cursor-pointer"
          htmlFor={item.name}
        >
          {item.name} <span className="text-black-50">{item.quantity}</span>
        </label>
      </div>
    </li>
  );
};

export default SelectType;
