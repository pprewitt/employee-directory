import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Input(props) {
  return (
    <input
      value={props.filter}
      onChange={props.onChange}
      name="term"
      list="term"
      type="text"
      className="form-control mt-3 "
      placeholder="search employees by last name"
      id="term"
    />

  );
}

export default Input;