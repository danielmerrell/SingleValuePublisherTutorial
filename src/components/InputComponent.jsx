import { useState } from "react";
import React from 'react';
import { ManagerContext } from "../manager-context";

export function InputComponent(props) {
  const { manager } = React.useContext(ManagerContext)
  const [value, setValue] = useState(manager.title);
  const onChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <input
      value={value}
      onChange={onChange}
    />
  );
}