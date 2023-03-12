import React from "react";
import { GrFormNextLink } from "react-icons/gr";
const Input = ({ value, placeholder, onChange, onClick }) => {
  return (
    <div className='input_container'>
      <input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type='text'
      />
      <GrFormNextLink onClick={onClick} style={{ cursor: "pointer" }} />
    </div>
  );
};

export default Input;
