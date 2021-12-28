import React from "react";
import classes from "./MySelect.module.css";
function MySelect({ options, value, onChange, defaultValue }) {
  return (
    <div>
      <select
        className={classes.mySelect}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default MySelect;
