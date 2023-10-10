import './Select.css';
import React from 'react';

function Select(props) {
  const { id, value, onChange, options } = props;

  return (
    <select
      id={id}
      onChange={onChange}
      value={value}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
