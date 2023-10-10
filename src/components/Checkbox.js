import "./Checkbox.css";
import React from "react";

function Checkbox(props) {
  const {
    style,
    checked,
    onChange,
    label,
    disabled,
    icon,
    labelPlacement = "right",
  } = props;

  return (
    <label>
      {labelPlacement === "left" && <span>{label}</span>}
      {icon || (
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          style={style}
        />
      )}
      {labelPlacement === "right" && <span>{label}</span>}
    </label>
  );
}

export default Checkbox;
