import './inputs.scss';
import { useState } from "react";

const Inputs = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (event) => {
    setFocused(true);
  };
  
  return (
    <div className="inputs">
      <label className="formLabel">{label}</label>
      <input
        className="formInput"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "passwordConfirm" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  )
}

export default Inputs