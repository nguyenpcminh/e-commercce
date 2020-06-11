import React from "react";

const FormInput = ({ label, handChangle, ...ortherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' onChange={handChangle} {...ortherProps} />
      {label ? (
        <label
          className={`form-input-label ${
            ortherProps.value.length ? "shrink" : ""
          }`}
        >{label}</label>
      ) : null}
    </div>
  );
};

export default FormInput;
