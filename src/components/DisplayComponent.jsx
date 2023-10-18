import React from 'react';
import { ManagerContext } from "../manager-context";
import { usePublishedValue } from "../hooks/use-published-value";


export function DisplayComponent(props) {
  const { manager } = React.useContext(ManagerContext)
  const title = usePublishedValue(manager.titlePublisher);
  
  return (
    <div>
      <p>Title: {title}</p>
    </div>
  );
}