import React from 'react';
import { ManagerContext } from "../manager-context";
import { usePublishedValue } from "../hooks/use-published-value";

export function InputComponent(props) {
  const { manager } = React.useContext(ManagerContext)
  const title = usePublishedValue(manager.titlePublisher);

  return (
    <input
      value={title}
    />
  );
}